// src/pages/UploadsPage.jsx
import React, { useState } from 'react';

const UploadsPage = () => {
  const [activity, setActivity] = useState('');
  const [photos, setPhotos] = useState([]);
  const [bills, setBills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [description, setDescription] = useState('');

  const handlePhotoUpload = (event) => {
    setPhotos([...event.target.files]);
    setBills([]);
    setCertificates([]);
  };

  const handleBillUpload = (event) => {
    setBills([...event.target.files]);
    setPhotos([]);
    setCertificates([]);
  };

  const handleCertificateUpload = (event) => {
    setCertificates([...event.target.files]);
    setPhotos([]);
    setBills([]);
  };

  const handleSubmit = () => {
    console.log('Activity:', activity);
    console.log('Photos:', photos);
    console.log('Bills:', bills);
    console.log('Certificates:', certificates);
    console.log('Description:', description);
    alert('Activity submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-black pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Upload Your Activities</h1>
        <div className="bg-gray-700 p-4 shadow rounded mb-4">
          <h2 className="text-xl font-bold mb-2 text-white">Instructions</h2>
          <p className="text-white">
            Please select the activity you undertook and upload <strong>either</strong> photos of the activity, bills, or certificates. Additionally, provide a brief description of the activity in the text box below.
          </p>
        </div>
        <div className="bg-gray-700 p-4 shadow rounded">
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="activity">
              Select Activity:
            </label>
            <select
              id="activity"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="">-- Select an Activity --</option>
              <option value="planting_trees">Planting Trees</option>
              <option value="recycling">Recycling</option>
              <option value="cleaning_beach">Cleaning Beach</option>
              <option value="sustainable_shopping">Sustainable Shopping</option>
              <option value="community_gardening">Community Gardening</option>
              <option value="carpooling">Carpooling</option>
              <option value="composting">Composting</option>
              <option value="energy_saving">Energy Saving</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="description">
              Activity Description:
            </label>
            <textarea
              id="description"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="photos">
              Upload Photos:
            </label>
            <input
              id="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>



          <button
            onClick={handleSubmit}
            className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadsPage;
