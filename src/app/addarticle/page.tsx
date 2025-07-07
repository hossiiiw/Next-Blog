"use client";
import axios from "axios";
import React, { useState } from "react";
interface IData {
  id: string;
  title: string;
  content: string;
}
function AddArtical() {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  const hanldFormData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios({
      url: "http://localhost:8000/blogs",
      method: "post",
      data: {
        id: Math.random().toFixed,
        title: title,
        content: content,
      },
    });

    setContent("");
    setTitle("");
  };

  return (
    <div className="w-full bg-white h-[100vh] text-black flex flex-col items-center p-4">
      <h1>AddArtical</h1>
      <form action="" onSubmit={hanldFormData} className="flex flex-col">
        <input
          className="w-full m-2 p-4 text-white font-bold bg-sky-500 rounded-2xl"
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          className="w-full m-2 p-4 text-white font-bold bg-sky-500 rounded-2xl"
          placeholder="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <button className="w-full bg-sky-300 m-2 p-4 font-bold rounded-2xl">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddArtical;
