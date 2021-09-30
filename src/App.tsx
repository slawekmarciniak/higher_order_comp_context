import "./App.css";
import { useContext } from "react";
import Content from "./components/Content";
import PassphraseForm from "./components/PassphraseForm";
import { AppContext } from "./AppContext/AppContext";

function App() {
  const { isLogged } = useContext(AppContext);

  return (
    <div className="App">{isLogged ? <Content /> : <PassphraseForm />}</div>
  );
}

export default App;
