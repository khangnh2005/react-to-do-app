import { useState } from "react";
import Task from "./Task";

export default function TaskList({ taskList, onDelete, onEdit }) {
  const [editID, setEditID] = useState(null);

  return (
    <ul>
      {taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} isBeingEdited={editID === task.id} setEditID={setEditID} />
      ))}
    </ul>
  );
}
