import React from "react";
import Heart from "../assets/heart.svg";
import HeartSolid from "../assets/heart-solid.svg";
import DeleteIcon from "../assets/delete-icon.svg";

function BlogPosts(props) {
  return (
    <section>
      <h2>Blog Posts</h2>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <div>
              <b>{post.title}</b>
            </div>
            <div>{post.content}</div>
            <img
              onClick={() => props.onLike(post.id)}
              src={post.isLiked ? HeartSolid : Heart}
              alt="heart-logo"
              style={{ width: "20px" }}
            />
            <img
              onClick={() => props.onDelete(post.id)}
              src={DeleteIcon}
              alt="delete-icon"
              style={{ width: "20px" }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogPosts;
