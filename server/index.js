// Enhanced Express + SQLite backend for donor registrations, donations, and patients
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';
import Stripe from 'stripe';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Stripe (use test key for now)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51234567890');

const dbPath = path.join(__dirname, 'kidney.sqlite');
const db = new Database(dbPath);

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT DEFAULT (datetime('now')),
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    dob TEXT,
    gender TEXT,
    height_ft INTEGER,
    height_in INTEGER,
    weight_lbs INTEGER,
    marital_status TEXT,
    legal_name INTEGER,
    address1 TEXT,
    address2 TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    notes TEXT,
    status TEXT DEFAULT 'new'
  );

  CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT DEFAULT (datetime('now')),
    stripe_payment_id TEXT UNIQUE,
    amount INTEGER,
    currency TEXT DEFAULT 'usd',
    donor_name TEXT,
    donor_email TEXT,
    donor_phone TEXT,
    billing_address TEXT,
    billing_city TEXT,
    billing_state TEXT,
    billing_zip TEXT,
    billing_country TEXT,
    frequency TEXT DEFAULT 'one-time',
    status TEXT DEFAULT 'pending',
    notes TEXT
  );

  CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TEXT DEFAULT (datetime('now')),
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    dob TEXT,
    blood_type TEXT,
    dialysis_start_date TEXT,
    hospital TEXT,
    insurance TEXT,
    priority_level TEXT DEFAULT 'standard',
    matched_donor_id INTEGER,
    status TEXT DEFAULT 'waiting',
    notes TEXT
  );
`);

// ===== DONOR REGISTRATIONS =====
app.post('/api/registrations', (req, res) => {
  const r = req.body || {};
  const stmt = db.prepare(`
    INSERT INTO registrations (
      first_name, last_name, email, phone, dob, gender,
      height_ft, height_in, weight_lbs, marital_status, legal_name,
      address1, address2, city, state, zip, notes, status
    ) VALUES (@first_name, @last_name, @email, @phone, @dob, @gender,
      @height_ft, @height_in, @weight_lbs, @marital_status, @legal_name,
      @address1, @address2, @city, @state, @zip, @notes, @status)
  `);
  const info = stmt.run({
    status: 'new',
    legal_name: r.legal_name ? 1 : 0,
    ...r,
  });
  const row = db.prepare('SELECT * FROM registrations WHERE id = ?').get(info.lastInsertRowid);
  res.json(row);
});

app.get('/api/registrations', (req, res) => {
  const { q = '', status = '', limit = 50, offset = 0 } = req.query;
  const where = [];
  const params = { limit: Number(limit), offset: Number(offset) };
  if (q) {
    where.push('(first_name LIKE @like OR last_name LIKE @like OR email LIKE @like)');
    params.like = `%${q}%`;
  }
  if (status) {
    where.push('status = @status');
    params.status = String(status);
  }
  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const rows = db.prepare(`SELECT * FROM registrations ${whereSql} ORDER BY created_at DESC LIMIT @limit OFFSET @offset`).all(params);
  const total = db.prepare(`SELECT COUNT(*) as c FROM registrations ${whereSql}`).get(params).c;
  res.json({ rows, total });
});

app.patch('/api/registrations/:id', (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body || {};
  const stmt = db.prepare('UPDATE registrations SET status = COALESCE(@status, status), notes = COALESCE(@notes, notes) WHERE id = @id');
  stmt.run({ id, status, notes });
  const row = db.prepare('SELECT * FROM registrations WHERE id = ?').get(id);
  res.json(row);
});

// ===== DONATIONS =====
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, donor_name, donor_email } = req.body;

    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        donor_name,
        donor_email,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      paymentId: paymentIntent.id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/donations', (req, res) => {
  const d = req.body || {};
  const stmt = db.prepare(`
    INSERT INTO donations (
      stripe_payment_id, amount, currency, donor_name, donor_email, donor_phone,
      billing_address, billing_city, billing_state, billing_zip, billing_country,
      frequency, status, notes
    ) VALUES (@stripe_payment_id, @amount, @currency, @donor_name, @donor_email, @donor_phone,
      @billing_address, @billing_city, @billing_state, @billing_zip, @billing_country,
      @frequency, @status, @notes)
  `);
  const info = stmt.run({
    currency: 'usd',
    status: 'completed',
    ...d,
  });
  const row = db.prepare('SELECT * FROM donations WHERE id = ?').get(info.lastInsertRowid);
  res.json(row);
});

app.get('/api/donations', (req, res) => {
  const { limit = 50, offset = 0 } = req.query;
  const rows = db.prepare('SELECT * FROM donations ORDER BY created_at DESC LIMIT ? OFFSET ?').all(limit, offset);
  const total = db.prepare('SELECT COUNT(*) as c FROM donations').get().c;
  const sum = db.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM donations WHERE status = "completed"').get().total;
  res.json({ rows, total, sum });
});

// ===== PATIENTS =====
app.post('/api/patients', (req, res) => {
  const p = req.body || {};
  const stmt = db.prepare(`
    INSERT INTO patients (
      first_name, last_name, email, phone, dob, blood_type,
      dialysis_start_date, hospital, insurance, priority_level,
      matched_donor_id, status, notes
    ) VALUES (@first_name, @last_name, @email, @phone, @dob, @blood_type,
      @dialysis_start_date, @hospital, @insurance, @priority_level,
      @matched_donor_id, @status, @notes)
  `);
  const info = stmt.run({
    status: 'waiting',
    priority_level: 'standard',
    ...p,
  });
  const row = db.prepare('SELECT * FROM patients WHERE id = ?').get(info.lastInsertRowid);
  res.json(row);
});

app.get('/api/patients', (req, res) => {
  const { status = '', limit = 50, offset = 0 } = req.query;
  const where = status ? 'WHERE status = ?' : '';
  const params = status ? [status, limit, offset] : [limit, offset];
  const rows = db.prepare(`SELECT * FROM patients ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`).all(...params);
  const total = db.prepare(`SELECT COUNT(*) as c FROM patients ${where}`).get(status || undefined)?.c || 0;
  res.json({ rows, total });
});

app.patch('/api/patients/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body || {};
  const fields = Object.keys(updates).map(k => `${k} = @${k}`).join(', ');
  if (fields) {
    db.prepare(`UPDATE patients SET ${fields} WHERE id = @id`).run({ id, ...updates });
  }
  const row = db.prepare('SELECT * FROM patients WHERE id = ?').get(id);
  res.json(row);
});

// ===== ANALYTICS =====
app.get('/api/analytics', (req, res) => {
  const donors = db.prepare('SELECT COUNT(*) as total, COUNT(CASE WHEN status = "approved" THEN 1 END) as approved FROM registrations').get();
  const donations = db.prepare('SELECT COUNT(*) as count, COALESCE(SUM(amount), 0) as total FROM donations WHERE status = "completed"').get();
  const patients = db.prepare('SELECT COUNT(*) as total, COUNT(CASE WHEN status = "waiting" THEN 1 END) as waiting FROM patients').get();

  res.json({
    donors,
    donations,
    patients,
  });
});

const port = process.env.PORT || 5175;
app.listen(port, () => console.log(`API listening on http://127.0.0.1:${port}`));