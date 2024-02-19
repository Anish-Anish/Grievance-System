import { useState, useEffect } from 'react';
import { db } from './Config';

function AdminPage() {
  const [category, setCategory] = useState('');
  const [filteredGrievances, setFilteredGrievances] = useState([]);
  const categories = ['Street', 'Road', 'Lights', 'Water', 'Trash', 'Parks', 'Noise'];

  useEffect(() => {
    if (category) {
      db.collection('grievances')
        .where('category', '==', category)
        .get()
        .then((querySnapshot) => {
          const grievances = [];
          querySnapshot.forEach((doc) => {
            grievances.push({ id: doc.id, ...doc.data() });
          });
          setFilteredGrievances(grievances);
        })
        .catch((error) => {
          console.error('Error fetching grievances:', error);
        });
    }
  }, [category]);

  return (
    <div className="admin-page-container">
      <h2 className="admin-header">Admin Page</h2>
      <label>
        Filter by Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {category && (
        <div className="filtered-grievances-container">
          <h3 className="category-header">Grievances in Category: {category}</h3>
          <ul className="grievances-list">
            {filteredGrievances.map((grievance, index) => (
              <li key={grievance.id} className="grievance-item">
                <div className="index-badge">{index + 1}</div>
                <div className="address-label" style={{display:"flex"}}>Person : &nbsp;<div style={{color:"grey"}}>{grievance.name}</div></div>
                <strong className="address-label">Address:</strong> {grievance.address}
                <br />
                <strong className="description-label">Description:</strong> {grievance.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
