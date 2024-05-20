import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Share your sustainability tip or experience"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
