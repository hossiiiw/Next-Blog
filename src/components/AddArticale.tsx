"use client";
import React, { useState } from "react";



function AddArticale() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const AddNewArticle = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:8000/articlas", {
      method: "post",
      body: JSON.stringify({
        id: Math.random().toString(),
        title: title,
        content: content,
      }),
    });

    setTitle("");
    setContent("");
  };

  return (
    <form
      action=""
      onSubmit={AddNewArticle}
    
      className="w-full flex flex-col justify-center items-center bg-sky-400 p-6 m-6"
    >
      <div className="w-full flex flex-col">
        <label className="font-bold text-xl" htmlFor="">
          title
        </label>
        <input
          className="bg-white p-4 rounded my-2"
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </div>

      <div className="w-full flex flex-col">
        <label className="font-bold text-xl" htmlFor="">
          Content
        </label>
        <textarea
          className="bg-white p-4 rounded my-2 "
          name=""
          id=""
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-44 mt-4 bg-sky-900 text-white font-bold text-xl p-4"
      >
        Add{" "}
      </button>
    </form>
  );
}

export default AddArticale;
