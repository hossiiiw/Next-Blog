import React from "react";
import { IBlogs } from "../page";
import Container from "@/components/Container";

interface IArticaleProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function SingleArticle(props: IArticaleProps) {
  const { id } = await props.params;
  const result = await fetch(`http://localhost:8000/articlas/${id}`);
  const data = (await result.json()) as IBlogs;

  return (
    <div>
      <h1>SingleArticle</h1>
      <Container>
        <h2 className="font-bold text-2xl p-2">{data.title}</h2>
        <p className="p-6 text-xl">{data.content}</p>
      </Container>
    </div>
  );
}

export default SingleArticle;
