import React from 'react'
import './Notification.css'

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className={`modal-notification ${type === "success" ? "success" : "error"
          }`}
        onClick={(e) => e.stopPropagation()} 
      >
        {message}
        <button className="close-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Notification