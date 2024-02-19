import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar page={"home"} />
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Grievance System</h1>
        <p>Report and track community grievances efficiently.</p>
      </header>
      <main className="home-main">
        <section className="home-section">
          <h2>Report a Grievance</h2>
          <p>Have an issue to report? Click below to submit your grievance.</p>
          <button className="home-button" onClick={()=>navigate("/form")}>Report Now</button>
        </section>
        <section className="home-section">
          <h2>Track Grievances</h2>
          <p>Check the status of your submitted grievances here.</p>
          <button className="home-button" onClick={()=>navigate("/")}>Track Now</button>
        </section>
      </main>
    </div></>
  );
}

export default Home;
