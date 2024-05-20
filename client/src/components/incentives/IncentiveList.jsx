import React, { useState } from 'react';

const incentives = [
  { brand: 'EcoStore', discount: '10% off for 100 green credits' },
  { brand: 'GreenWear', discount: '15% off for 200 green credits' },
  // More incentives
];

const IncentiveList = () => {
  const [redeemed, setRedeemed] = useState(incentives.map(() => false));
  const handleRedeem = (index) => {
    const newRedeemed = [...redeemed];
    newRedeemed[index] = true;
    setRedeemed(newRedeemed);
    alert("Your mom's number is the code to redeem :)");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {incentives.map((incentive, index) => (
        <div
          key={incentive.brand}
          className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-2">{incentive.brand}</h3>
          <p className="text-lg font-semibold mb-2">{incentive.discount}</p>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${redeemed[index] ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-green-600'}`}
            onClick={() => handleRedeem(index)}
            disabled={redeemed[index]}
          >
            {redeemed[index] ? 'Redeemed' : 'Redeem'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default IncentiveList;
