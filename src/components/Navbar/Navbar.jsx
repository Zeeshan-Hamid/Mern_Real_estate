import { useState } from 'react';
import './Navbar.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="left">
          <Link to={"/"} className="logo">
            <img src="/logo.png" alt="" />
            <span>Zeeshan Estate</span>
          </Link>
          <div className="links">
            <Link to={"/"}>Home</Link>

            <Link to="/list">Properties</Link>
            <a href="/">Contacts</a>
            <a href="/">Agents</a>
          </div>
        </div>
        <div className="right">
          <a href="/">SignIn</a>
          <a href="/" className="register">
            SignUp
          </a>
          <div className="menuIcon">
            <img
              src={open ? "/cross.png" : "menu.png"}
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <Link to={"/"}>Home</Link>
            <Link to={"/list"}>Properties</Link>
            <a to={"/"}>Contacts</a>
            <a href="/">Agents</a>
            <a href="/">SignIn</a>
            <a href="/">SignUp</a>
          </div>
        </div>
      </nav>

      <div
        className={open ? "backdrop active" : "backdrop"}
        onClick={() => {
          setOpen(!open);
        }}></div>
    </>
  );
};

export default Navbar