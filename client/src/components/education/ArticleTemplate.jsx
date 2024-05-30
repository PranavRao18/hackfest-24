import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../utils/constants';

const ArticleTemplate = () => {
  const { articleId } = useParams();
  const article = articles.find(article => article.id === articleId);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='pt-[120px] min-h-screen bg-black text-white p-28'>
      <h2 className='text-5xl my-10 text-center'>{article.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: article.content }} className='text-xl'></div>
      {/* Add more content fields as needed */}
    </div>
  );
};

export default ArticleTemplate;
