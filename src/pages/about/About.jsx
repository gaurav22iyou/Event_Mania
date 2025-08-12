
import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <div className="mainAbout">
            <div className="about-container">
                <h1>About EventMania</h1>
                <p>
                    Welcome to <strong>EventMania</strong>, your go-to platform for seamless event booking.
                    Whether it's concerts, conferences, sports matches, or workshops, we make it simple
                    and fast to reserve your seat. Our mission is to connect people with experiences
                    they love, while making the booking process smooth, secure, and enjoyable.
                </p>
                <p>
                    Founded in 2025, EventMania has grown to serve thousands of event organizers and
                    millions of attendees worldwide. We believe that events bring people together,
                    inspire creativity, and create lasting memories — and we’re here to make sure you
                    never miss a moment.
                </p>
                <p>
                    From discovering exciting new events to securing your spot with just a few clicks,
                    EventMania is more than just a booking system — it’s your personal gateway to
                    unforgettable experiences.
                </p>
            </div>
            <button onClick={() => navigate("/")}>Back to home</button>
        </div>
    );
}
