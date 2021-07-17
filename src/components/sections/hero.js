import React, { useEffect } from "react"
import {StaticImage} from "gatsby-plugin-image"
import "./../../css/main.css"
import Aos from "aos"
import "aos/dist/aos.css"
const Hero = () => {  
    useEffect(()=>{
        Aos.init({duration:1000})
    })  
    return(
    <header className="hero">
        <div className="section-center hero-center">
            <article className="hero-info" data-aos="fade-up">
                <div className="underline"> </div>
                    <h1 className="title-class">Pradeep Tattoo Zone</h1>
                   <div style={{ display : "flex"}}> <StaticImage src="../../images/logo-t.png" height={200} width={200} className="logo-desktop"/></div>
                   <div style={{ display : "flex"}}><StaticImage src="../../images/logo-t.png" height={100} width={100}  className="logo-mobile"/></div>
                    <h2 className="title-class" data-aos="fade-up">Celebrity Tatoo Artist</h2>
                    <h4 className="subtitle-class">Temporary and Permanent Tattoos</h4>
            </article>
            <StaticImage src = "../../images/landing-page-girl.png" className="hero-img" /> 
        </div>
    </header>
    )
}
export default Hero
