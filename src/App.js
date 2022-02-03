import "./App.css";
import FirstForm from "./components/FirstForm/FirstForm";
import SecondForm from "./components/SecondForm/SecondForm";
import ThirdForm from "./components/ThirdForm/ThirdForm";
import FormContext from "./Contexts/FormContext";
import { useContext } from "react";

function App() {
  let { screenNumber } = useContext(FormContext);

  return (
    <>
      <h1>theform</h1>
      <div className="container">
        <div className="row col-8">
          {screenNumber === 0 && <FirstForm />}
          {screenNumber === 1 && <SecondForm />}
          {screenNumber === 2 && <ThirdForm />}
        </div>
      </div>
    </>
  );
}

export default App;
