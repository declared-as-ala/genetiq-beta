# Quick Start Guide - Genetiq Application

## Prerequisites

Before running the application, ensure you have:

1. **Node.js** (version 20 or higher)
   - Check: `node --version`
   - Download: https://nodejs.org/

2. **MongoDB** (running locally or cloud instance)
   - Local: Install MongoDB Community Edition
   - Cloud: Use MongoDB Atlas (free tier available)

3. **npm** (comes with Node.js)
   - Check: `npm --version`

## Setup Steps

### 1. Install Dependencies

Open a terminal in the project root directory and run:

```bash
npm install
```

This will install all required packages for both frontend and backend.

### 2. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/genetiq
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/genetiq

# JWT Secret (generate a random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Email (optional - for email features)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend API Configuration
VITE_API_URL=http://localhost:5000
VITE_API_KEY=your-api-key
```

**Important**: Replace placeholder values with your actual configuration.

### 3. Start MongoDB (if using local instance)

**Windows:**
```bash
# If MongoDB is installed as a service, it should start automatically
# Or start manually:
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe"
```

**macOS/Linux:**
```bash
mongod
```

Or use MongoDB Compass GUI to start/connect to MongoDB.

### 4. Run the Application

Start both frontend and backend servers:

```bash
npm start
```

This command will:
- Start the **backend server** on `http://localhost:5000`
- Start the **frontend dev server** on `http://localhost:3000`

You should see output like:
```
Server running on port 5000
MongoDB connected
VITE v6.0.5  ready in XXX ms
  ➜  Local:   http://localhost:3000/
```

## Access the Application

1. Open your browser and navigate to: **http://localhost:3000**

2. You should see the login/register page

3. Navigate to the **Dashboard** to see the new features:
   - **Language Switcher** (EN/ES) - top of the page
   - **Theme Switcher** (☀️/🌙) - next to language switcher

## Testing the New Features

### Language Switching
1. Go to the Dashboard page (`/dashboard`)
2. Click the **EN** or **ES** buttons in the controls bar
3. Observe the text changes:
   - "Stay tuned. We are checking your Cholesterol" → "Mantente atento. Estamos revisando tu Colesterol"
   - "Biological age" → "Edad biológica"
   - "Key Areas of Concern" → "Áreas Clave de Preocupación"
   - And more...

### Theme Switching
1. On the Dashboard page, click the **☀️** (light) or **🌙** (dark) buttons
2. Observe the color scheme changes:
   - Background colors
   - Text colors
   - Card backgrounds
   - Border colors
   - Primary/secondary colors

### Persistence Test
1. Change language to Spanish (ES)
2. Change theme to Dark (🌙)
3. **Refresh the page** (F5 or Ctrl+R)
4. Verify that your selections are preserved!

## Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:

**Backend (port 5000):**
- Change `PORT` in `.env` file
- Or stop the process using the port

**Frontend (port 3000):**
- Change port in `vite.config.ts`:
  ```typescript
  server: {
    port: 3001, // Change this
  }
  ```

### MongoDB Connection Error
```
MongoDB connection error
```

**Solutions:**
1. Ensure MongoDB is running
2. Check `MONGO_URI` in `.env` is correct
3. For local MongoDB: `mongodb://localhost:27017/genetiq`
4. For MongoDB Atlas: Verify connection string and network access

### Dependencies Not Installing
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check for TypeScript errors
npm run build
```

### Module Not Found Errors
```bash
# Reinstall dependencies
npm install
```

## Development Scripts

```bash
npm start          # Start both frontend and backend (development)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run preview    # Preview production build
```

## Project Structure

```
genetiq-beta/
├── server/          # Backend (Node.js + Express)
│   ├── index.js    # Server entry point
│   └── ...
├── src/             # Frontend (React + TypeScript)
│   ├── App/         # Core app files
│   ├── Features/    # Feature modules
│   │   └── Dashboard/  # Dashboard with new i18n & theme features
│   └── Views/       # Page components
└── package.json     # Dependencies and scripts
```

## Next Steps

1. **Create a user account** via the register page
2. **Login** to access the dashboard
3. **Test language switching** - switch between EN and ES
4. **Test theme switching** - switch between light and dark
5. **Verify persistence** - refresh the page to confirm settings are saved

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB is running
4. Check that ports 3000 and 5000 are available

---

**Happy Coding! 🚀**
