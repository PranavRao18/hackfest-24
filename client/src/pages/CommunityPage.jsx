import React from 'react';
import UserPosts from '../components/community/UserPosts';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Community</h1>
        <UserPosts />
      </div>
    </div>
  );
};

export default CommunityPage;
