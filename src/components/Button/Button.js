const Button = ({ text, actionOnClick }) => {
  return (
    <button onClick={actionOnClick} className={`submit-button ${text}`}>
      {text}
    </button>
  );
};

export default Button;
