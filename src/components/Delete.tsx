"use client";
import React, { useEffect } from "react";

async function Delete({ id }: { id: string }) {
  const handleDelete = (id: string) => {
    fetch(`http://localhost:8000/articlas/${id}`, {
      method: "delete",
    });

    window.location.reload();
  };

  return (
    <button
      onClick={() => handleDelete(id)}
      className="bg-red-600 p-2 mt-2 font-bold text-white"
    >
      Delete Item
    </button>
  );
}

export default Delete;
