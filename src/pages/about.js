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
       <p className="about-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </p>
        
     </div>
  
      </div>
    </section>
    </Layout> 
    )
}
export default About 