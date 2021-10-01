import { createContext } from "react";

export type APIContextDataType = {
  userData: {
    email: string;
    isAdmin: boolean;
  };
};
export const APIContextData = createContext<APIContextDataType | any>(null);

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const userData = {
    email: "jan@kowalski.pl",
    isAdmin: false,
  };

  return (
    <APIContextData.Provider
      value={{
        userData,
      }}
    >
      {children}
    </APIContextData.Provider>
  );
};

export default AppProvider;
