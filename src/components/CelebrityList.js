import React from "react";

function CelebrityList({ celebrities }) {
  return (
    <ul className="mt-6 space-y-2">
      {celebrities.map((name, index) => (
        <li
          key={index}
          className="p-3 bg-indigo-100 rounded shadow hover:bg-indigo-200"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export default CelebrityList;
