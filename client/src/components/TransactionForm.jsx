import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = ({ setTransactions, setPoints }) => {
  const [details, setDetails] = useState({ date: '', amount: '', category: '', vendor: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/transactions', details);
      setTransactions(response.data.transactions);
      setPoints(response.data.points);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={details.date} onChange={handleChange} />
      <input type="number" name="amount" value={details.amount} onChange={handleChange} placeholder="Amount" />
      <input type="text" name="category" value={details.category} onChange={handleChange} placeholder="Category" />
      <input type="text" name="vendor" value={details.vendor} onChange={handleChange} placeholder="Vendor" />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
