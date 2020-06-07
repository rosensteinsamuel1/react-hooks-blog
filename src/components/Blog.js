import React, { useState } from "react";
import BlogForm from "./BlogForm";
import BlogPosts from "./BlogPosts";

const curPosts = [
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post 1",
    content: "This is my first post about react hooks!",
    isLiked: true
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post 2",
    content: "This is my second post about react hooks!",
    isLiked: true
  },
  {
    id: Math.floor(Math.random() * 1000),
    title: "Post 3",
    content: "This is my third post about react hooks!",
    isLiked: false
  }
];

function Blog() {
  const [posts, setPosts] = useState(curPosts);

  const addPostHandler = post => {
    setPosts(prevPosts => [...prevPosts, post]);
  };

  const onLikeHandler = id => {
    console.log(posts);
    console.log(id + " was liked");
    setPosts(prevPosts =>
      prevPosts.map(p => {
        return p.id === id ? { ...p, isLiked: !p.isLiked } : p;
      })
    );
  };

  const onDeleteHandler = id => {
    setPosts(prevPosts => prevPosts.filter(p => p.id !== id));
  };

  return (
    <div>
      <BlogForm addPost={addPostHandler} />
      <BlogPosts
        posts={posts}
        onLike={onLikeHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

export default Blog;
