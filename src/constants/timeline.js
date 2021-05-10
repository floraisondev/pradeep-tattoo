import React from "react"
import {StaticImage} from "gatsby-plugin-image"
import "../css/main.css"
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
const timeline = data.map(link => {
  return (
    <li key={link.id}>
      <BsFillCircleFill className="dot"></BsFillCircleFill>
      <BsCaretLeft className="timeline-arrow"></BsCaretLeft>
      <h2 className="timeline-title">{link.title}</h2>
      {link.image}
      <p className="timeline-content">{link.content}</p>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className="timeline">{timeline}</ul>
  )
}

