import { StaticImage } from "gatsby-plugin-image"
import React, {useEffect, useState} from "react"
import "../css/main.css"
import Aos from "aos"
import { SRLWrapper } from "simple-react-lightbox" 
import {Masonry, ResponsiveMasonry} from "react-responsive-masonry"
const images = [
    // {id : '1', imageName : <StaticImage src="./gallery-images/img1.jpg"></StaticImage>, src : "./gallery-images/img1.jpg",  tag : "perm"},
    {id : '2', imageName :  <StaticImage src="./gallery-images/img2.jpg"></StaticImage>, src : "./gallery-images/img2.jpg", tag : "perm"},
    {id : '3', imageName :  <StaticImage src="./gallery-images/img3.jpg"></StaticImage>, src : "./gallery-images/img3.jpg", tag : "perm"},
    {id : '4', imageName :  <StaticImage src="./gallery-images/img4.jpg"></StaticImage>, src : "./gallery-images/img4.jpg", tag : "perm"},
    {id : '5', imageName :  <StaticImage src="./gallery-images/img5.jpg"></StaticImage>, src : "./gallery-images/img5.jpg", tag : "perm"},
    {id : '6', imageName :  <StaticImage src="./gallery-images/img6.jpg"></StaticImage>, src : "./gallery-images/img6.jpg", tag : "perm"},
    {id : '7', imageName :  <StaticImage src="./gallery-images/img7.jpg"></StaticImage>, src : "./gallery-images/img7.jpg", tag : "perm"},
    {id : '8', imageName :  <StaticImage src="./gallery-images/img8.jpg"></StaticImage>, src : "./gallery-images/img8.jpg", tag : "perm"},
    {id : '9', imageName :  <StaticImage src="./gallery-images/img9.jpg"></StaticImage>, src : "./gallery-images/img9.jpg", tag : "perm"},
    {id : '10', imageName :  <StaticImage src="./gallery-images/img10.jpg"></StaticImage>,src : "./gallery-images/img10.jpg", tag : "perm"},
    {id : '11', imageName : <StaticImage src="./gallery-images/img11.jpg"></StaticImage>, src : "./gallery-images/img11.jpg",  tag : "perm"},
    {id : '12', imageName :  <StaticImage src="./gallery-images/img12.jpg"></StaticImage>, src : "./gallery-images/img12.jpg", tag : "perm"},
    {id : '13', imageName :  <StaticImage src="./gallery-images/img13.jpg"></StaticImage>, src : "./gallery-images/img13.jpg", tag : "perm"},
    {id : '14', imageName :  <StaticImage src="./gallery-images/img14.jpg"></StaticImage>, src : "./gallery-images/img14.jpg", tag : "perm"},
    {id : '15', imageName :  <StaticImage src="./gallery-images/img15.jpg"></StaticImage>, src : "./gallery-images/img15.jpg", tag : "perm"},
    {id : '16', imageName :  <StaticImage src="./gallery-images/img16.jpg"></StaticImage>, src : "./gallery-images/img16.jpg", tag : "perm"},
    {id : '17', imageName :  <StaticImage src="./gallery-images/img17.jpg"></StaticImage>, src : "./gallery-images/img17.jpg", tag : "perm"},
    {id : '18', imageName :  <StaticImage src="./gallery-images/img18.jpg"></StaticImage>, src : "./gallery-images/img18.jpg", tag : "perm"},
    {id : '19', imageName :  <StaticImage src="./gallery-images/img19.jpg"></StaticImage>, src : "./gallery-images/img19.jpg", tag : "perm"},
    {id : '20', imageName :  <StaticImage src="./gallery-images/img20.jpeg"></StaticImage>,src : "./gallery-images/img20.jpeg", tag : "perm"},
    {id : '21', imageName : <StaticImage src="./gallery-images/img21.jpg"></StaticImage>, src : "./gallery-images/img21.jpg",  tag : "perm"},
    {id : '22', imageName :  <StaticImage src="./gallery-images/img22.jpg"></StaticImage>, src : "./gallery-images/img22.jpg", tag : "perm"},
    {id : '23', imageName :  <StaticImage src="./gallery-images/img23.jpg"></StaticImage>, src : "./gallery-images/img23.jpg", tag : "perm"},
    {id : '24', imageName :  <StaticImage src="./gallery-images/img24.jpg"></StaticImage>, src : "./gallery-images/img24.jpg", tag : "perm"},
    {id : '25', imageName :  <StaticImage src="./gallery-images/img25.jpg"></StaticImage>, src : "./gallery-images/img25.jpg", tag : "perm"},
    {id : '26', imageName :  <StaticImage src="./gallery-images/img26.jpg"></StaticImage>, src : "./gallery-images/img26.jpg", tag : "perm"},
    {id : '27', imageName :  <StaticImage src="./gallery-images/img27.jpg"></StaticImage>, src : "./gallery-images/img27.jpg", tag : "perm"},
    {id : '28', imageName :  <StaticImage src="./gallery-images/img28.jpg"></StaticImage>, src : "./gallery-images/img28.jpg", tag : "perm"},
    {id : '29', imageName :  <StaticImage src="./gallery-images/img29.jpg"></StaticImage>, src : "./gallery-images/img29.jpg", tag : "perm"},
    {id : '30', imageName :  <StaticImage src="./gallery-images/img30.jpg"></StaticImage>,src : "./gallery-images/img30.jpg", tag : "perm"},
    {id : '31', imageName : <StaticImage src="./gallery-images/img31.jpg"></StaticImage>, src : "./gallery-images/img31.jpg",  tag : "perm"},
    {id : '32', imageName :  <StaticImage src="./gallery-images/img32.jpg"></StaticImage>, src : "./gallery-images/img32.jpg", tag : "perm"},
    {id : '33', imageName :  <StaticImage src="./gallery-images/img33.jpg"></StaticImage>, src : "./gallery-images/img33.jpg", tag : "perm"},
    {id : '34', imageName :  <StaticImage src="./gallery-images/img34.jpg"></StaticImage>, src : "./gallery-images/img34.jpg", tag : "perm"},
    {id : '35', imageName :  <StaticImage src="./gallery-images/img35.jpg"></StaticImage>, src : "./gallery-images/img35.jpg", tag : "perm"},
    {id : '36', imageName :  <StaticImage src="./gallery-images/img36.jpg"></StaticImage>, src : "./gallery-images/img36.jpg", tag : "perm"},
    {id : '37', imageName :  <StaticImage src="./gallery-images/img37.jpg"></StaticImage>, src : "./gallery-images/img37.jpg", tag : "perm"},
    {id : '38', imageName :  <StaticImage src="./gallery-images/img38.jpg"></StaticImage>, src : "./gallery-images/img38.jpg", tag : "perm"},
    {id : '39', imageName :  <StaticImage src="./gallery-images/img39.jpg"></StaticImage>, src : "./gallery-images/img39.jpg", tag : "perm"},
    {id : '40', imageName :  <StaticImage src="./gallery-images/img40.jpg"></StaticImage>,src : "./gallery-images/img40.jpg", tag : "perm"},
    {id : '41', imageName : <StaticImage src="./gallery-images/img41.jpg"></StaticImage>, src : "./gallery-images/img41.jpg",  tag : "perm"},
    {id : '42', imageName :  <StaticImage src="./gallery-images/img42.jpg"></StaticImage>, src : "./gallery-images/img42.jpg", tag : "perm"},
    {id : '43', imageName :  <StaticImage src="./gallery-images/img43.jpg"></StaticImage>, src : "./gallery-images/img43.jpg", tag : "perm"},
    {id : '44', imageName :  <StaticImage src="./gallery-images/img44.jpg"></StaticImage>, src : "./gallery-images/img44.jpg", tag : "perm"},
    {id : '45', imageName :  <StaticImage src="./gallery-images/img45.jpg"></StaticImage>, src : "./gallery-images/img45.jpg", tag : "perm"},
    {id : '46', imageName :  <StaticImage src="./gallery-images/img46.jpg"></StaticImage>, src : "./gallery-images/img46.jpg", tag : "perm"},
    {id : '47', imageName :  <StaticImage src="./gallery-images/img47.jpg"></StaticImage>, src : "./gallery-images/img47.jpg", tag : "perm"},
    {id : '48', imageName :  <StaticImage src="./gallery-images/img48.jpg"></StaticImage>, src : "./gallery-images/img48.jpg", tag : "perm"},
    {id : '49', imageName :  <StaticImage src="./gallery-images/img49.jpg"></StaticImage>, src : "./gallery-images/img49.jpg", tag : "perm"},
    {id : '50', imageName :  <StaticImage src="./gallery-images/img50.jpg"></StaticImage>,src : "./gallery-images/img50.jpg", tag : "perm"},
    {id : '51', imageName : <StaticImage src="./gallery-images/img51.jpg"></StaticImage>, src : "./gallery-images/img51.jpg",  tag : "perm"},
    {id : '52', imageName :  <StaticImage src="./gallery-images/img52.jpg"></StaticImage>, src : "./gallery-images/img52.jpg", tag : "perm"},
    {id : '53', imageName :  <StaticImage src="./gallery-images/img53.jpg"></StaticImage>, src : "./gallery-images/img53.jpg", tag : "perm"},
    {id : '54', imageName :  <StaticImage src="./gallery-images/img54.jpg"></StaticImage>, src : "./gallery-images/img54.jpg", tag : "perm"},
    {id : '55', imageName :  <StaticImage src="./gallery-images/img55.jpg"></StaticImage>, src : "./gallery-images/img55.jpg", tag : "perm"},
    {id : '56', imageName :  <StaticImage src="./gallery-images/img56.jpg"></StaticImage>, src : "./gallery-images/img56.jpg", tag : "perm"},
    {id : '57', imageName :  <StaticImage src="./gallery-images/img57.jpg"></StaticImage>, src : "./gallery-images/img57.jpg", tag : "celeb"},
    {id : '58', imageName :  <StaticImage src="./gallery-images/img58.jpg"></StaticImage>, src : "./gallery-images/img58.jpg", tag : "celeb"},
    {id : '59', imageName :  <StaticImage src="./gallery-images/img59.jpg"></StaticImage>, src : "./gallery-images/img59.jpg", tag : "celeb"},
    {id : '60', imageName :  <StaticImage src="./gallery-images/img60.jpg"></StaticImage>,src : "./gallery-images/img60.jpg", tag : "celeb"},
    {id : '61', imageName : <StaticImage src="./gallery-images/img61.jpg"></StaticImage>, src : "./gallery-images/img61.jpg",  tag : "celeb"},
    {id : '62', imageName :  <StaticImage src="./gallery-images/img62.jpg"></StaticImage>, src : "./gallery-images/img62.jpg", tag : "celeb"},
    {id : '63', imageName :  <StaticImage src="./gallery-images/img63.jpg"></StaticImage>, src : "./gallery-images/img63.jpg", tag : "celeb"},
    {id : '64', imageName :  <StaticImage src="./gallery-images/img64.jpg"></StaticImage>, src : "./gallery-images/img64.jpg", tag : "celeb"},
    {id : '65', imageName :  <StaticImage src="./gallery-images/img65.png"></StaticImage>, src : "./gallery-images/img65.png", tag : "celeb"},
    {id : '66', imageName :  <StaticImage src="./gallery-images/img66.jpg"></StaticImage>, src : "./gallery-images/img66.jpg", tag : "celeb"},
    {id : '67', imageName :  <StaticImage src="./gallery-images/img67.jpg"></StaticImage>, src : "./gallery-images/img67.jpg", tag : "celeb"},
    {id : '68', imageName :  <StaticImage src="./gallery-images/img68.jpg"></StaticImage>, src : "./gallery-images/img68.jpg", tag : "celeb"},
    {id : '69', imageName :  <StaticImage src="./gallery-images/img69.jpg"></StaticImage>, src : "./gallery-images/img69.jpg", tag : "celeb"},
    {id : '70', imageName :  <StaticImage src="./gallery-images/img70.jpg"></StaticImage>,src : "./gallery-images/img70.jpg", tag : "celeb"},
    {id : '71', imageName : <StaticImage src="./gallery-images/img71.jpg"></StaticImage>, src : "./gallery-images/img71.jpg",  tag : "sketch"},
    {id : '72', imageName :  <StaticImage src="./gallery-images/img72.jpg"></StaticImage>, src : "./gallery-images/img72.jpg", tag : "sketch"},
    {id : '73', imageName :  <StaticImage src="./gallery-images/img73.jpg"></StaticImage>, src : "./gallery-images/img73.jpg", tag : "sketch"},
    {id : '74', imageName :  <StaticImage src="./gallery-images/img74.jpg"></StaticImage>, src : "./gallery-images/img74.jpg", tag : "sketch"},
    {id : '75', imageName :  <StaticImage src="./gallery-images/img75.jpg"></StaticImage>, src : "./gallery-images/img75.jpg", tag : "sketch"},
    {id : '76', imageName :  <StaticImage src="./gallery-images/img76.png"></StaticImage>, src : "./gallery-images/img76.png", tag : "sketch"},
    {id : '77', imageName :  <StaticImage src="./gallery-images/img77.png"></StaticImage>, src : "./gallery-images/img77.png", tag : "sketch"},
    {id : '78', imageName :  <StaticImage src="./gallery-images/img78.png"></StaticImage>, src : "./gallery-images/img78.png", tag : "sketch"},
    {id : '79', imageName :  <StaticImage src="./gallery-images/img79.png"></StaticImage>, src : "./gallery-images/img79.png", tag : "sketch"},
    {id : '80', imageName :  <StaticImage src="./gallery-images/img80.png"></StaticImage>,src : "./gallery-images/img80.png", tag : "sketch"},
    {id : '81', imageName : <StaticImage src="./gallery-images/img81.png"></StaticImage>, src : "./gallery-images/img81.png",  tag : "sketch"},
    {id : '82', imageName :  <StaticImage src="./gallery-images/img82.png"></StaticImage>, src : "./gallery-images/img82.png", tag : "sketch"},
    {id : '83', imageName :  <StaticImage src="./gallery-images/img83.png"></StaticImage>, src : "./gallery-images/img83.png", tag : "sketch"},
    {id : '84', imageName :  <StaticImage src="./gallery-images/img84.jpg"></StaticImage>, src : "./gallery-images/img84.jpg", tag : "sketch"},
    {id : '85', imageName :  <StaticImage src="./gallery-images/img85.jpg"></StaticImage>, src : "./gallery-images/img85.jpg", tag : "sketch"},
    {id : '86', imageName :  <StaticImage src="./gallery-images/img86.jpg"></StaticImage>, src : "./gallery-images/img86.jpg", tag : "sketch"},
    {id : '87', imageName :  <StaticImage src="./gallery-images/img87.jpg"></StaticImage>, src : "./gallery-images/img87.jpg", tag : "temp"},
    {id : '88', imageName :  <StaticImage src="./gallery-images/img88.png"></StaticImage>, src : "./gallery-images/img88.png", tag : "temp"},
    {id : '89', imageName :  <StaticImage src="./gallery-images/img89.png"></StaticImage>, src : "./gallery-images/img89.png", tag : "temp"},
    {id : '90', imageName :  <StaticImage src="./gallery-images/img90.JPG"></StaticImage>, src : "./gallery-images/img90.JPG", tag : "temp"},
    {id : '91', imageName :  <StaticImage src="./gallery-images/img91.JPG"></StaticImage>, src : "./gallery-images/img91.JPG", tag : "temp"},
    {id : '92', imageName :  <StaticImage src="./gallery-images/img92.jpg"></StaticImage>, src : "./gallery-images/img92.jpg", tag : "temp"},
    {id : '93', imageName :  <StaticImage src="./gallery-images/img93.png"></StaticImage>, src : "./gallery-images/img93.png", tag : "temp"},
    {id : '94', imageName :  <StaticImage src="./gallery-images/img94.png"></StaticImage>, src : "./gallery-images/img94.png", tag : "temp"},
    {id : '95', imageName :  <StaticImage src="./gallery-images/img95.png"></StaticImage>, src : "./gallery-images/img95.png", tag : "temp"},
    {id : '96', imageName :  <StaticImage src="./gallery-images/img96.png"></StaticImage>, src : "./gallery-images/img96.png", tag : "temp"},
    {id : '97', imageName :  <StaticImage src="./gallery-images/img97.png"></StaticImage>, src : "./gallery-images/img97.png", tag : "temp"},
    {id : '98', imageName :  <StaticImage src="./gallery-images/img98.png"></StaticImage>, src : "./gallery-images/img98.png", tag : "temp"},
    {id : '99', imageName :  <StaticImage src="./gallery-images/img99.JPG"></StaticImage>, src : "./gallery-images/img99.JPG", tag : "temp"},
]

const addTagName = (name) =>{
let label;
    name == "all" ?
    label = "All" :
    name == "temp" ?
    label = "Temporary Tattoos" :
    name == "perm" ?
    label = "Permanent Tattoos" :
    name == "celeb" ? 
    label = "Celebrity Tattoos" :
    label = "Sketches"

    return label;
}
const Gallery = () => {
const [tag , setTag] = useState('all')
const [filteredImages, setFilteredImages] = useState([])
const columnsBreakPoints = { 350: 1, 750: 2, 900: 3 }
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
    <TagButton name = "all" handleSetTag = {setTag} tagActive={ tag === 'all' ? true : false}/>
    <TagButton name = "temp" handleSetTag = {setTag} tagActive={ tag === 'temp' ? true : false}/>
    <TagButton name = "perm" handleSetTag = {setTag} tagActive={ tag === 'perm' ? true : false}/>
    <TagButton name = "celeb" handleSetTag = {setTag} tagActive={ tag === 'celeb' ? true : false}/>
    <TagButton name = "sketch" handleSetTag = {setTag} tagActive={ tag === 'sketch' ? true : false}/>
    </div>
   <div className="dropdown">
     <TagDropdown name = {tag} handleSetTag={setTag}/>
   </div>
   <SRLWrapper> 
     <div className="container" data-aos = "fade-up"> 
    {/* <ResponsiveMasonry columnsCountBreakPoints={columnsBreakPoints}>
    <Masonry columnsCount={4} gutter = {4}> */}
   {
     filteredImages.map(image => 
     <div key= {image.id} className="image-card">
      <a href = {image.src}> <div>{image.imageName}</div> </a>
         </div>
      ) }
    {/* </Masonry>
    </ResponsiveMasonry> */}
      </div> 
     </SRLWrapper>
    </div>
  
)
}

const TagButton = ({name, handleSetTag, tagActive}) => {
return <button className = {`tag ${ tagActive ? 'active' : null}`}  onClick={()=> handleSetTag(name)}>{addTagName(name)}</button>
}

const TagDropdown = ({name, handleSetTag})  => {
    return  ( <select value={name} onChange={(e)=>handleSetTag(e.target.value)} className="tag-dropdown">
    <option value="all" className="drop-option">All</option>
    <option value="temp" className="drop-option">Temporary Tattoos</option>
    <option value="perm"  className="drop-option">Permanent Tattoos</option>
    <option value="celeb"  className="drop-option">Celebrity</option>
    <option value="sketch"  className="drop-option">Sketches</option>
</select>
    )
}
export default Gallery