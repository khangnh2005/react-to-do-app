export default function AddField({ taskInput, onInputChange, onAdd }) {
  return (
    <form>
      <label>Add To-Do: </label>
      <input
        type="text"
        placeholder="Enter Task Here"
        value={taskInput}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      ></input>
      <button type="submit" onClick={(e) => {
        e.preventDefault();
        onAdd(taskInput);
      }}>
        Add
      </button>
    </form>
  );
}
