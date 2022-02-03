const SecondForm = () => {
  return (
    <form className="second-form d-none">
      <label htmlFor="user">Username</label>
      <input className="form-control" type="text" id="name"></input>
      <label htmlFor="password">Password</label>
      <input className="form-control" type="password" id="password"></input>
      <label htmlFor="repeatpass">Repeat Password</label>
      <input className="form-control" type="password" id="repeatpass"></input>
      <button className="submit-button prev">Previous</button>
      <button className="submit-button next">Next</button>
    </form>
  );
};

export default SecondForm;
