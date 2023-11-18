import "./App.css";
import { useReducer } from "react";
import AddField from "./AddField";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";
import tasksReducer from "./tasksReducer";

export default function App() {
  const [taskList, dispatch] = useReducer(tasksReducer, [
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
    dispatch({
      type: "added",
      id: uuidv4(),
      title: taskInput,
    });
    // setTaskList([
    //   ...taskList,
    //   {
    //     id: uuidv4(),
    //     title: taskInput,
    //   },
    // ]);
  }

  function handleDelete(taskId) {
    dispatch({
      type: "deleted",
      deleteId: taskId,
    });
    // setTaskList(taskList.filter(task => task.id !== taskId));
  }

  function handleReplace(taskId, newTaskTitle) {
    dispatch({
      type: "replaced",
      replaceId: taskId,
      id: uuidv4(),
      title: newTaskTitle,
    });
    // setTaskList(taskList.map(task => {
    //   if (task.id === taskId) {
    //     return {
    //       id: uuidv4(),
    //       title: newTaskTitle,
    //     }
    //   } else {
    //     return task;
    //   }
    // }));
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
