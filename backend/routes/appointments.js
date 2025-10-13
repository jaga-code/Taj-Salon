const express = require('express');
const router = express.Router();
const Appointment = require('../models/Booking');

// Book appointment
router.post('/', async (req, res) => {
  try {
    const { name, email, date, time, service, notes } = req.body;
    const booking = new Booking({ name, email, date, time, service, notes });
    await booking.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Booking failed', error: err.message });
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
