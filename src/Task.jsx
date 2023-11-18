import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen, faCheck} from "@fortawesome/free-solid-svg-icons";
import { TasksDispatchContext } from "./tasksContext";
import { v4 as uuidv4 } from "uuid";

export default function Task({task, isBeingEdited, setEditID}) {
  const [inputTitle, setInputTitle] = useState(task.title);
  const dispatch = useContext(TasksDispatchContext);

  return (
    <li>
      <div>
        {!isBeingEdited && <p>{inputTitle}</p>}
        {isBeingEdited && <input className="edit-bar" value={inputTitle} onChange={(e) => {
          setInputTitle(e.target.value);
        }} />}
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => {
            dispatch({
              type: "deleted",
              deleteId: task.id,
            });
          }}/>
          {!isBeingEdited && <FontAwesomeIcon icon={faPen} onClick={() => {
            setEditID(task.id);
          }} />}
          {isBeingEdited && <FontAwesomeIcon icon={faCheck} onClick={() => {
            dispatch({
              type: "replaced",
              replaceId: task.id,
              id: uuidv4(),
              title: inputTitle,
            });
            setEditID(null);
          }} />}
        </div>
      </div>

      <hr />
    </li>
  );
}