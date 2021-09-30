import { FC } from "react";
import WithUser from "./WithUser";

interface PlacesProps {}

const Places: FC<PlacesProps> = () => {
  return <p>places</p>;
};

export default WithUser(Places);
