import { useContext, useState } from "react";
import Task from "./Task";
import { TasksContext } from "./tasksContext";

export default function TaskList() {
  const [editID, setEditID] = useState(null);
  const taskList = useContext(TasksContext);

  return (
    <ul>
      {taskList.map((task) => (
        <Task key={task.id} task={task} isBeingEdited={editID === task.id} setEditID={setEditID} />
      ))}
    </ul>
  );
}
