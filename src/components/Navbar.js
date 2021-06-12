import React from "react"
import logo from "../images/logo.jpg"
import {FaAlignJustify }from "react-icons/fa"
import PageLinks from "../constants/links"
import "../css/main.css"
const Navbar = ({toggleSidebar}) => {
  return (
      <nav className="navbar">
          <div className="nav-center">
              <div className="nav-header">
               {/* <img src={logo} alt="logo"/> */}
               <h3>Logo</h3>
               <button type="button" className="toggle-btn"
               onClick = {toggleSidebar}>
                   <FaAlignJustify></FaAlignJustify>
               </button>
              </div>
              <PageLinks styleClass="nav-links"></PageLinks>
          </div>

      </nav>
  )
}

export default Navbar;
