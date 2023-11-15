export default function TaskList({ taskList }) {
  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>
          <p>{task.title}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}
