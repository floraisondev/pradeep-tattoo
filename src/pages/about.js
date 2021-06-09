import React from "react"
import "../css/main.css"
import Layout from "../components/Layout"
const letsGetWorking = () => {    
 
    return(
  <Layout>
    <header className="lets-get-working">
         <div className="underline"> </div>
         <div className="section-center lets-get-working-center">
            <article>  
                {/* <StaticImage src="../../images/tattoo-girl.jpg"  height= {600} width={400}/> */}
            </article>
            <article className="lets-get-working-text">
                  <div className="yellow-ellipse">
                    <svg width="167" height="167" 
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.5 167C129.616 167 167 129.616 167 83.5C167 37.3842 129.616 0 83.5 0C37.3842 0 0 37.3842 0 83.5C0 129.616 37.3842 167 83.5 167Z" fill="#FFA700"/>
                    </svg>
                  </div> 
                 <div>
                 <h1 className="speciality-title">Let's Get</h1>
                 <h4 className="speciality-title">Working!</h4>
                </div>  
               <p className="timeline-content">I am a no, 1 Face and body Fx temporary 
                   tattoo artist too, in Bangalore.
                   I use USA products which the FDA has
                   approved, non toxic tattoo inks to 
                    celebrity, kids and clients.</p>
             <button className="book-now-btn">Book Now!</button>
     </article> 
     </div>      
    </header>
    </Layout>
    )
}
export default letsGetWorking