import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token); // Access the token from Redux
  const navigate = useNavigate(); // Initialize useNavigate

  // Redirect to login if no token is found
  useEffect(() => {
    if (!token) {
      navigate('/login'); // Navigate to login page
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard!</h1>
      {token && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Token</h2>
          <p className="text-gray-700 break-all">{token}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
