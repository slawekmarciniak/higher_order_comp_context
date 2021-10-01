import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { AppContextType } from "../AppContext/AppContext";

const Passphrase = () => {
  const { inputValue, handleInputChange, handleClick } =
    useContext<AppContextType>(AppContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <>
      <h1>enter 'clops'</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={inputValue} type="text" />
        <button type="submit">confirm</button>
      </form>
    </>
  );
};

export default Passphrase;
