import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>lamadev</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://res.cloudinary.com/dksavyi8e/image/upload/v1711888776/pmmigss8sqprt7mlh71y.jpg"
            alt=""
          />
          <span>Hemant</span>
        </div>
        <img src="/setting.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
