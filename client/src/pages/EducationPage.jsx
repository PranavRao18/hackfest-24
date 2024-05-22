import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import ArticleList from '../components/education/ArticleList';
import ArticleTemplate from '../components/education/ArticleTemplate';
import articles from '../utils/constants';

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Education</h1>
        <ArticleList />
      </div>
    </div>
  );
};

export default EducationPage;
