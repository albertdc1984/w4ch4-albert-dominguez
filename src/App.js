import "./App.css";
import FirstForm from "./components/FirstForm/FirstForm";
import SecondForm from "./components/SecondForm/SecondForm";
import ThirdForm from "./components/ThirdForm/ThirdForm";

function App() {
  return (
    <>
      <div className="container">
        <div className="row col-12">
          <FirstForm />
          <SecondForm />
          <ThirdForm />
        </div>
      </div>
    </>
  );
}

export default App;
