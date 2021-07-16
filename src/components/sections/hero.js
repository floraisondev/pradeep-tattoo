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
            <article className="hero-info">
                <div className="underline"> </div>
                    <h1 className="title-class" data-aos="fade-up">Pradeep Tattoo Zone</h1>
                    <StaticImage src="../../images/logo-t.png" height={200} width={200} />
                    <h2 className="title-class" data-aos="fade-up">Celebrity Tatoo Artist</h2>
                    <h4 className="subtitle-class" data-aos="fade-up">Temporary and Permanent Tattoos</h4>
            </article>
            <StaticImage src = "../../images/landing-page-girl.png" className="hero-img" /> 
        </div>
    </header>
    )
}
export default Hero
