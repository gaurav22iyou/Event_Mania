import React, { useEffect, useState } from "react";
import axios from 'axios';
import EventCard from "../../components/eventCard/EventCard";
import Notification from "../../components/notification/Notification";
import './EvenList.css'

export default function EventList() {
    const [events, setEvents] = useState([]);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    const API_BASE = "https://eventmanagmentbackend.onrender.com";

    const getEvents = () => axios.get(`${API_BASE}/events`);
    const bookEvent = (id, seats = 1) =>
        axios.post(`${API_BASE}/events/${id}/book`, { seats });

    const fetchEvents = async () => {
        try {
            const res = await getEvents();
            setEvents(res.data.events);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleBook = async (id) => {
        try {
            const res = await bookEvent(id, 1);
            setMessage("Seat booked successfully!");
            setType("success");
            fetchEvents();
        } catch (error) {
            setMessage(error.response?.data?.message || "Error booking seat");
            setType("error");
        }

        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <div className="p-4">
            
            <Notification message={message} type={type} />
            <div className="eventList">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} onBook={handleBook} />
                ))}
            </div>
        </div>
    );
}
