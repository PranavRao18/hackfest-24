import React, { useState } from 'react';

const TransactionForm = ({ setTransactions, setPoints }) => {
  const [details, setDetails] = useState({ date: '', amount: '', category: '', vendor: '' });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...details,
      id: Date.now(),
      greenCredits: Math.floor(Math.random() * 20) + 1,
    };

    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    setPoints((prevPoints) => prevPoints + newTransaction.greenCredits);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded shadow-md mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="date" name="date" value={details.date} onChange={handleChange} className="border p-2 rounded bg-gray-800" required />
        <input type="number" name="amount" value={details.amount} onChange={handleChange} placeholder="Amount" className="border p-2 rounded bg-gray-800" required />
        <input type="text" name="category" value={details.category} onChange={handleChange} placeholder="Category" className="border p-2 rounded bg-gray-800" required />
        <input type="text" name="vendor" value={details.vendor} onChange={handleChange} placeholder="Vendor" className="border p-2 rounded bg-gray-800" required />
      </div>
      <button type="submit" className="bg-green-300 mt-4 px-4 py-2 rounded text-black">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
