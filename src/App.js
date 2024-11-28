import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="flex justify-center p-4 bg-blue-500 text-white">
          <Link to="/login" className="px-4 hover:underline">Login</Link>
          <Link to="/register" className="px-4 hover:underline">Register</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
