import { FC } from "react";
import { DesctopNavItem, MobileNavItem } from "./NavItem";
import useWindowSize from "../../Hooks";

interface NavProps {}

const navElements = [
  {
    path: "/",
    name: "home",
    icon: "FaHome",
  },
  {
    path: "/movies",
    name: "movies",
    icon: "FiVideo",
  },
  {
    path: "/places",
    name: "places",
    icon: "GoGlobe",
  },
];

const Nav: FC<NavProps> = () => {
  const { isMobileSize } = useWindowSize();
  return (
    <ul>
      {navElements.map((el) =>
        isMobileSize ? (
          <MobileNavItem key={`nav_${el.name}`} path={el.path} icon={el.icon} />
        ) : (
          <DesctopNavItem
            key={`nav_${el.name}`}
            path={el.path}
            name={el.name}
            icon={el.icon}
          />
        )
      )}
    </ul>
  );
};

export default Nav;
