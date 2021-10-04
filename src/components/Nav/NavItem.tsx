import { FC } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";

const icons = (icon: string) => {
  switch (icon) {
    case "FaHome":
      return <FaHome />;
    case "FiVideo":
      return <FiVideo />;
    case "GoGlobe":
      return <GoGlobe />;
  }
};

interface DesctopNavItemProps {
  path: string;
  name: string;
  icon: string;
}

export const DesctopNavItem: FC<DesctopNavItemProps> = ({
  path,
  name,
  icon,
}) => {
  return (
    <li>
      <Link to={path}>
        <div className="menu_element">
          <div className="icon">{icons(icon)}</div>
          <div className={"label"}>{name}</div>
        </div>
      </Link>
    </li>
  );
};

interface MobileNavItemProps {
  path: string;
  icon: string;
}

export const MobileNavItem: FC<MobileNavItemProps> = ({ path, icon }) => {
  return (
    <li>
      <Link to={path}>
        <div className="menu_element">
          <div className="icon">{icons(icon)}</div>
        </div>
      </Link>
    </li>
  );
};
