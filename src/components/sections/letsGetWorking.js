import React from "react"
import "./../../css/main.css"
import { StaticImage } from "gatsby-plugin-image"
import letsGetWorkingParagraph from "../../constants/paragraphs"
const letsGetWorking = () => {    
 
    return(
    <header className="lets-get-working">
         <div className="underline"> </div>
         <div className="section-center">
            {/* <article>  
                <StaticImage src="../../images/tattoo-girl.jpg"  height= {600} width={400}/>
            </article> */}
            <article style={{
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                marginTop : "4rem"
            }}>
                  {/* <div className="yellow-ellipse">
                    <svg width="167" height="167" 
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.5 167C129.616 167 167 129.616 167 83.5C167 37.3842 129.616 0 83.5 0C37.3842 0 0 37.3842 0 83.5C0 129.616 37.3842 167 83.5 167Z" fill="#FFA700"/>
                    </svg>
                  </div>  */}
                 <div className="end-title">
                 <h1 className="speciality-title">Let's Get <span style={{
                     color : "#ffa700"
                 }}>Working!</span></h1>
                 {/* <h2 className="speciality-title" style={{marginLeft: "2em"}}>Working!</h2> */}
                </div>  
               <p className="end-content">I am a no, 1 Face and body Fx temporary 
                   tattoo artist too, in Bangalore.
                   I use USA products which the FDA has
                   approved, non toxic tattoo inks to 
                    celebrity, kids and clients.</p>
             <button className="book-now-btn">Book Now</button>
     </article>  
     </div>      
    </header>
    )
}
export default letsGetWorking