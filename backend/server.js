// Basic Express server setup for Taj Salon
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Taj Salon API is running 🚀');
});

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));

// MongoDB connection with status logs
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️  MongoDB disconnected');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tajsalon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle server start & port conflicts
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`⚠️  Port ${PORT} is already in use. Trying another port...`);
    setTimeout(() => {
      server.close();
      const newPort = PORT + 1;
      app.listen(newPort, () => console.log(`✅ Server restarted on port ${newPort}`));
    }, 1000);
  } else {
    console.error('❌ Server error:', err);
  }
});
