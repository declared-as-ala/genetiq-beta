# Genetiq - Precision Diagnostics Platform

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Features](#features)
5. [Project Structure](#project-structure)
6. [Setup & Installation](#setup--installation)
7. [API Documentation](#api-documentation)
8. [Frontend Architecture](#frontend-architecture)
9. [Backend Architecture](#backend-architecture)
10. [Security](#security)
11. [Deployment](#deployment)
12. [Development Guidelines](#development-guidelines)

---

## Project Overview

**Genetiq** is a precision diagnostics platform that provides personalized health insights through digital twin technology, risk assessment, and health data integration. The platform enables users to visualize their health status through 3D models, track health metrics, assess risks, and connect with various health devices and applications.

### Key Capabilities
- **Digital Twin Visualization**: Interactive 3D models of human body systems
- **Health Risk Assessment**: Comprehensive risk analysis and tracking
- **Health Data Integration**: Connect with wearable devices and health apps
- **Medical File Upload**: Support for genetic data, microbiome, and blood reports
- **Appointment Management**: Patient-doctor appointment scheduling system
- **Real-time Health Tracking**: Monitor health metrics and concerns

---

## Architecture

The application follows a **full-stack architecture** with:

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB with Mongoose ODM
- **3D Rendering**: Three.js with React Three Fiber
- **State Management**: Redux Toolkit
- **Authentication**: JWT-based with HTTP-only cookies

### Architecture Pattern
- **Frontend**: Component-based architecture with feature-based folder structure
- **Backend**: MVC (Model-View-Controller) pattern
- **API**: RESTful API design

---

## Technology Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 6.0.5** - Build tool and dev server
- **React Router DOM 7.1.1** - Client-side routing
- **Redux Toolkit 2.5.0** - State management
- **Three.js 0.172.0** - 3D graphics
- **React Three Fiber 8.17.12** - React renderer for Three.js
- **React Three Drei 9.121.0** - Useful helpers for R3F
- **Axios 1.13.2** - HTTP client
- **Sass 1.83.1** - CSS preprocessor
- **React Toastify 11.0.3** - Toast notifications

### Backend
- **Node.js 20** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB 8.13.1** - Database
- **Mongoose 8.13.1** - ODM
- **JWT 9.0.3** - Authentication tokens
- **Bcrypt 5.1.1** - Password hashing
- **Express Validator 7.3.1** - Input validation
- **Helmet 8.1.0** - Security headers
- **CORS 2.8.5** - Cross-origin resource sharing
- **CSURF 1.11.0** - CSRF protection
- **Nodemailer 7.0.13** - Email functionality
- **Socket.io 4.8.1** - Real-time communication

### Development Tools
- **ESLint 9.17.0** - Linting
- **Prettier 3.4.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **Jest** - Testing framework
- **Concurrently 9.1.2** - Run multiple commands

### Deployment
- **Docker** - Containerization
- **Vercel** - Frontend deployment
- **Docker Compose** - Multi-container orchestration

---

## Features

### 1. Authentication System
- User registration with role-based access (Patient, Doctor, Admin)
- Secure login with JWT tokens
- Password encryption with bcrypt
- CSRF protection
- Session management

### 2. Dashboard
- **Digital Twin Visualization**: Interactive 3D human body model
- **Health Widgets**:
  - Tracker Widget: Health metrics tracking
  - Age Widget: Biological age assessment
  - Concerns Widget: Health concerns by category
  - System Detail Widget: Detailed system information
- **Category-based Filtering**: Filter health data by body systems
- **Real-time Updates**: Dynamic widget animations

### 3. Risk Assessment
- **Detailed Risk Analysis**: Comprehensive risk evaluation
- **Risk Charts**: Visual representation of health risks
- **Risk Status**: Current risk levels and trends
- **Symptoms Tracking**: Monitor and track symptoms
- **Goal Progress**: Track health goals and progress
- **Reasons Table**: Detailed breakdown of risk factors

### 4. System Overview
- Comprehensive view of all body systems
- System-specific health metrics
- Interactive navigation between systems

### 5. Onboarding & Configuration
- **Upload Methods**:
  - File upload (Genetic data, Microbiome, Blood reports)
  - Device/app connection
- **Supported File Types**:
  - Genetic: `.fastq`, `.vcf`
  - Microbiome: `.fastq`
  - Blood Reports: `.pdf`
- **Device Integration**:
  - Apple Watch
  - Omron devices
  - Qardio devices
  - Huawei devices
  - Oura Ring
  - FreeStyle Libre
  - Withings devices
  - EHRs Database

### 6. Appointment Management
- Create and manage appointments
- Patient-Doctor scheduling
- Appointment history

### 7. User Management
- Patient profiles with medical history
- Doctor profiles with specialization
- Role-based access control

---

## Project Structure

```
genetiq-beta/
├── public/                    # Static assets
│   ├── assets/
│   │   └── models/           # 3D model files (.obj, .mtl)
│   └── genetiq.svg          # App icon
│
├── server/                    # Backend application
│   ├── config/               # Configuration files
│   │   ├── db.js            # Database configuration
│   │   └── helmetConfig.js  # Security headers config
│   ├── controllers/          # Request handlers
│   │   ├── authController.js
│   │   ├── patientController.js
│   │   ├── doctorController.js
│   │   └── appointmentController.js
│   ├── middleware/           # Custom middleware
│   │   ├── auth.js          # JWT authentication
│   │   ├── csrf.js          # CSRF protection
│   │   ├── errorHandler.js  # Error handling
│   │   └── role.js          # Role-based access
│   ├── models/               # Mongoose schemas
│   │   ├── User.js
│   │   ├── Patient.js
│   │   ├── Doctor.js
│   │   └── Appointment.js
│   ├── routes/               # API routes
│   │   ├── authRoutes.js
│   │   ├── patientRoutes.js
│   │   ├── doctorRoutes.js
│   │   └── appointmentRoutes.js
│   ├── tests/                # Test files
│   ├── utils/                # Utility functions
│   │   └── mailer.js        # Email utilities
│   ├── public/               # Server static files
│   ├── index.js             # Server entry point
│   └── jest.config.js       # Jest configuration
│
├── src/                       # Frontend application
│   ├── App/                  # Core app files
│   │   ├── App.tsx          # Root component
│   │   ├── main.tsx         # Entry point
│   │   ├── Consts/          # Constants
│   │   ├── Layouts/         # Layout components
│   │   ├── Routes/          # Routing configuration
│   │   ├── Redux/           # Redux store
│   │   ├── Styles/          # Global styles
│   │   └── Types/           # TypeScript types
│   │
│   ├── Features/             # Feature modules
│   │   ├── Auth/            # Authentication
│   │   ├── Dashboard/       # Dashboard widgets
│   │   ├── DigitalTwin/     # 3D visualization
│   │   ├── Onboarding/      # Onboarding flow
│   │   ├── Risk/            # Risk assessment
│   │   └── Structural/      # Shared components (NavBar)
│   │
│   ├── Views/                # Page components
│   │   ├── Auth/            # Login/Register pages
│   │   ├── Dashboard/       # Main dashboard
│   │   ├── DetailedRisk/    # Risk detail page
│   │   ├── SystemOverview/  # System overview page
│   │   └── UploadMethod/    # Upload/Config pages
│   │
│   └── assets/               # Frontend assets
│       ├── models/          # 3D model assets
│       └── [various]/      # Icons, images, SVGs
│
├── docker-compose.yml        # Docker Compose config
├── Dockerfile               # Docker configuration
├── package.json             # Dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── vercel.json             # Vercel deployment config
└── README.md               # Basic README
```

---

## Setup & Installation

### Prerequisites
- Node.js >= 20
- MongoDB (local or cloud instance)
- npm or yarn

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/genetiq

# JWT
JWT_SECRET=your-secret-key-here

# Email (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend API
VITE_API_URL=http://localhost:5000
VITE_API_KEY=your-api-key
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd genetiq-beta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` (if exists)
   - Fill in all required environment variables

4. **Start MongoDB**
   - Local: Ensure MongoDB is running on `localhost:27017`
   - Cloud: Update `MONGO_URI` in `.env`

5. **Run the application**
   ```bash
   npm start
   ```
   This will start both the frontend (Vite dev server on port 3000) and backend (Express server on port 5000) concurrently.

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Development Scripts

```bash
npm start          # Start both frontend and backend
npm run build      # Build for production
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run preview    # Preview production build
```

---

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "Patient" | "Doctor" | "Admin"
}
```

**Response:**
- `201 Created`: User registered successfully
- `400 Bad Request`: Validation errors

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

**Response:**
- `200 OK`: Login successful (JWT token in HTTP-only cookie)
- `400 Bad Request`: Invalid credentials

#### Logout
```http
GET /api/auth/logout
```

**Response:**
- `200 OK`: Logged out successfully

### Protected Endpoints

All endpoints below require authentication (JWT token in cookie).

#### Patients

```http
GET /api/patients          # Get all patients
GET /api/patients/:id      # Get patient by ID
POST /api/patients         # Create patient
PUT /api/patients/:id      # Update patient
DELETE /api/patients/:id   # Delete patient
```

#### Doctors

```http
GET /api/doctors           # Get all doctors
GET /api/doctors/:id       # Get doctor by ID
POST /api/doctors          # Create doctor
PUT /api/doctors/:id       # Update doctor
DELETE /api/doctors/:id    # Delete doctor
```

#### Appointments

```http
GET /api/appointments              # Get all appointments
GET /api/appointments/:id          # Get appointment by ID
POST /api/appointments             # Create appointment
PUT /api/appointments/:id          # Update appointment
DELETE /api/appointments/:id       # Delete appointment
```

### Authentication

All protected endpoints require a valid JWT token sent in an HTTP-only cookie named `token`.

---

## Frontend Architecture

### Routing

The application uses React Router v7 with a nested route structure:

- `/login` - Login page
- `/register` - Registration page
- `/dashboard` - Main dashboard
- `/dashboard/system` - System overview
- `/dashboard/detailed-risk` - Detailed risk assessment
- `/config` - Configuration/onboarding
- `/config/import-or-upload` - File upload
- `/config/connect-app` - Device connection

### State Management

Redux Toolkit is used for global state management:
- Category selection for filtering health data
- User authentication state
- Application-wide settings

### Component Structure

Components are organized by feature:
- **Features/**: Reusable feature components
- **Views/**: Page-level components
- **Layouts/**: Layout wrappers

### Styling

- **SCSS Modules**: Component-scoped styles
- **Global Styles**: Shared styles in `App/Styles/`
- **Variables**: SCSS variables for theming

### 3D Visualization

The Digital Twin feature uses:
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer
- **React Three Drei**: Helper components
- **Camera Context**: Manages camera state and transitions
- **Model Transition Context**: Handles model animations

---

## Backend Architecture

### MVC Pattern

- **Models**: Mongoose schemas define data structure
- **Views**: EJS templates (legacy, being phased out)
- **Controllers**: Handle business logic and request/response

### Middleware Stack

1. **Helmet**: Security headers
2. **CORS**: Cross-origin requests
3. **Cookie Parser**: Parse cookies
4. **Body Parser**: Parse JSON/URL-encoded bodies
5. **CSRF Protection**: CSRF token validation
6. **Authentication**: JWT verification
7. **Error Handler**: Centralized error handling

### Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure, HTTP-only cookies
- **CSRF Protection**: Token-based protection
- **Input Validation**: Express Validator
- **Security Headers**: Helmet.js configuration
- **Role-Based Access**: Middleware for role checking

### Database Models

#### User
```javascript
{
  username: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['Patient', 'Doctor', 'Admin'])
}
```

#### Patient
```javascript
{
  name: String (required),
  age: Number (required),
  gender: String (required),
  medicalHistory: String (required)
}
```

#### Doctor
```javascript
{
  name: String (required),
  specialization: String (required),
  experience: Number (required)
}
```

#### Appointment
```javascript
{
  patient: ObjectId (ref: User),
  doctor: ObjectId (ref: User),
  date: Date (required),
  reason: String (required)
}
```

---

## Security

### Implemented Security Measures

1. **Authentication**
   - JWT tokens stored in HTTP-only cookies
   - Password hashing with bcrypt
   - Token expiration (1 hour)

2. **CSRF Protection**
   - CSRF tokens for state-changing operations
   - Cookie-based CSRF protection

3. **Input Validation**
   - Express Validator for request validation
   - Input sanitization and escaping

4. **Security Headers**
   - Helmet.js for security headers
   - Content Security Policy
   - XSS protection

5. **Role-Based Access Control**
   - Middleware for role verification
   - Protected routes based on user roles

### Best Practices

- Never expose sensitive data in client-side code
- Always validate and sanitize user input
- Use environment variables for secrets
- Implement rate limiting (recommended)
- Regular security audits

---

## Deployment

### Docker Deployment

The project includes Docker configuration for containerized deployment:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Build production image
docker build -t genetiq-app .

# Run container
docker run -p 3000:3000 genetiq-app
```

### Environment-Specific Configs

- **Development**: Local development with hot reload
- **Staging**: `docker-compose.yml` includes staging service
- **Production**: `docker-compose.yml` includes production service

### Vercel Deployment

The `vercel.json` configures SPA routing for frontend deployment on Vercel.

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:
- `MONGO_URI`
- `JWT_SECRET`
- `NODE_ENV=production`
- `VITE_API_URL`
- `VITE_API_KEY`

---

## Development Guidelines

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Follow ESLint rules
- **Prettier**: Auto-format on save
- **Naming Conventions**:
  - Components: PascalCase
  - Files: PascalCase for components, camelCase for utilities
  - Constants: UPPER_SNAKE_CASE

### Git Workflow

- **Husky**: Pre-commit hooks for linting
- **Branch Strategy**: Feature branches from main
- **Commit Messages**: Descriptive commit messages

### Testing

- **Jest**: Unit and integration tests
- Test files located in `server/tests/`
- Run tests: `npm test`

### Adding New Features

1. Create feature folder in `src/Features/`
2. Add corresponding route in `RoutesConfig.tsx`
3. Create view component in `src/Views/`
4. Add API endpoints in `server/routes/` and `server/controllers/`
5. Update models if needed
6. Add tests

### File Upload Guidelines

- Supported formats: `.fastq`, `.vcf`, `.pdf`
- Max file size: 25MB (configurable)
- File validation on both client and server

### 3D Model Guidelines

- Models stored in `public/assets/models/`
- Supported formats: `.obj`, `.mtl`
- Organize by category (e.g., `cardio/`, `normal/`)

---

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify MongoDB is running
   - Check `MONGO_URI` in `.env`
   - Ensure network connectivity

2. **JWT Token Issues**
   - Verify `JWT_SECRET` is set
   - Check cookie settings (httpOnly, secure)
   - Clear browser cookies if needed

3. **Port Already in Use**
   - Change `PORT` in `.env` (backend)
   - Change port in `vite.config.ts` (frontend)

4. **Build Errors**
   - Clear `node_modules` and reinstall
   - Check TypeScript errors: `npm run build`
   - Verify all dependencies are installed

---

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

---

## License

[Specify license here]

---

## Contact & Support

[Add contact information or support channels]

---

**Last Updated**: [Current Date]
**Version**: 0.0.0 (Beta)
