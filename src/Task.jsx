import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen, faCheck} from "@fortawesome/free-solid-svg-icons";

export default function Task({id, title, onDelete}) {
  // Two Modes: edit + view
  const [mode, setMode] = useState("edit")

  return (
    <li>
      <div>
        {mode === "view" && <p>{title}</p>}
        {mode === "edit" && <input value={title} />}
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => onDelete(id)}/>
          {mode === "view" && <FontAwesomeIcon icon={faPen} />}
          {mode === "edit" && <FontAwesomeIcon icon={faCheck} />}
        </div>
      </div>

      <hr />
    </li>
  );
}