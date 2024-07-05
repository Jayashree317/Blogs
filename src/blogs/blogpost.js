import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  return (
    <div>
      {post ? (
        <>
          <h1 className='new'>Title:{post.title}</h1>
          <h1 className='new'>Content:{post.content}</h1>
        </>
      ) : (
        <h1>Post not found</h1>
      )}


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

export default BlogPost;
