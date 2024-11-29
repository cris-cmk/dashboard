import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './features/dashboard/Dashboard';

const App = () => {
  const token = useSelector((state) => state.auth.token); // Access token from Redux

  return (
    <Router>
      <Routes>
        {/* Redirect the root ("/") to login if not authenticated */}
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
        
        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/week-2" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;