import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen, faCheck} from "@fortawesome/free-solid-svg-icons";

export default function Task({task, onDelete, onEdit}) {
  // Two Modes: edit + view
  const [mode, setMode] = useState("view");
  const [title, setTitle] = useState(task.title);

  return (
    <li>
      <div>
        {mode === "view" && <p>{title}</p>}
        {mode === "edit" && <input className="edit-bar" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} />}
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => onDelete(task.id)}/>
          {mode === "view" && <FontAwesomeIcon icon={faPen} onClick={() => {
            setMode("edit");
          }} />}
          {mode === "edit" && <FontAwesomeIcon icon={faCheck} onClick={() => {
            setMode("view");
            onEdit(task.id, document.querySelector(".edit-bar").value);
          }} />}
        </div>
      </div>

      <hr />
    </li>
  );
}