import React from "react"
import "../css/main.css"
import Gallery from "../components/gallery"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SimpleReactLightbox from "simple-react-lightbox"
const Work = () => {    
 
    return(
  <Layout>
  <SimpleReactLightbox>
  <Gallery />
  </SimpleReactLightbox>
<Footer />
    </Layout>
    )
}
export default Work