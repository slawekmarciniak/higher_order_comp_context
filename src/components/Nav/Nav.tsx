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
  const { width } = useWindowSize();
  const isDesctopSize = width > 1023 ? true : false;
  return (
    <ul>
      {navElements.map((el) =>
        isDesctopSize ? (
          <DesctopNavItem path={el.path} name={el.name} icon={el.icon} />
        ) : (
          <MobileNavItem path={el.path} icon={el.icon} />
        )
      )}
    </ul>
  );
};

export default Nav;
