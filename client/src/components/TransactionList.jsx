import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-gray-700 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="border-b py-2">
            <div>{transaction.date} - {transaction.vendor}</div>
            <div>Category: {transaction.category}</div>
            <div>Amount: ${transaction.amount}</div>
            <div>Green Credits: {transaction.greenCredits}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
