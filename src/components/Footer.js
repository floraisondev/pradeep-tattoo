import React from "react"

const Footer = () => {
    return <footer className="footer">
        <div style={{ color : "#fff"}}>
            <p>Social links</p>
            <h4>copyright&copy;{new Date().getFullYear()}</h4>
            <span>Pradeep Something</span> all rights reserved
        </div>
    </footer>
}

export default Footer;