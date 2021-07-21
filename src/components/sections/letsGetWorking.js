import React, {useEffect}  from "react"
import "./../../css/main.css"
import { Link } from "gatsby";
import Aos from "aos"
const LetsGetWorking = () => {    
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    return(
    <header className="lets-get-working">
         <div className="underline"> </div>
         <div className="section-center" data-aos="fade-up">
            {/* <article>  
                <StaticImage src="../../images/tattoo-girl.jpg"  height= {600} width={400}/>
            </article> */}
            <article style={{
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                marginTop : "4rem"
            }}>
            
                 <div className="end-title">
                 <h1 className="speciality-title lets-responsive">Let's Get <span style={{
                     color : "#ffa700"
                 }}>Working!</span></h1>
                
                </div>  
               <p className="end-content">I am a no 1 Face and body FX temporary 
                   tattoo artist in Bangalore.
                   I use USA products with FDA 
                   approved non toxic tattoo inks for all my clients.
                   Book now to get the tattoo you've always wanted !
                   You will love the results !
                    </p>
                    <Link to="/contact/"> <button className="book-now-btn">Book Now</button></Link>   
     </article>  
     </div>      
    </header>
    )
}
export default LetsGetWorking