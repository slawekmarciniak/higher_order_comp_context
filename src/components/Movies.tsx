import { FC, useContext } from "react";
import WithUser from "./WithUser";
import { APIContextData } from "../AppContext/APIContextData";

interface MoviesProps {}

const Movies: FC<MoviesProps> = () => {
  const { userData } = useContext<any>(APIContextData);
  return <p>{userData.email}</p>;
};

export default WithUser(Movies);
