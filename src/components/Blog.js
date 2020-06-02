import React, { useState } from "react";
import BlogForm from "./BlogForm";

function Blog() {
  const [posts, setPosts] = useState([]);

  const addPostHandler = post => {
    console.log(post);
    setPosts(prevPosts => [...prevPosts, post]);
  };
  return <BlogForm addPost={addPostHandler} />;
}

export default Blog;
