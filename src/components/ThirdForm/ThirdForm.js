import FormContext from "../../Contexts/FormContext";
import { useContext } from "react";
import Button from "../Button/Button";

const ThirdForm = () => {
  const { restNumber } = useContext(FormContext);

  return (
    <form className="third-form d-flex">
      <label htmlFor="user">Username</label>
      <input className="form-control" type="text" id="user"></input>
      <label htmlFor="password">Password</label>
      <input className="form-control" type="password" id="password"></input>
      <div className="checkbox-area">
        <input className="check" type="checkbox" id="remember"></input>
        <label htmlFor="remember">Remember Password</label>
      </div>
      <div className="button-container">
        <Button
          text="previous"
          actionOnCLick={(event) => {
            event.preventDefault();
            restNumber();
          }}
        />
        <Button text="next" />
      </div>
    </form>
  );
};

export default ThirdForm;
