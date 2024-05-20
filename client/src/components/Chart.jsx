import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Charts = ({ transactions }) => {
  // Extracting unique categories from transactions
  const uniqueCategories = [...new Set(transactions.map(transaction => transaction.category))];
  
  // Summing up amounts for each category
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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Spending Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default Charts;
