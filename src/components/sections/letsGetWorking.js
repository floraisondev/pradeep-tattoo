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
            
                 <div className="end-title">
                 <h1 className="speciality-title" data-aos="fade-up">Let's Get <span style={{
                     color : "#ffa700"
                 }}>Working!</span></h1>
                
                </div>  
               <p className="end-content" data-aos="fade-up">I am a no, 1 Face and body Fx temporary 
                   tattoo artist too, in Bangalore.
                   I use USA products which the FDA has
                   approved, non toxic tattoo inks to 
                    celebrity, kids and clients.
                    I am a no, 1 Face and body Fx temporary 
                   tattoo artist too, in Bangalore.
                   I use USA products which the FDA has
                   approved, non toxic tattoo inks to 
                    celebrity, kids and clients.
                    </p>
                    <Link to="/contact/"> <button className="book-now-btn">Book Now</button></Link>   
     </article>  
     </div>      
    </header>
    )
}
export default LetsGetWorking