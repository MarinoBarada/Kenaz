import React from "react";

function Form({ commentData, formData, changeInput }) {
  return (
    <form onSubmit={commentData} className="comment-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={changeInput}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={changeInput}
        required
      />
      <textarea
        rows={9}
        cols={60}
        name="content"
        placeholder="Comment"
        value={formData.content}
        onChange={changeInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
