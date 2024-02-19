import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "./Config";
import Navbar from "./Navbar";

function GrievanceForm() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const grievanceData = {
        category,
        description,
        address,
        phoneNumber,
        name,
        timestamp: new Date(),
      };
      const docRef = await db.collection('grievances').add(grievanceData);
      alert('Grievance submitted successfully!');
      setCategory('');
      setDescription('');
      setAddress('');
      setPhoneNumber('');
      setName('');
      navigate(`/confirmation/${docRef.id}`);
    } catch (error) {
      console.error("Error submitting grievance:", error);
    }
  };

  return (
    <>
     <Navbar/>
    <div className="grievance-form-container">
      <h2>Submit a Grievance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Street">Street</option>
            <option value="Road">Road</option>
            <option value="Lights">Lights</option>
            <option value="Water">Water</option>
            <option value="Trash">Trash</option>
            <option value="Parks">Parks</option>
            <option value="Noise">Noise</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>   
    </>
  );
}

export default GrievanceForm;
