import React from 'react';
import IncentiveList from '../components/incentives/IncentiveList';

const IncentivesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Exclusive Offers</h1>
        <IncentiveList />
      </div>
    </div>
  );
};

export default IncentivesPage;
