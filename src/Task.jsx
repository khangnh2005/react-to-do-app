import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPen} from "@fortawesome/free-solid-svg-icons";

export default function Task({title}) {
  return (
    <li>
      <div>
        <p>{title}</p>
        <div className="icon-container">
          <FontAwesomeIcon icon={faCircleXmark} />
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>

      <hr />
    </li>
  );
}