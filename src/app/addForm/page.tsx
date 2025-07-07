import AddArticale from "@/components/AddArticale";
import Container from "@/components/Container";
import React from "react";

function AddForm() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Add New Article</h1>

      <Container>
        <AddArticale />
      </Container>
    </div>
  );
}

export default AddForm;
