import React from 'react';
import { useNavigate } from 'react-router-dom';
import articles from '../../utils/constants';

const ArticleList = () => {
  const navigate = useNavigate();

  const handleArticleClick = (articleId) => {
    navigate(`/education/${articleId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <div
            key={article.id}
            onClick={() => handleArticleClick(article.id)}
            className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p>{article.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
