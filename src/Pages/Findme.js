import React from 'react'

import SocialNavbar from '../components/SocialNavbar'
import NavLinksNavbar from '../components/NavLinksNavbar'
import Footer from '../components/footer'



const Findme = () => {
  return (
    <div>
      <SocialNavbar />
      <NavLinksNavbar />
      <div className='hey'>
        Hey Findme
      </div>
      <Footer />
    </div>
  )
}

export default Findme
