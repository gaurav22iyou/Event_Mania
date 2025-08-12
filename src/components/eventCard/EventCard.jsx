import React from 'react';
import './EventCard.css';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event, onBook }) => {

  const navigate = useNavigate();
  return (
    <div className="ticketCard">

      <div className="ticketHeader">
        📅 {new Date(event.date).toLocaleDateString('en-US', {
          weekday: 'short',
          day: '2-digit',
          month: 'short',
          year: '2-digit'
        })}
      </div>


      <div className="ticketRoute">
        <span className="from">{event.name}</span>
        <span className="to">{event.location || '  Online'}</span>
      </div>


      <div className="ticketInfo">
        🎟 Total Seats: <strong>{event.totalSeats}</strong>
        <br />
        🪑 Remaining: <strong>{event.remainingSeats}</strong>
      </div>


      <div className={`ticketStatus ${event.remainingSeats > 0 ? 'available' : 'soldout'}`}>
        {event.remainingSeats > 0 ? "Available" : "Sold Out"}
      </div>

      <div className="ticketActions">
        <button
          className="primaryBtn"
          onClick={() => onBook(event.id)}
          disabled={event.remainingSeats <= 0}
        >
          Book Seats
        </button>
        <button 
        className="secondaryBtn"
         onClick={() => navigate(`/events/${event.id}/book`)} >View Details</button>
      </div>
    </div>
  );
};

export default EventCard;
