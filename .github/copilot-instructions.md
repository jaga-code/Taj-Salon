# Copilot Instructions for Taj Salon Codebase

## Overview
- **Taj Salon** is a full-stack web application for booking salon appointments.
- The project is split into a React frontend (`src/`) and a Node.js/Express backend (`backend/`).
- MongoDB is used for data persistence, with Mongoose models for `Customer` and `Appointment`.

## Architecture
- **Frontend** (`src/`):
  - Built with React 18 and Vite.
  - Main entry: `src/main.jsx` → `src/App.jsx`.
  - Routing via `react-router-dom` (see `App.jsx`).
  - Key UI components: `Header`, `Footer`, `Services`, `BookingForm`, `SignIn`, `SignUp`.
  - Styling is in `src/taj.css` and uses custom class names (e.g., `.con-1`, `.con-3`).
  - Images and media are in `public/images/`.
- **Backend** (`backend/`):
  - Express server (`backend/server.js`).
  - API endpoints:
    - `/api/auth/register` and `/api/auth/login` for customer authentication (see `routes/auth.js`).
    - `/api/appointments` for booking and retrieving appointments (see `routes/appointments.js`).
  - MongoDB models: `Customer.js`, `Appointment.js`.
  - Uses `dotenv` for environment variables (expects `MONGO_URI`).

## Developer Workflows
- **Frontend**:
  - Start dev server: `npm run dev` (from project root)
  - Build: `npm run build`
  - Preview: `npm run preview`
- **Backend**:
  - Start server: `npm run dev` (from `backend/` for auto-reload with nodemon)
  - Production: `npm start` (from `backend/`)
- **Environment**:
  - Backend expects a `.env` file with `MONGO_URI` for MongoDB connection.

## Patterns & Conventions
- **API calls** from frontend use relative paths (e.g., `/api/appointments`).
- **Customer ID** is currently hardcoded in `BookingForm.jsx` (replace with real auth integration for production).
- **Error handling**: API returns JSON with `message` field on error.
- **Component structure**: Each major UI section is a separate React component in `src/components/`.
- **Styling**: Custom CSS classes, not CSS-in-JS or frameworks.
- **Media**: Use `/public/images/` for all static assets.

## Integration Points
- **Frontend ↔ Backend**: Communicate via REST API endpoints under `/api/`.
- **Database**: MongoDB via Mongoose models.
- **Authentication**: Simple email/password, no JWT/session implemented yet.

## Key Files
- `src/App.jsx`, `src/components/BookingForm.jsx`, `src/components/SignIn.jsx`, `src/components/SignUp.jsx`
- `backend/server.js`, `backend/routes/auth.js`, `backend/routes/appointments.js`
- `backend/models/Customer.js`, `backend/models/Appointment.js`
- `src/taj.css`, `public/images/`

## Example: Booking an Appointment
- Frontend posts to `/api/appointments` with `{ customer, date, service, notes }`.
- Backend saves appointment to MongoDB and returns status.

---

If you add new features, follow the existing separation of concerns and RESTful API conventions. For authentication, consider implementing JWT for session management.
