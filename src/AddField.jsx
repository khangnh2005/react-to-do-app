import { useState } from "react";

export default function AddField({onAdd }) {
  const [taskInput, setTaskInput] = useState("");

  function handleInputChange(newInput) {
    setTaskInput(newInput);
  }

  return (
    <form>
      <label>Add To-Do: </label>
      <input
        type="text"
        placeholder="Enter Task Here"
        value={taskInput}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={(e) => {
        e.preventDefault();
        onAdd(taskInput);
      }}>
        Add
      </button>
    </form>
  );
}
