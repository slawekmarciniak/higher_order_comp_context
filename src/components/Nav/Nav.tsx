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

const maxMobileSize: number = 1023;

const Nav: FC<NavProps> = () => {
  const { isMobileSize } = useWindowSize(maxMobileSize);
  return (
    <ul>
      {navElements.map((el) =>
        isMobileSize ? (
          <MobileNavItem path={el.path} icon={el.icon} />
        ) : (
          <DesctopNavItem path={el.path} name={el.name} icon={el.icon} />
        )
      )}
    </ul>
  );
};

export default Nav;
