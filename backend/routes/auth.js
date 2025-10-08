const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const existing = await Customer.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const customer = new Customer({ name, email, password: hashed, phone });
    await customer.save();
    res.status(201).json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', customerId: customer._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
