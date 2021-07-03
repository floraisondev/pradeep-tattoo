import React, {useEffect, useState} from "react"
import "../css/main.css"

const images = []
const Gallery = () => {
    const [tag , setTag] = useState('all')
    const [filteredImages, setFilteredImages] = useState([])

useEffect(
    () => {
        tag == 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag == tag))
    }, [tag]
)
return (
    <div>
   {
       filteredImages.map(image =>
       <div>hi</div>)
   }
    </div>
)
}

export default Gallery