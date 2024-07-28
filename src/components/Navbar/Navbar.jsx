import { useState } from 'react';
import './Navbar.scss'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>Zeeshan Estate</span>
          </a>
          <div className="links">
            <a href="/">Home</a>
            <a href="/">About</a>
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
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contacts</a>
            <a href="/">Agents</a>
            <a href="/">SignIn</a>
            <a href="/">SignUp</a>
          </div>
        </div>
      </nav>

      <div className={ open ? 'backdrop active' : 'backdrop'} onClick={()=>{setOpen(!open)}}></div>
    </>
  );
}

export default Navbar