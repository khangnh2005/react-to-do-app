import "./App.css";
import { useState } from "react";
import AddField from "./AddField";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

export default function App() {
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
        onAdd={handleAdd}
      />
      <TaskList taskList={taskList} />
    </div>
  );
}
