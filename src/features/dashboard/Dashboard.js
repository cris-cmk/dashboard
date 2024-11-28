import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token); // Access the token from Redux

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
    </div>
  );
};

export default Dashboard;
