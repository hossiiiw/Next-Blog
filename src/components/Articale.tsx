import { IBlogs } from "@/app/blogs/page";
import Link from "next/link";
import React from "react";
import Delete from "./Delete";

function Articale({ id, title, content }: IBlogs) {
  return (
    <div>
      {" "}
      <div className="bg-sky-200 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="p-4">{content}</p>

        <Link
          href={`http://localhost:3000/blogs/${id}`}
          className="bg-sky-700 p-2 font-bold text-white"
        >
          Read...
        </Link>

        <Delete id={id}/>
      </div>
    </div>
  );
}

export default Articale;
