import React from 'react'
import TopBanner from "../components/TopBanner"
import AboutUs from '../components/AboutUs'
import OurProducts from '../components/OurProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <React.Fragment>
        <TopBanner/>
        <AboutUs />
        <OurProducts />
        <Footer />
    </React.Fragment>
  )
}

export default Home