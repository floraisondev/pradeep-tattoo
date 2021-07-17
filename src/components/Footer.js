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
    </footer>
}

export default Footer;   