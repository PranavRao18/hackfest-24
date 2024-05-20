// ChallengeList.jsx

import React from 'react';

const challenges = [
  { type: 'reduce-plastic', description: 'Use zero single-use plastics for a week' },
  { type: 'bike-to-work', description: 'Bike to work every day for a month' },
  // More challenges
];

const startChallenge = (challengeType) => {
  const challenge = challenges.find(c => c.type === challengeType);
  alert(`Challenge started: ${challenge.description}`);
};

const ChallengeList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {challenges.map(challenge => (
      <div key={challenge.type} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-2">{challenge.description}</h3>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400" onClick={() => startChallenge(challenge.type)}>Start Challenge</button>
      </div>
    ))}
  </div>
);

export default ChallengeList;
