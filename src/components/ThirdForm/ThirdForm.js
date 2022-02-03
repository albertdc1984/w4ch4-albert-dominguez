const ThirdForm = () => {
  return (
    <form className="third-form d-none">
      <label htmlFor="user">Username</label>
      <input className="form-control" type="text" id="user"></input>
      <label htmlFor="password">Password</label>
      <input className="form-control" type="password" id="password"></input>
      <div className="checkbox-area">
        <input className="check" type="checkbox" id="remember"></input>
        <label htmlFor="remember">Remember Password</label>
      </div>
      <button className="submit-button prev">Previous</button>
      <button className="submit-button next">Next</button>
    </form>
  );
};

export default ThirdForm;
