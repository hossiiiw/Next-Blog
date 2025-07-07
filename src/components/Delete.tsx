"use client";
import axios from "axios";
import React from "react";

function Delete({ id }: { id: string }) {
  const handleDetele = (id: string) => {
    axios({
      url: `http://localhost:8000/blogs/${id}`,
      method: "delete",
    });

    window.location.reload();
  };

  return (
    <button onClick={() => handleDetele(id)} className="bg-sky-400 p-2 mt-4">
      Delete Articale
    </button>
  );
}

export default Delete;
