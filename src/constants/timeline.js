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
    content: `Working with Sanjay Dutt Sir was one of the best
    moments of my career. It was for the movie KGF, and
    my work will be put up in the next chapter of the film. I
    am proud to share my experience with one of the
    greatest artists of the film industry.
    `
  },
  {
    id: 2,
    title : "Working with ‘Rocking Star’ Yash ",
    image: <StaticImage  className = "timeline-image" src="../images/pradeep-yash.jpg" width = {450} height={300}></StaticImage>,
    content: `Working with Rocking Star Yash takes me back in
    time. I have worked with that amazing actor for many
    films, right from the movie ‘Gajakesari’, to
    ‘Masterpiece’, to ‘Mr and Mrs Ramahcari’, and the
    famed movie KGF. It has been a blessing 
    to work with such great people in the industry.`
  },
  {
    id: 3,
    title : "Working with Appu Sir",
    image: <StaticImage  className = "timeline-image" src="../images/pradeep-actor.jpg" width = {450} height={300}></StaticImage>,
    content: `Working with Puneeth Rajkumar Sir has been an
    honour. As being one of the greatest human beings in
    the industry, I am always fortunate to have worked with
    him. ‘Yuvarathna’ was one of the movies I worked on
    with him.`
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

