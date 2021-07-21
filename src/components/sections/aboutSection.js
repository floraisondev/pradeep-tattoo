import React, {useEffect} from "react"
import "./../../css/main.css"
import {StaticImage} from "gatsby-plugin-image"
import Aos from "aos"
const About = () => {  
    useEffect(()=>{
        Aos.init({duration:1000})
    })  
    return(
    <>  
    <div className="about-page">
    <div className="sanjay-img">
    <StaticImage src="../../images/sanjay-dutt.png" height={497} width={700} /> 
    </div>
    <div className="underline" style=  {{ marginTop : "-3rem"}}> </div> 
    <div className="section-center" style={{ position: "relative"}}> 
        <div>
        <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z" fill="#FFA700"/>
        </svg>
        <h1 className="speciality-title about-title" data-aos= "fade-up">About me</h1>
        </div>
       <div className = "about-container"> 
      <p className="about-para" data-aos= "fade-up">I have over seven years of experience in this industry and
my goal is to give quality output. Experience speaks for
me, working with great artists in the film industry has given
me the confidence and motivation to achieve anything. The major movies I have worked on are Bhajarangi, Gajakesari,
Mr and Mrs Ramachari, Ranavikrama, Uppi2, Jaggu
Daada, Masterpiece, Jaguar, Rajasimha, Ragad, KGF1,
Yuvarathna, KGF2, Kabza, and so on. I specialize in
temporary tattoos and tattoos for kids too! </p>      
     </div>
      </div>
    </div>
    </>
    )
}
export default About 