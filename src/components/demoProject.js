import React from 'react'
import './demo.css'

// Pages-pictures
import Main_page_img from '../assets/pages-photos/main-page.png'
import About_page_img from '../assets/pages-photos/about-page.png'
import Contact_page_img from '../assets/pages-photos/contact-page.png'

const demoProject = () => {
  return (
    <div className='demo_project'>

      <h3 className='demo_project_head'>Demo Project</h3>
      <p className='demo_project_para'>It's a website which name is codingclassroom where are three pages so you can see the pages </p>
      <div className='project'>

        <div className='box box-one'>
          <img src={Main_page_img} alt='gya  ghumne' />
          <h4>Front Page </h4>

        </div>
        <div className='box box-two'>
          <img src={About_page_img} alt='gya  ghumne' />
          <h4>About Page </h4>

        </div>
        <div className='box box-three'>
          <img src={Contact_page_img} alt='gya  ghumne' />
          <h4>Contact Page </h4>

        </div>



      </div>
      <div className='button'>Visit Demo Site</div>

    </div>
  )
}

export default demoProject
