import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// Database Connection
connectDB(DATABASE_URL);

// Middleware
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
