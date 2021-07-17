import { StaticImage } from "gatsby-plugin-image"
import React, {useEffect, useState} from "react"
import "../css/main.css"
import Aos from "aos"
import { SRLWrapper } from "simple-react-lightbox" 
const images = [
    {id : '1', imageName : <StaticImage src="./gallery-images/img1.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img1.jpg",  tag : "temp"},
    {id : '2', imageName :  <StaticImage src="./gallery-images/img2.jpg"  height = {300} width = {300}></StaticImage>, src : "./gallery-images/img2.jpg", tag : "perm"},
    {id : '3', imageName :  <StaticImage src="./gallery-images/img3.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img3.jpg", tag : "temp"},
    {id : '4', imageName :  <StaticImage src="./gallery-images/img4.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img4.jpg", tag : "temp"},
    {id : '5', imageName :  <StaticImage src="./gallery-images/img5.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img5.jpg", tag : "perm"},
    {id : '6', imageName :  <StaticImage src="./gallery-images/img6.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img6.jpg", tag : "temp"},
    {id : '7', imageName :  <StaticImage src="./gallery-images/img7.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img7.jpg", tag : "temp"},
    {id : '8', imageName :  <StaticImage src="./gallery-images/img8.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img8.jpg", tag : "celeb"},
    {id : '9', imageName :  <StaticImage src="./gallery-images/img9.jpg" height = {300} width = {300}></StaticImage>, src : "./gallery-images/img9.jpg", tag : "temp"},
    {id : '10', imageName :  <StaticImage src="./gallery-images/img10.jpg" height = {300} width = {300}></StaticImage>,src : "./gallery-images/img10.jpg", tag : "celeb"},
]

const addTagName = (name) =>{
let label;
    name == "all" ?
    label = "All" :
    name == "temp" ?
    label = "Temporary Tattoos" :
    label == "perm" ?
    label = "Permanent Tattoos" :
    label == "celeb" ? 
    label = "Celebrity Tattoos" :
    label = "Sketches"

    return label;
}
const Gallery = () => {
    const [tag , setTag] = useState('all')
    const [filteredImages, setFilteredImages] = useState([])

useEffect(
    () => {
        tag == 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag))
        Aos.init({duration:1000})
    }, [tag]
)
return (
    <div style = {{
        background : "linear-gradient(239.94deg, #201f1f -12.77%, #000000 102.42%)",
        height : "auto",
        minHeight:"100vh",
        display : "flex",
        flexDirection : "column"
    }}>
    <div className="tags">
    <TagButton name = "all" handleSetTag = {setTag}/>
    <TagButton name = "temp" handleSetTag = {setTag}/>
    <TagButton name = "perm" handleSetTag = {setTag}/>
    <TagButton name = "celeb" handleSetTag = {setTag}/>
    <TagButton name = "sketch" handleSetTag = {setTag}/>
    </div>
    <div>
        
    </div>
   <SRLWrapper> 
    <div className="container">
   {
     filteredImages.map(image => 
     <div key= {image.id} className="image-card">
      <a href = {image.src}> <div>{image.imageName}</div> </a>
         </div>
      ) }
     </div>
     </SRLWrapper>
    </div>
  
)
}

const TagButton = ({name, handleSetTag}) => {
return <button className = "tag" data-aos="fade-left" onClick={()=> handleSetTag(name)}>{addTagName(name)}</button>
}
export default Gallery