import React from 'react';
import ChallengeList from '../components/challenges/ChallengeList';

const ChallengesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Challenges</h1>
        <ChallengeList />
      </div>
    </div>
  );
};

export default ChallengesPage;
