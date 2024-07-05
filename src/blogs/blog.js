import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './header';
import BlogList from './bloglist';
import BlogPost from './blogpost';
import AddPostForm from './postform';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/post/:id" element={<BlogPost posts={posts} />} />
          <Route path="/add-post" element={<AddPostForm addPost={addPost} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
