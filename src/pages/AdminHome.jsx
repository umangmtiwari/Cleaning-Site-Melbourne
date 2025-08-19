// src/pages/AdminHome.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

function AdminHome() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      window.location.href = '/admin/login';
    }
  }, []);

  const handleBillingClick = () => {
    navigate('/admin/billing');
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Welcome to Admin Panel</h1>
        <p>Click below for Billing Section!</p>
        
        {/* Billing Section Button */}
        <button
  onClick={handleBillingClick}
  style={{
    backgroundColor: '#2049A3',
    color: '#fff',
    padding: '12px 24px',
    marginTop: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    maxWidth: '90%',
    width: '250px',
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#1a3b84';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#2049A3';
  }}
>
  Billing Section
</button>

      </div>
      
      <Home />
    </div>
  );
}

export default AdminHome;
