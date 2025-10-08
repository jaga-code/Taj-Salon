const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Book appointment
router.post('/', async (req, res) => {
  try {
    const { customer, date, service, notes } = req.body;
    const appointment = new Appointment({ customer, date, service, notes });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all appointments for a customer
router.get('/:customerId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ customer: req.params.customerId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
