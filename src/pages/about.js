import React from "react"
import "../css/main.css"
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image"
const About = () => {    
 
    return(
  <Layout>
    <section className="about-page">
      <div className="section-center">
        <div>
        <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z" fill="#FFA700"/>
        </svg>
        <h1 className="speciality-title about-title">About me</h1>
        </div>
      <div className = "about-container">

       <StaticImage src = "../images/pradeep-yash.jpg" height = {200} width = {270} className = "about-img" />  
       <p className="about-para">I have over seven years of experience in this industry and
my goal is to give quality output. Experience speaks for
me, working with great artists in the film industry has given
me the confidence and motivation to achieve anything. Themajor movies I have worked on are, Bhajarangi, Gajakesari,
Mr and Mrs Ramachari, Ranavikrama, Uppi2, Jaggu
Daada, Masterpiece, Jaguar, Rajasimha, Ragad, KGF1,
Yuvarathna, KGF2, Kabza, and so on. I specialize in
temporary tattoos and tattoos for kids too! </p>
        
     </div>
  
      </div>
    </section>
    </Layout> 
    )
}
export default About 