import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../style/Navbar.css'
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(props) {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  return (
  //   <nav ref={navRef} className={`navbar bg-${props.mode}`} style={{
  //     color: props.mode === "black" ? "white" : "black",
  //     height: '60px',
  // }}>
  //     <div className="navdiv">
  //       <ul>
  //         <li><Link className="nav-link"  to="/">{props.title}</Link></li>
  //         <li><Link className="nav-link" id="r" aria-current="page" to="/">Home</Link></li>
  //         <li><Link className="nav-link" id="r" to="/about">{props.about}</Link></li>
  //       </ul>
  //       <button className="btn-mode" onClick={props.toggleMode}><LightModeIcon /></button>
  //       <button className="nav-btn nav-close-btn" onClick={showNavbar}><CloseIcon /></button>
  //       <button className="nav-btn" onClick={showNavbar}><MenuIcon /></button>
  //     </div>
  //   </nav>


    <header>
      <div className="title">
      <h3 style={{color: props.mode === "white" ? "black" : "white",}}>{props.title}</h3>
      </div>
      
      <nav ref={navRef} className={`bg-${props.mode}`} style={{
      color: props.mode === "white" ? "black" : "white",
      height: '60px',
  }}>
        <Link className="link" to="/"  >Home</Link>
        <Link className="link" to="/about">{props.about}</Link>
        <button className="btn-mode" onClick={props.toggleMode}><LightModeIcon /></button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><CloseIcon /></button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}><MenuIcon style={{color: props.mode === "white" ? "black" : "white",}} /></button>
    </header>

  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  about: "About text here",
};
