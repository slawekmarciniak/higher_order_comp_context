import { FC, useContext } from "react";
import WithUser from "../WithUser";
import { APIContextData } from "../../AppContext/APIContextData";
import { APIContextDataType } from "../../AppContext/APIContextData";

interface MoviesProps {}

const Movies: FC<MoviesProps> = () => {
  const { userData } = useContext<APIContextDataType>(APIContextData);
  return (
    <>
      <p>{userData.email}</p>
      <p>{userData.isAdmin ? "admin" : "is not admin"}</p>
    </>
  );
};

export default WithUser(Movies);
