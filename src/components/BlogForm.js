import React, { useState } from "react";

function BlogForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    props.addPost({
      title: enteredTitle,
      content: enteredContent,
      id: Math.floor(Math.random() * 1000)
    });
    setEnteredTitle("");
    setEnteredContent("");
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={event => {
              setEnteredTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input
            type="text"
            id="content"
            value={enteredContent}
            onChange={event => {
              setEnteredContent(event.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Publish Post</button>
        </div>
      </form>
    </section>
  );
}

export default BlogForm;
