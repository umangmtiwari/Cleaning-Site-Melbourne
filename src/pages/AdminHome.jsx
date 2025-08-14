// src/pages/AdminHome.jsx
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Home';

function AdminHome() {
  useEffect(() => {
    // Check if the user is logged in when the page is accessed
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      window.location.href = '/admin/login';
    }
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
  <h1>Welcome to Admin Panel</h1>
  <p>Manage your Customer here!</p>
</div>
      <Home/>
    </div>
  );
}

export default AdminHome;
