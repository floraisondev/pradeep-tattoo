import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import "./../../css/main.css"
import Paragraph from "../../constants/paragraphs"
const Speciality = () => {    
    return(
    <header className="speciality">
        <div>
            <article>
                <div className="underline"> </div>
                <div className="section-center">
                <div className="yellow-ellipse">
                <svg width="167" height="167" 
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M83.5 167C129.616 167 167 129.616 167 83.5C167 37.3842 129.616 0 83.5 0C37.3842 0 0 37.3842 0 83.5C0 129.616 37.3842 167 83.5 167Z" fill="#FFA700"/>
               </svg>
                </div> 
               <div className="speciality-title-container">
               <h2 className="speciality-title">My</h2>
               <h1 className="speciality-title">Speciality</h1>
               </div>  
            </div>    
            </article>
            <article className="speciality-container">
                <div className="speciality box"></div>
                <div className="speciality box data"><p>
                It was great to work with the legend himself, Sanjay Dutt sir, for the movie KGF with many big showbiz sensations!The track record has been great so far.
                    </p></div>
            </article>
        

          
        </div>
    </header>
    )
}
export default Speciality
