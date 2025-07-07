import Articale from "@/components/Articale";
import Container from "@/components/Container";
import React from "react";

export interface IBlogs {
  id?: string;
  title?: string;
  content?: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:8000/articlas");
  const data = (await result.json()) as IBlogs[];

  return (
    <div>
      <h1>Blogs</h1>
      <Container>
        <div className="grid grid-cols-4 gap-4 py-16">
          {data.map((item) => {
            return <Articale key={item.id} {...item} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Blogs;
