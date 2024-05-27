import React, { useState } from "react";

function searshImage({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    searchText(text);
  };
  return (
    <form onSubmit={onSubmit} className="search">
      <input
        type="text"
        placeholder="Search Image..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Searsh</button>
    </form>
  );
}

export default searshImage;
