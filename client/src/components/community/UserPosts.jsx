import React, { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const UserPosts = () => {
  const [posts, setPosts] = useState([
    { content: 'I started composting at home and it’s been great!' },
    { content: 'Reduced my plastic use by bringing my own bags to the store.' },
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default UserPosts;
