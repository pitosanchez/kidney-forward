# Kidney Forward Website

A modern React application built with TypeScript and Tailwind CSS for the Kidney Forward organization.

## Project Structure

```
kidney-forward-app/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── AboutUs.tsx
│   │       ├── ContactUs.tsx
│   │       ├── Patients.tsx
│   │       ├── Donors.tsx
│   │       ├── Doctors.tsx
│   │       ├── Courses.tsx
│   │       ├── TransplantCenters.tsx
│   │       ├── CorporatePartners.tsx
│   │       ├── GetInvolved.tsx
│   │       ├── DonorRegistration.tsx
│   │       ├── DonationForm.tsx
│   │       ├── JoinTeam.tsx
│   │       ├── AndrewLuu.tsx
│   │       └── RobertSanchez.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for seamless navigation
- **Component-Based**: Modular architecture with reusable components

## Pages

- **Home**: Landing page with hero section and service overview
- **About Us**: Information about Kidney Forward's mission and vision
- **Contact Us**: Contact form and contact information
- **Patients**: Resources and support for kidney patients
- **Donors**: Information about becoming a kidney donor
- **Doctors**: Resources for healthcare professionals
- **Courses**: Educational courses and programs
- **Transplant Centers**: List of partner transplant centers
- **Corporate Partners**: Partnership opportunities and current partners
- **Get Involved**: Various ways to support the organization
- **Donor Registration**: Form to register as an organ donor
- **Donation Form**: Secure donation form for financial contributions
- **Join Team**: Volunteer application form
- **Team Pages**: Individual pages for Andrew Luu and Robert Sanchez

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd kidney-forward-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (or the port shown in terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Development

- The application uses Vite for fast development and building
- Hot Module Replacement (HMR) is enabled for instant updates
- TypeScript provides type checking and IntelliSense
- Tailwind CSS classes are automatically purged in production

## Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Content**: Modify the content in the respective component files
- **Styling**: Use Tailwind CSS utility classes or add custom CSS
- **Routes**: Add or modify routes in `App.tsx`

## Notes

- All forms currently log to console and show alerts (ready for backend integration)
- Images are placeholder divs (replace with actual images)
- The navigation includes dropdown menus and mobile responsiveness
- All pages are fully styled with Tailwind CSS
