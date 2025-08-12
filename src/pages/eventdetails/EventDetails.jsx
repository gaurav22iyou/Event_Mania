import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './EventDetail.css'

export default function EventDetails() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_BASE = "https://eventmanagmentbackend.onrender.com";
  console.log(eventData)


  // const getEvents = () => axios.get(`${API_BASE}/events`);

  // let remainingSeats = eventData?.totalSeats - eventData?.bookedSeats;
  const remainingSeats = eventData?.event?.totalSeats - eventData?.event?.bookedSeats;


  useEffect(() => {
    const fetchDetails = async () => {
      try {

        const res = await axios.get(`${API_BASE}/events/${id}`);
        setEventData(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching event");
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="eventdetailCont"><br /><br /><br /><br /><br />
      <div className="eventDetails">
        <h1>{eventData.name}</h1>
        <p>📅 Date: {eventData?.event.date}</p>
        <p>🎟 Total Seats: {eventData?.event.totalSeats}</p>
        <p>🪑 Remaining Seats: {remainingSeats}</p>
        <p>📍 Location: {eventData.location || "Online"}</p>
      </div> <br /><br />
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
}
