// TicketBookingForm.js
import React, { useState } from 'react';
import './TicketBookingForm.css'; // Assuming a CSS file for styling

const TicketBookingForm = () => {
  const [date, setDate] = useState('');
  const [tickets, setTickets] = useState(1);
  const [error, setError] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTicketsChange = (e) => {
    setTickets(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      setError('Please select a date.');
      return;
    }
    if (tickets < 1) {
      setError('Please select at least one ticket.');
      return;
    }
    setError('');
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-booking-form">
      <div>
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="tickets">Number of Tickets:</label>
        <input type="number" id="tickets" value={tickets} onChange={handleTicketsChange} min="1" />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Book Tickets</button>
    </form>
  );
};

export default TicketBookingForm;
