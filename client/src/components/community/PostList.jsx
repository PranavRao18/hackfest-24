import React from 'react';

const PostList = ({ posts }) => (
  <div>
    {posts.map((post, index) => (
      <div key={index}>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

export default PostList;
