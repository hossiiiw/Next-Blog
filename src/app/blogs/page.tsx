import Artichle from "@/components/Artichle";
import Container from "@/components/Container";
import React from "react";

function Blogs() {
  return (
    <div className="">
      <h1 className="">Blogs</h1>
      <Container>
        <div className="grid grid-cols-4 gap-4 py-16 text-black">
          <Artichle />
        </div>
      </Container>
    </div>
  );
}

export default Blogs;
