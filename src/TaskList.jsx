import Task from "./Task";

export default function TaskList({ taskList, onDelete, onEdit }) {
  return (
    <ul>
      {taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}
