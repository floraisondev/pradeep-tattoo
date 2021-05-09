import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/hero"
import Speciality from "../components/sections/speciality"
import "@fontsource/oswald"
import "@fontsource/oswald/700.css"
import "@fontsource/montserrat"

const IndexPage = () => {
  return (

     <Layout>
      <Hero />
      <Speciality />
     </Layout>
 
  )
}

export default IndexPage
