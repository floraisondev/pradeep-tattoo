import React, {useEffect} from "react"
import {StaticImage} from "gatsby-plugin-image"
import "../css/main.css"
import Aos from "aos"
import {BsFillCircleFill, BsCaretLeft} from "react-icons/bs"
const data = [
  {
    id: 1,
    title : "Working with Celebrities",
    image: <StaticImage className="timeline-image" src="../images/pradeep-actor.jpg" width = {450} height = {300}></StaticImage>,
    content: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`
  },
  {
    id: 2,
    title : "Working with Celebrities",
    image: <StaticImage  className = "timeline-image" src="../images/pradeep-yash.jpg" width = {450} height={300}></StaticImage>,
    content: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`
  },
]
const timeline =  data.map(link => {
  return (
    <li key={link.id}>
      <BsFillCircleFill className="dot"></BsFillCircleFill>
      <BsCaretLeft className="timeline-arrow"></BsCaretLeft>
      <h2 className="timeline-title" data-aos= "fade-up">{link.title}</h2>
      <div data-aos= "fade-up">{link.image}</div>
      <p className="timeline-content" data-aos= "fade-up">{link.content}</p>
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

