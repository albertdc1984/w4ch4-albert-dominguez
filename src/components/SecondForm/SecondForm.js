import FormContext from "../../Contexts/FormContext";
import { useContext } from "react";
import Button from "../Button/Button";

const SecondForm = () => {
  const { changeNumber } = useContext(FormContext);
  const { restNumber } = useContext(FormContext);

  return (
    <form className="second-form d-flex">
      <label htmlFor="username">Username</label>
      <input className="form-control" type="text" id="username"></input>
      <label htmlFor="pass">Password</label>
      <input className="form-control" type="password" id="pass"></input>
      <label htmlFor="repeatpass">Repeat Password</label>
      <input className="form-control" type="password" id="repeatpass"></input>
      <div className="button-container">
        <Button
          text="previous"
          actionOnCLick={(event) => {
            event.preventDefault();
            restNumber();
          }}
        />
        <Button
          text="next"
          actionOnClick={(event) => {
            event.preventDefault();
            changeNumber();
          }}
        />
      </div>
    </form>
  );
};

export default SecondForm;
