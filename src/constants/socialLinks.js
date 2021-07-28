import React, {useEffect} from "react"
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutubeSquare,
  FaYoutube
} from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import Aos from "aos"
const data = [
  {
    id: 1,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: `https://instagram.com/pradeep_tattoo_studio?utm_medium=copy_link`,
  },
  {
    id: 2,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/channel/UCgsZfdO_4YICp84uCA7FviA",
  },
  {
    id: 3,
    icon: <FaWhatsapp className="social-icon"></FaWhatsapp>,
    url: "https://api.whatsapp.com/send?phone=919740611047",
  },
  {
    id: 4,
    icon: <MdEmail className="social-icon"></MdEmail>,
    url: "mailto:pradeeptattoostudio@gmail.com",
  },
  // {
  //   id: 5,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: "https://www.twitter.com",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
})
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`} data-aos="zoom-in-up">{links}</ul>
  )
}