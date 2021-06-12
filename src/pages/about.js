import React from "react"
import "../css/main.css"
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image"
const About = () => {    
 
    return(
  <Layout>
    <div>
    <svg width="286" height="286" viewBox="0 0 286 286" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="143" cy="143" r="143" fill="#FFA700"/>
</svg>

   </div>
  <h1 className="speciality-title">About.</h1>
   
 <div style ={{
   marginLeft : "50%"
 }}>
 <StaticImage src = "../images/sanjay-dutt.jpg" height = {450} width = {600} /> 
 </div>
    </Layout> 
    )
}
export default About 