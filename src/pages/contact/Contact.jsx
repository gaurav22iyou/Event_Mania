import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Event Mania</h1>
            <p className="subtitle">We'd love to hear from you! Reach out with any questions or event inquiries.</p>

            <div className="contact-form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Tell us about your event..." required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>

            <div className="contact-info">
                <h2>Our Office</h2>
                <p>Event Mania Pvt. Ltd.</p>
                <p>123 Celebration Avenue</p>
                <p>Mumbai, Maharashtra, India</p>
                <p>📞 +91 98765 43210</p>
                <p>📧 contact@eventmania.in</p>
            </div>
        </div>
    );
};

export default Contact;
