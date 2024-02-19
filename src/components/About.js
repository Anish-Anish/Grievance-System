import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <>
    <Navbar page={"about"}/>
    <div className="about-container">
      <header className="about-header">
        <h1>About the Grievance System</h1>
      </header>
      <main className="about-main">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At our Grievance System, our mission is to empower communities and
            individuals to voice their concerns and make a positive change.
            Over the years, we've successfully addressed over 100+ issues,
            ensuring that every problem finds a solution.
          </p>
        </section>
        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            Our system provides a user-friendly platform for reporting and
            tracking grievances. Users can submit their concerns, which are then
            efficiently processed and resolved by our dedicated team. We
            believe in transparency and accountability, ensuring that every
            reported problem is taken seriously and resolved promptly.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Achievements</h2>
          <p>
            Since our inception, we've been proud to have made a significant
            impact on the communities we serve. Here are some of our notable
            achievements:
          </p>
          <ul style={{listStyle:"none"}}>
            <li>100+ problems resolved</li>
            <li>1,000+ satisfied users</li>
            <li>99% issue resolution rate</li>
            <li>Community partnerships established</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Behind the scenes, we have a dedicated team of professionals who
            work tirelessly to ensure the success of our Grievance System. Our
            team includes experts in community management, conflict resolution,
            and technology.
          </p>
        </section>
      </main>
    </div></>
  );
}

export default About;
