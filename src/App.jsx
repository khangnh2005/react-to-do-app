import "./App.css";
import { useReducer } from "react";
import AddField from "./AddField";
import TaskList from "./TaskList";
import tasksReducer from "./tasksReducer";
import { TasksContext, TasksDispatchContext } from "./tasksContext";

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

  // function handleAdd(taskInput) {
  //   dispatch({
  //     type: "added",
  //     id: uuidv4(),
  //     title: taskInput,
  //   });
  // }

  // function handleDelete(taskId) {
  //   dispatch({
  //     type: "deleted",
  //     deleteId: taskId,
  //   });
  // }

  // function handleReplace(taskId, newTaskTitle) {
  //   dispatch({
  //     type: "replaced",
  //     replaceId: taskId,
  //     id: uuidv4(),
  //     title: newTaskTitle,
  //   });
  // }

  return (
    <div className="main">
      <TasksContext.Provider value={taskList}>
        <TasksDispatchContext.Provider value={dispatch}>
          <AddField />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </div>
  );
}
