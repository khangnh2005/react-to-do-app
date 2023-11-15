import Task from "./Task";

export default function TaskList({ taskList, onDelete }) {
  return (
    <ul>
      {taskList.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} onDelete={onDelete} />
      ))}
    </ul>
  );
}
