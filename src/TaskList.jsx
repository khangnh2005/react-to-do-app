import Task from "./Task";

export default function TaskList({ taskList }) {
  return (
    <ul>
      {taskList.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}
    </ul>
  );
}
