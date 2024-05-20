import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import PointsDisplay from '../components/PointsDisplay';
import Chart from '../components/Chart';

const DashboardPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const staticData = {
        transactions: [
          { id: 1, date: '2023-05-18', amount: 50, category: 'Groceries', vendor: 'Local Farmers Market', greenCredits: 10 },
          { id: 2, date: '2023-05-19', amount: 20, category: 'Transport', vendor: 'Public Transport', greenCredits: 5 },
          { id: 3, date: '2023-05-20', amount: 100, category: 'Utilities', vendor: 'Green Energy Co.', greenCredits: 20 },
        ],
        points: 35,
      };

      setTransactions(staticData.transactions);
      setPoints(staticData.points);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 mt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <PointsDisplay points={points} />
        <TransactionForm setTransactions={setTransactions} setPoints={setPoints} />
        <TransactionList transactions={transactions} />
        <Chart transactions={transactions} />
      </div>
    </div>
  );
};

export default DashboardPage;
