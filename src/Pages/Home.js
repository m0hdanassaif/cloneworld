import React from 'react'

import SocialNavbar from '../components/SocialNavbar'
import NavLinksNavbar from '../components/NavLinksNavbar'
import Main from '../components/Main1'
import Footer from '../components/footer';
// import DemoProject from '../components/demoProject'
import Cons from '../components/Cons'
// import Learn from '../components/Learn'
// import Missions from '../components/Missions'

const Home = () => {
    return (
        <div>
            <SocialNavbar />
            <NavLinksNavbar />
            <Main />
            <Cons/>
        
            {/* <Learn/> */}
            {/* <DemoProject /> */}
            {/* <Missions/> */}
            {/* <Footer /> */}
        </div>
    )
}

export default Home
