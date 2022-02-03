const FirstForm = () => {
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
      <button className="submit-button next">Next</button>
    </form>
  );
};

export default FirstForm;
