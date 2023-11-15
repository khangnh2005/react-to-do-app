import "./App.css";
import { useState } from "react";
import AddField from "./AddField";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Buy stuff",
    },
    {
      id: 2,
      title: "Kill shits",
    },
  ]);

  function handleInputChange(newInput) {
    setTaskInput(newInput);
  }

  function handleAdd(taskInput) {
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        title: taskInput,
      },
    ]);
  }

  return (
    <div className="main">
      <AddField
        taskInput={taskInput}
        onInputChange={handleInputChange}
        onAdd={handleAdd}
      />
      <TaskList taskList={taskList} />
    </div>
  );
}
