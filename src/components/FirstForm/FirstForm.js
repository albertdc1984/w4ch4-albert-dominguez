import Button from "../Button/Button";
import FormContext from "../../Contexts/FormContext";
import { useContext } from "react";

const FirstForm = () => {
  const { changeNumber } = useContext(FormContext);

  return (
    <form className="first-form d-flex">
      <label htmlFor="name">Name</label>
      <input className="form-control" type="text" id="name"></input>
      <label htmlFor="lastname">Last Name</label>
      <input className="form-control" type="text" id="lastname"></input>
      <label htmlFor="birth">Birth Date</label>
      <input className="form-control" type="date" id="birth"></input>
      <label htmlFor="email">E-mail</label>
      <input className="form-control" type="email" id="email"></input>
      <Button
        text="next"
        actionOnClick={(event) => {
          event.preventDefault();
          changeNumber();
        }}
      />
    </form>
  );
};

export default FirstForm;
