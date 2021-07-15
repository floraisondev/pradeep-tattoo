import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/hero"
import Speciality from "../components/sections/speciality"
import LetsGetWorking from "../components/sections/letsGetWorking"
import AboutSection from "../components/sections/aboutSection"
import "@fontsource/oswald"
import "@fontsource/oswald/700.css"
import "@fontsource/montserrat"
import About from "./about"

const IndexPage = () => {
  return (
     <Layout>
      <Hero />
      <Speciality />
      <AboutSection />
      <LetsGetWorking />
     </Layout>
  )
}

export default IndexPage
