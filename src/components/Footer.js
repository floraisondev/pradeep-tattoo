import React, {useEffect} from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
    return <footer className="footer">
        <div className="underline"> </div>
        <div style={{
             marginBottom: '1.2rem'
        }}>
            <SocialLinks />
            <h4>copyright&copy;{new Date().getFullYear()}</h4>
            <span>Pradeep Tattoo Zone. All rights reserved </span>
        </div>
        <div>
    <span>Developed by <a href="https://www.linkedin.com/in/devanshi-tank-b9b386ba/" target="_blank" rel="noopener noreferrer">@DevanshiTank{" "}</a></span>
          <span>Designed by <a href="https://www.behance.net/ronoldanthony" target="_blank" rel="noopener noreferrer">@RonoldAnthony</a></span>
        </div>
    </footer>
}

export default Footer;   