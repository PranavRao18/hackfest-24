import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

const WearableData = () => {
  const { addPoints } = useContext(AuthContext);
  const [activityData, setActivityData] = useState({
    steps: 5000,
    distance: 5, 
    cycling: 30, 
  });

  const [points, setPoints] = useState({
    steps: 0,
    distance: 0,
    cycling: 0,
    total: 0
  });

  useEffect(() => {
    const stepsPoints = activityData.steps / 1000;
    const distancePoints = activityData.distance * 2;
    const cyclingPoints = activityData.cycling * 1.5;
    const totalPoints = stepsPoints + distancePoints + cyclingPoints;

    setPoints({
      steps: stepsPoints,
      distance: distancePoints,
      cycling: cyclingPoints,
      total: totalPoints
    });
    
    addPoints(totalPoints);
  }, [activityData, addPoints]);

  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Wearable Data</h1>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Your Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-200 p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">Steps</h3>
              <p className="text-gray-700">Steps: {activityData.steps}</p>
              <p className="text-gray-700">Points Earned: {points.steps}</p>
            </div>
            <div className="bg-green-200 p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">Distance</h3>
              <p className="text-gray-700">Distance: {activityData.distance} km</p>
              <p className="text-gray-700">Points Earned: {points.distance}</p>
            </div>
            <div className="bg-green-200 p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">Cycling</h3>
              <p className="text-gray-700">Cycling: {activityData.cycling} minutes</p>
              <p className="text-gray-700">Points Earned: {points.cycling}</p>
            </div>
          </div>
          <h3 className="text-lg font-bold mt-8">Total Points Earned: {points.total}</h3>
        </div>
      </div>
    </div>
  );
};

export default WearableData;
