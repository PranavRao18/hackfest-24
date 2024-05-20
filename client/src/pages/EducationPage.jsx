import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import ArticleList from '../components/education/ArticleList';
import ArticleTemplate from '../components/education/ArticleTemplate';

const articles = [
  { id: 'article1', title: 'Article 1', content: 'Content of article 1', preview: 'Preview of article 1' },
  { id: 'article2', title: 'Article 2', content: 'Content of article 2', preview: 'Preview of article 2' },
  // Add more articles as needed
];

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[120px]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Education</h1>
        <Routes>
          <Route path="/" element={<ArticleList articles={articles} />} />
          <Route path=":articleId" element={<ArticleTemplate articles={articles} />} />
        </Routes>
      </div>
    </div>
  );
};

export default EducationPage;
