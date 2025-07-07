import React from "react";
import Delete from "./Delete";

interface IContent {
  id: string;
  title: string;
  content: string;
}

async function Artichle() {
  const data = await fetch("http://localhost:8000/blogs");
  const content = await data.json();
  return (
    <>
      {content.map((item: IContent) => {
        return (
          <div key={item.id} className="bg-white p-4 ">
            <h2 className="">{item.title}</h2>

            <p>{item.content}</p>
            <Delete id={item.id} />
          </div>
        );
      })}
    </>
  );
}

export default Artichle;
