import React, {useEffect} from "react"
import "../css/main.css"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"
import Footer from "../components/Footer"
import Aos from "aos"


const Contact = () => {    
  useEffect(()=>{
    Aos.init({duration:1000})
}) 
    return(
      <>
  <Layout>
<section style = {{background : "#000", height: "auto", minHeight: "75vh"}} className="contact-page">
<Accordion />
 <div className="address">
   <div className="mrb25" data-aos= "fade-up">
     <h4 className= "title-class">Studio Address</h4>
     <p>  #8/14A, 1st Floor, 2nd Main, 2nd Stage,<br/>
      Attiguppe, Vijayanagar,<br/>
      Bangalore 560040.<br/>
      Land Mark: Metro pillar Number 356</p>
   </div>
   <div className="mrb25" data-aos= "fade-up">
   <h4 className= "title-class">Personal Contact</h4>
     <p>Phone Number: +91 7348879846<br/>
    Whatsapp Number : +91 9740611047<br/>
    Email : pradeeptattoozone46@gmail.com</p>
   </div>
 </div>
 </section>
 <Footer />
</Layout>

</>
    )
}
export default Contact