import React from "react"
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa"
import "../css/main.css"
const Sidebar = ({isOpen, toggleSidebar}) => {
    return (
    <aside className = {`sidebar ${isOpen ? "show-sidebar" : ""} `}>
     <button className="close-btn" onClick={toggleSidebar}>
         <FaTimes />
     </button>
     <div className = "side-container">
         <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
       <SocialLinks style={{ margin : "0 14px"}} styleClass = {`${isOpen ? "sidebar-icons" : ""}`} />  
     </div>
    </aside>
    )
}

export default Sidebar