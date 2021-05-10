import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/hero"
import Speciality from "../components/sections/speciality"
import LetsGetWorking from "../components/sections/letsGetWorking"
import "@fontsource/oswald"
import "@fontsource/oswald/700.css"
import "@fontsource/montserrat"

const IndexPage = () => {
  return (
     <Layout>
      <Hero />
      <Speciality />
      <LetsGetWorking />
     </Layout>
  )
}

export default IndexPage
