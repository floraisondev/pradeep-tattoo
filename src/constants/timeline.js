import React, {useEffect} from "react"
import {StaticImage} from "gatsby-plugin-image"
import "../css/main.css"
import Aos from "aos"
import {BsFillCircleFill, BsCaretLeft} from "react-icons/bs"
const data = [
  {
    id: 1,
    title : "Working with Sanjay Dutt",
    image: <StaticImage className="timeline-image" src="../images/pradeep-sanjay.jpeg" width = {440} height={500}></StaticImage>,
    content: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`
  },
  {
    id: 2,
    title : "Working with Yash",
    image: <StaticImage  className = "timeline-image" src="../images/pradeep-yash.jpg" width = {450} height={300}></StaticImage>,
    content: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`
  },
  {
    id: 3,
    title : "Working with Puneeth Rajkumar",
    image: <StaticImage  className = "timeline-image" src="../images/pradeep-actor.jpg" width = {450} height={300}></StaticImage>,
    content: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`
  },
]
const timeline =  data.map(link => {
  return (
    <li key={link.id} data-aos= "fade-up" style= {{ marginBottom: "4rem"}}>
      <BsFillCircleFill className="dot"></BsFillCircleFill>
      <BsCaretLeft className="timeline-arrow"></BsCaretLeft>
      <h2 className="timeline-title">{link.title}</h2>
      <div>{link.image}</div>
      <p className="timeline-content">{link.content}</p>
    </li>
  )
})

export default ({ styleClass }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
}) 
  return (
    <ul className="timeline">{timeline}</ul>
  )
}

