import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const Charts = ({ transactions }) => {
  const uniqueCategories = [...new Set(transactions.map(transaction => transaction.category))];
  const categoryTotals = uniqueCategories.map(category => {
    const totalAmount = transactions
      .filter(transaction => transaction.category === category)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return totalAmount;
  });

  const data = {
    labels: uniqueCategories,
    datasets: [
      {
        label: 'Spending by Category',
        data: categoryTotals,
        backgroundColor: '#86efac',
      },
    ],
  };

  return (
    <div className="bg-gray-700 p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Spending Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default Charts;
