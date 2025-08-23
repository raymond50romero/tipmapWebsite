import React, { useState } from "react";

export default function NewPostForm() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  return (
    <form>
      <input
        type="text"
        placeholder="Restaurant Name"
        className="input-field"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Restaurant Address"
        className="input-field"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <div id="star-rating-container">
        <span>overall</span>
        <span>management</span>
        <span>clentele</span>
      </div>
    </form>
  );
}
