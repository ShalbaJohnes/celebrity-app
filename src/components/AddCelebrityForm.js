import React, { useState } from "react";

function AddCelebrityForm({ addCelebrity }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    addCelebrity(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add celebrity"
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
}

export default AddCelebrityForm;
