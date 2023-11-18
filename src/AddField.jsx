import { useContext, useState } from "react";
import { TasksDispatchContext } from "./tasksContext";
import { v4 as uuidv4 } from "uuid";

export default function AddField() {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useContext(TasksDispatchContext);

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
      />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "added",
            id: uuidv4(),
            title: taskInput,
          });
        }}>
        Add
      </button>
    </form>
  );
}
