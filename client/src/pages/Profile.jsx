import React from 'react';
import { useAuth } from '../components/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <div className="border p-2 rounded">{user.name}</div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <div className="border p-2 rounded">{user.email}</div>
        </div>
        <button
          onClick={logout}
          className="w-full bg-red-600 text-white p-2 rounded mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;