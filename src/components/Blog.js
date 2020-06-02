import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogPosts from "./BlogPosts";

function Blog() {
  const [posts, setPosts] = useState([]);

  const addPostHandler = post => {
    console.log(post);
    setPosts(prevPosts => [...prevPosts, post]);
  };
  return (
    <div>
      <BlogForm addPost={addPostHandler} />
      <BlogPosts posts={posts} />
    </div>
  );
}

export default Blog;
