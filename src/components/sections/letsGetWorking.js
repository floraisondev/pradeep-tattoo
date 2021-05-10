import React from "react"
import "./../../css/main.css"
import { StaticImage } from "gatsby-plugin-image"
const letsGetWorking = () => {    
    return(
    <header className="speciality">
        <div>
            <article>
                <div className="underline"> </div>
                <div className="section-center">
                <StaticImage src="../../images/tattoo-guy.png" />
                <div className="yellow-ellipse">
                <svg width="167" height="167" 
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M83.5 167C129.616 167 167 129.616 167 83.5C167 37.3842 129.616 0 83.5 0C37.3842 0 0 37.3842 0 83.5C0 129.616 37.3842 167 83.5 167Z" fill="#FFA700"/>
               </svg>
                </div> 
               <div className="speciality-title-container">
               <h2 className="speciality-title">Let's Get</h2>
               <h1 className="speciality-title">Working!</h1>
               
               </div>  
            </div>    
            </article>       
        </div>
    </header>
    )
}
export default letsGetWorking