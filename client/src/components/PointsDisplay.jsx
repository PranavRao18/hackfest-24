import React from 'react';

const PointsDisplay = ({ points }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Green Credits</h2>
      <div className="text-2xl">{points}</div>
    </div>
  );
};

export default PointsDisplay;
