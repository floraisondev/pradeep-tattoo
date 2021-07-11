import { StaticImage } from "gatsby-plugin-image"
import React, {useEffect, useState} from "react"
import "../css/main.css"
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
const Gallery = () => {
    const [tag , setTag] = useState('all')
    const [filteredImages, setFilteredImages] = useState([])

useEffect(
    () => {
        tag == 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag))
    }, [tag]
)
return (
    <div style = {{
        background : "linear-gradient(239.94deg, #201f1f -12.77%, #000000 102.42%)",
        height : "100vh",
        display : "flex",
        overflowY : "scroll",
        flexDirection : "column"
    }}>
    <div className="tags">
    <TagButton name = "all" handleSetTag = {setTag}/>
    <TagButton name = "temp" handleSetTag = {setTag}/>
    <TagButton name = "perm" handleSetTag = {setTag}/>
    <TagButton name = "celeb" handleSetTag = {setTag}/>
    </div>
    <div>
        
    </div>
   <SRLWrapper> 
    <div className="container">
   {
     filteredImages.map(image => 
     <div key= {image.id} className="image-card">
      <a href = {image.src}> {image.imageName} </a>
         </div>
      ) }
     </div>
     </SRLWrapper>
    </div>
  
)
}

const TagButton = ({name, handleSetTag}) => {
return <button className = "tag" onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</button>
}
export default Gallery