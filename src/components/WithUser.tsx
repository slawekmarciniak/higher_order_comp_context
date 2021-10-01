import { FC } from "react";
import AppProvider from "../AppContext/APIContextData";

const WithUser = (WrappedComponent: FC) => {
  return () => {
    return (
      <AppProvider>
        <WrappedComponent />;
      </AppProvider>
    );
  };
};
export default WithUser;
