import React, { useState } from "react";
import "./index.css";
import CelebrityList from "./components/CelebrityList";
import AddCelebrityForm from "./components/AddCelebrityForm";

function App() {
  // Initial celebrity list
  const [celebrities, setCelebrities] = useState([
    "Tom Hanks",
    "Scarlett Johansson",
    "Dwayne Johnson",
  ]);

  // Function to add a new celebrity
  const addCelebrity = (name) => {
    setCelebrities([...celebrities, name]);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        A-List Celebrities
      </h1>

      {/* Form to add new celebrity */}
      <AddCelebrityForm addCelebrity={addCelebrity} />

      {/* List of celebrities */}
      <CelebrityList celebrities={celebrities} />
    </div>
  );
}

export default App;
