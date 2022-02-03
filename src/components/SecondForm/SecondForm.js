const SecondForm = () => {
  return (
    <form className="second-form d-none">
      <label htmlFor="username">Username</label>
      <input className="form-control" type="text" id="username"></input>
      <label htmlFor="pass">Password</label>
      <input className="form-control" type="password" id="pass"></input>
      <label htmlFor="repeatpass">Repeat Password</label>
      <input className="form-control" type="password" id="repeatpass"></input>
      <button className="submit-button prev">Previous</button>
      <button className="submit-button next">Next</button>
    </form>
  );
};

export default SecondForm;
