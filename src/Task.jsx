import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen} from "@fortawesome/free-solid-svg-icons";

export default function Task({id, title, onDelete}) {
  return (
    <li>
      <div>
        <p>{title}</p>
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => onDelete(id)}/>
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>

      <hr />
    </li>
  );
}