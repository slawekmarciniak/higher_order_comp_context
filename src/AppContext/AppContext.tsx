import { createContext, useState } from "react";

export type AppContextType = {
  isLogged: boolean;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

export const AppContext = createContext<AppContextType | any>(null);

const password: string = "clops";

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleClick = (): void => {
    if (inputValue === password) {
      setIsLogged(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLogged,
        inputValue,
        handleInputChange,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
