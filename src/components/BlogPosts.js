import React from "react";

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
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogPosts;
