import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddPostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate("/");
  };

  return (
    <div>
      <h1 className="new">Add a New Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label className="title">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label className="title">Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button type="submit" className="button-nav">
          Add Post
        </Button>

        <style>
          {`
        .button-nav{
            background: rgba(195, 74, 219, 0.785);
            color: white; /* Adding text color for visibility */
            padding: 10px 20px;
            border: none;
            cursor: pointer;
          }
          .button-nav:hover{
            background: rgba(166, 85, 182, 0.785);

          }

          .title{
    color: rgba(164, 28, 191, 0.785);
    font-weight:bold;
    font-size:20px
          }

          .new{
            color: rgba(164, 28, 191, 0.785);
            font-family:'Times New Roman', Times, serif;
            font-weight:bold;
}
          
        `}
        </style>
      </Form>
    </div>
  );
};

export default AddPostForm;
