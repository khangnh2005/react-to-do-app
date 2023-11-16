import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen, faCheck} from "@fortawesome/free-solid-svg-icons";

export default function Task({task, onDelete, onEdit, isBeingEdited, setEditID}) {
  const [title, setTitle] = useState(task.title);

  return (
    <li>
      <div>
        {!isBeingEdited && <p>{title}</p>}
        {isBeingEdited && <input className="edit-bar" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} />}
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => onDelete(task.id)}/>
          {!isBeingEdited && <FontAwesomeIcon icon={faPen} onClick={() => {
            setEditID(task.id);
          }} />}
          {isBeingEdited && <FontAwesomeIcon icon={faCheck} onClick={() => {
            setEditID(null);
            onEdit(task.id, document.querySelector(".edit-bar").value);
          }} />}
        </div>
      </div>

      <hr />
    </li>
  );
}