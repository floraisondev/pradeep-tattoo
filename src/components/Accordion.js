import React, {useState} from "react"
import "../css/main.css"
import {questions}  from "../constants/questions"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
    if(selected === i){
        return setSelected(null)
    }
    setSelected(i)
    }
 return(
    <div className="accordion">
         {questions.map((item, index) => {
           return(
             <div className="acc-item" onClick={() => toggle(index)}>
                 <div className="acc-title">
                 {item.question}
           <span>{selected === index ? <FiMinusCircle className="acc-icon"/> : <FiPlusCircle  className="acc-icon"/>}</span>
                 </div>
                 <div className={selected === index ? "acc-content show" : "acc-content"}>
                   {item.answer}
                 </div>
             </div>
          ) })}
     </div>
 )

}

export default  Accordion 