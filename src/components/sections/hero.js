import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import "./../../css/main.css"

const Hero = () => {    
    return(
    <header className="hero">
        <div className="section-center hero-center">
            <article className="hero-info">
                <div className="underline"> </div>
                    <h1 className="title-class">Pradeep Tattoo Zone</h1>
                    <h2 className="title-class">Celebrity Tatoo Artist</h2>
                    <h4 className="subtitle-class">Temporary and Permanent Tattoos</h4>
            </article>
            <StaticImage src = "../../images/landing-page-girl.png" className="hero-img" /> 
        </div>
    </header>
    )
}
export default Hero
