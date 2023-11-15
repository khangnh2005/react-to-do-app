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
      title: "Play games",
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

  function handleDelete(taskId) {
    setTaskList(taskList.filter(task => task.id !== taskId));
  }

  function handleReplace(taskId, newTaskTitle) {
    setTaskList(taskList.map(task => {
      if (task.id === taskId) {
        return {
          id: uuidv4(),
          title: newTaskTitle,
        }
      } else {
        return task;
      }
    }));
  }

  return (
    <div className="main">
      <AddField
        onAdd={handleAdd}
      />
      <TaskList taskList={taskList} onDelete={handleDelete} onEdit={handleReplace} />
    </div>
  );
}
