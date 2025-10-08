import React, { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", date: "", service: "", notes: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with actual customer ID and API endpoint
    const customer = "demo-customer-id";
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, customer })
      });
      const data = await res.json();
      if (res.ok) setMessage("Appointment booked!");
      else setMessage(data.message || "Booking failed");
    } catch (err) {
      setMessage("Error booking appointment");
    }
  };

  return (
    <div className="booking-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="service" placeholder="Service" value={form.service} onChange={handleChange} required />
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
