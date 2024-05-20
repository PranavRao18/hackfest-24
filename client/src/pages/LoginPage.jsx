import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const LoginPage = () => {
  const [details, setDetails] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    login({ name: 'John Doe', email: details.email });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-[20px] shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={details.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={details.password} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded mt-10 text-[1.2rem] font-medium">SUBMIT</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-green-600">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
