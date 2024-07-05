import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
      <h1 className='new'>Blog Posts</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <style>
        {`
        .new{
            color: rgba(164, 28, 191, 0.785);
            font-family:'Times New Roman', Times, serif;
            font-weight:bold;`}
      </style>
    </div>
  );
};

export default BlogList;
