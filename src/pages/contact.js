import React from "react"
import "../css/main.css"
import Layout from "../components/Layout"
const Contact = () => {    
 
    return(
  <Layout>
<section style = {{ height : "70vh", background : "#000"}}>
 <h1 className= "title-class" style={{ textAlign: "center"}}>Contact</h1>
 <div style = {{ display : "flex", justifyContent : "space-evenly"}}>
   <div>
     <h2 className= "title-class">Studio Address</h2>
     <p>205, Block 5, Skyline City Appt</p>
     <p>Chandralyout, Bengaluru. 560073</p>
     <p>Contact : +(91) 982564322</p>
   </div>
   <div>
   <h2 className= "title-class">Permanent Adress</h2>
     <p>205, Block 5, Skyline City Appt</p>
     <p>Chandralyout, Bengaluru. 560073</p>
     <p>Contact : +(91) 982564322</p>
   </div>
 </div>
 </section>
</Layout>
    )
}
export default Contact