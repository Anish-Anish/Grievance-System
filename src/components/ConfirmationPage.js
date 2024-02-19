import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { db } from "./Config";
import Navbar from "./Navbar";

function ConfirmationPage() {
  const location = useLocation();
  const grievanceId = location.pathname.split("/")[2];
  const [grievanceData, setGrievanceData] = useState(null);

  useEffect(() => {
    const fetchGrievanceData = async () => {
      try {
        const docRef = db.collection("grievances").doc(grievanceId);
        const snapshot = await docRef.get();
        if (snapshot.exists) {
          setGrievanceData(snapshot.data());
        } else {
          console.error("Grievance not found");
          setGrievanceData(null);
        }
      } catch (error) {
        console.error("Error fetching grievance:", error);
        setGrievanceData(null);
      }
    };

    fetchGrievanceData();
  }, [grievanceId]);

  if (!grievanceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="confirmation-container">
        <h2 className="confirmation-header">
          Thank you for submitting your grievance!
        </h2>
        <p className="confirmation-paragraph">
          Your grievance has been received with the following details:
        </p>
        <ul className="confirmation-list">
          <li className="confirmation-item confirmation-category-label">
            Category: {grievanceData.category}
          </li>
             <li className="confirmation-item confirmation-description">
            Description: {grievanceData.description}
          </li>
          <li className="confirmation-item confirmation-address-label">
            Address: {grievanceData.address}
          </li>
          <li className="confirmation-item confirmation-phone-label">
            Phone Number: {grievanceData.phoneNumber}
          </li>
          <li className="confirmation-item confirmation-name-label">
            Name: {grievanceData.name}
          </li>
        </ul>
        <a href="/" className="confirmation-link-back">
          Back to Home
        </a>
      </div>
    </>
  );
}

export default ConfirmationPage;
