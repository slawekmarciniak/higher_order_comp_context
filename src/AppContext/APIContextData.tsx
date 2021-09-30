import { createContext } from "react";

export type APIContextDataType = {
  userData: any;
};
export const APIContextData = createContext<APIContextDataType | null>(null);

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
