import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen, faCheck} from "@fortawesome/free-solid-svg-icons";

export default function Task({task, onDelete, onEdit, isBeingEdited, setEditID}) {
  const [inputTitle, setInputTitle] = useState(task.title);

  return (
    <li>
      <div>
        {!isBeingEdited && <p>{inputTitle}</p>}
        {isBeingEdited && <input className="edit-bar" value={inputTitle} onChange={(e) => {
          setInputTitle(e.target.value);
        }} />}
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => onDelete(task.id)}/>
          {!isBeingEdited && <FontAwesomeIcon icon={faPen} onClick={() => {
            onEdit(task.id, inputTitle);
            setEditID(task.id);
          }} />}
          {isBeingEdited && <FontAwesomeIcon icon={faCheck} onClick={() => {
            onEdit(task.id, inputTitle);
            setEditID(null);
          }} />}
        </div>
      </div>

      <hr />
    </li>
  );
}