import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth/authSlice'; // Import the logout action

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token); // Access the token from Redux
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    }
  }, [token, navigate]);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action to clear token from Redux store
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Dashboard!</h1>
      {token ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Token</h2>
          <p className="text-gray-700 break-all">{token}</p>
        </div>
      ) : (
        <p className="text-red-500">No token found. Please log in.</p>
      )}

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
