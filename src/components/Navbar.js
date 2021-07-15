import React from "react"
import logo from "../images/logo-t.png"
import {FaAlignJustify }from "react-icons/fa"
import PageLinks from "../constants/links"
import "../css/main.css"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = ({toggleSidebar}) => {
  return (
      <nav className="navbar">
          <div className="nav-center">
              <div className="nav-header">
               {/* <img src={logo} alt="logo"/> */}
               <StaticImage src= "../images/logo-t.png" height = {80} width = {80} alt = "logo" />
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
