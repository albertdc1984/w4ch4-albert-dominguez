import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  let [screenNumber, setScreenNumber] = useState(0);

  const changeNumber = () => {
    setScreenNumber(screenNumber++);
  };
  const restNumber = () => {
    setScreenNumber([screenNumber - 1]);
  };

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
    remember: false,
  });

  return (
    <FormContext.Provider
      value={{
        userData,
        setUserData,
        screenNumber,
        setScreenNumber,
        changeNumber,
        restNumber,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
