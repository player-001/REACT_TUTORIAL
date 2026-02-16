import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from "./Footer.jsx"

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className = "description">
                <p>
                    Plan and Organize events effortlessly with Event Planner
                </p>
                <button className = "get-started-button">Get Started</button>

            </section>

            <section class = "events_categories">
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby Showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music</li>
                    <li>Film</li>
                    <li>Comedy</li>
                    <li>Art</li>
                    <li>Cultural Events</li>
                </ul>
                <ul>
                    <h2>Community Events</h2>
                    <li>Fundraising</li>
                    <li>Charity</li>
                    <li>Volunteer</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>

            </section>

            <section className = "features">
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Vustomizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Remainders and notifications</li>
                </ul>

            </section>

            <section className = "testimonials">
                <h2>Testimonials</h2>
                <div className = "testimonial">
                    <p>"I am not married so cannot review"</p>
                    <p className = "author">-Mohit</p>
                </div>

                <div className = "testimonial">
                    <p>"Never attended an event, but these guys are amazing"</p>
                    <p className = "author">-John Smith</p>
                </div>

            </section>
            
            <section className = "contact">
                <h2>Contact Us</h2>
                <form>
                    <input type = "text" placeholder = "Name"/>
                    <input type = "email" placeholder = "Email"/>
                    <textarea placeholder = "Message"></textarea>
                    <button className = "submit-button">Send</button>
                </form>

            </section>
        <Footer/>
        </div>
    );
};

export default EventPlanner;
