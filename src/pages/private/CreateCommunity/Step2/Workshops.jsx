import React, { useState } from "react";

const Workshops = ({ addWorkshop }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const data = {
    title: title,
    description: description,
  };

  return (
    <div className="Workshops">
      Workshops{" "}
      <form>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Description
          <textarea
            type="text-area"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>
        <button type="button" onClick={() => addWorkshop(data)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Workshops;
