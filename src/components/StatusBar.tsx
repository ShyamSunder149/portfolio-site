import { Timer, Status } from "../utils/DateTimeUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faLaptopCode,
  faRunning,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping: any = {
  "fa-bed": faBed,
  "fa-laptop-code": faLaptopCode,
  "fa-person-running": faRunning,
  "fa-ghost": faRocket,
};

const StatusBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center border-solid border-4 border-gray-300 rounded-lg p-2">
      <div>
        <Timer /> &nbsp;
      </div>
      <div>
        <FontAwesomeIcon icon={iconMapping[Status().color]} /> &nbsp;
        {Status().title}
      </div>
    </div>
  );
};

export default StatusBar;
