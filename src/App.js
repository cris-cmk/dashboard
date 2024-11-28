import React from 'react';
import { useSelector } from 'react-redux';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="bg-gray-100 min-h-screen">
      {token ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">Welcome!</h1>
          <p>Your token: {token}</p>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
