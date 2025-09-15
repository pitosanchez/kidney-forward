// Lightweight Express + SQLite backend for donor registrations
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'donors.sqlite');
const db = new Database(dbPath);

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
`);

// Create
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

// List with basic filters and pagination
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

// Update status/notes
app.patch('/api/registrations/:id', (req, res) => {
    const { id } = req.params;
    const { status, notes } = req.body || {};
    const stmt = db.prepare('UPDATE registrations SET status = COALESCE(@status, status), notes = COALESCE(@notes, notes) WHERE id = @id');
    stmt.run({ id, status, notes });
    const row = db.prepare('SELECT * FROM registrations WHERE id = ?').get(id);
    res.json(row);
});

// Get single
app.get('/api/registrations/:id', (req, res) => {
    const row = db.prepare('SELECT * FROM registrations WHERE id = ?').get(req.params.id);
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
});

const port = process.env.PORT || 5175;
app.listen(port, () => console.log(`API listening on http://127.0.0.1:${port}`));


