import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleTemplate = ({ articles }) => {
  const { articleId } = useParams();
  const article = articles.find(article => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      {/* Add more content fields as needed */}
    </div>
  );
};

export default ArticleTemplate;
