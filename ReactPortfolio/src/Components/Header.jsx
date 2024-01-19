import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <header>
    {/* // <!-- Navigation Bar --> */}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
  <h1 className="navbar_h1">Portfolio</h1>
  {/* <!-- Navbar Responsive Button --> */}
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <!-- Navbar collapse list --> */}
  <div className="collapse navbar-collapse col-9" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto ">
      <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
      <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
      <li className="nav-item"><a className="nav-link" href="#work">Work</a></li>
      <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
      <li className="nav-item"><a className="nav-link" href="#contact_me">Contact Me</a></li>
  </ul>
  </div>
  </div>
  
  </nav> 

  </header>
  );
}

export default Header;