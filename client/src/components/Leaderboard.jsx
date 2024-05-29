import React from 'react';

const Leaderboard = () => {
  // Dummy data for demonstration
  const dummyData = [
    { id: 1, name: 'Harsh Mehta', credits: 100 },
    { id: 2, name: 'Tarun Roy', credits: 90 },
    { id: 3, name: 'Umesh Gupta', credits: 80 },
    { id: 4, name: 'Gireesh Hegde', credits: 70 },
    { id: 5, name: 'John Doe', credits: 60 },
  ];

  return (
    <div className="bg-gray-900 text-white p-40 rounded shadow-md pt-[120px] min-h-screen">
      <h2 className="text-2xl font-bold m-4">Leaderboard</h2>
      <div className="flex flex-col space-y-4">
        {dummyData.map((user, index) => (
          <div
            key={user.id}
            className="bg-gray-700 p-4 rounded shadow-lg flex flex-col items-center justify-center"
          >
            <div className="text-2xl font-bold mb-2">#{index + 1}</div>
            <div className="text-lg mb-2">{user.name}</div>
            <div className="text-2xl">{user.credits} Green Credits</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
