import React, { useState } from 'react';

const incentives = [
  { brand: 'EcoStore', discount: '10% off for 100 green credits' },
  { brand: 'GreenWear', discount: '15% off for 200 green credits' },
  // More incentives
];

const generateCode = () => {
  return Math.random().toString(36).substring(2, 12).toUpperCase();
};

const IncentiveList = () => {
  const [redeemed, setRedeemed] = useState(incentives.map(() => false));
  const [codes, setCodes] = useState(incentives.map(() => ''));

  const handleRedeem = (index) => {
    const newRedeemed = [...redeemed];
    const newCodes = [...codes];
    newRedeemed[index] = true;
    newCodes[index] = generateCode();
    setRedeemed(newRedeemed);
    setCodes(newCodes);
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard');
    }, () => {
      alert('Failed to copy code');
    });
  };

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {incentives.map((incentive, index) => (
        <div
          key={incentive.brand}
          className="bg-gray-700 rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl text-white"
        >
          <h3 className="text-lg font-semibold mb-2">{incentive.brand}</h3>
          <p className="text-lg font-semibold mb-2">{incentive.discount}</p>
          {redeemed[index] ? (
            <div>
              <p className="m-4">Code: <span className='border-[2px] p-2 border-black rounded-[10px] text-green-500'>{codes[index]}</span></p>
              <button
                className="bg-green-300 text-black px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-600"
                onClick={() => handleCopy(codes[index])}
              >
                Copy Code
              </button>
              <p className="text-gray-400 mt-2">Expires in 10 days</p>
            </div>
          ) : (
            <button
              className={`bg-green-300 text-black px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-600`}
              onClick={() => handleRedeem(index)}
            >
              Redeem
            </button>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default IncentiveList;
