import React from "react"
import "../css/main.css"
import Layout from "../components/Layout"
import Accordion from "../components/Accordion"


const Contact = () => {    
    return(
  <Layout>
<section style = {{background : "#000", height: "73vh", overflowY : "scroll"}} className="contact-page">
<Accordion />
 <div className="address">
   <div className="mrb25">
     <h4 className= "title-class">Studio Address</h4>
     <p>205, Block 5, Skyline City Appt,<br/> Chandralyout
      Bengaluru. 560073<br/>
      Contact : +(91) 982564322</p>
   </div>
   <div className="mrb25">
   <h4 className= "title-class">Permanent Adress</h4>
     <p>205, Block 5, Skyline City Appt<br/>
     Chandralyout, Bengaluru. 560073<br/>
     Contact : +(91) 982564322</p>
   </div>
 </div>
 </section>
</Layout>
    )
}
export default Contact