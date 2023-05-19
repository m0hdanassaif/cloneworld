import React from 'react'

// three_things_about_clone_world : Icons
import C_logo from '../assets/clean.png'
import Fh_logo from '../assets/fresh.png'
import Fe_logo from '../assets/free.png'




 
 


 


const Cons = () => {
  return (
    // Boxes started
    <div className='three_things_about_clone_world grid'>

      {/* First box */}
      <div className='box_thing_one'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={C_logo} alt='logo_ran_out' />
          <h4>Clean Code</h4>
        </div>
        <p>Experience the power of meticulously crafted code solutions, accelerating your path to success in no time.</p>
      </div>

      {/* Second Box */}
      <div className='box_thing_two'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fh_logo} alt='logo_ran_out' />
          <h4>Updated Code</h4>
        </div>
        <p>Unleash the potential of cutting-edge code solutions, propelling your journey towards success with lightning speed.</p>
      </div>

      {/* Third Box */}
      <div className='box_thing_three'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fe_logo} alt='logo_ran_out' />
          <h4>Free Code</h4>
        </div>
        <p>Unlock the gateway to limitless possibilities with expertly crafted code solutions, empowering your rapid ascent to triumph.</p>
      </div>

      {/* Fourth Box */}
      <div className='box_thing_three'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fe_logo} alt='logo_ran_out' />
          <h4>Elite Code</h4>
        </div>
        <p>Harness the might of elite-grade code solutions, elevating your trajectory towards unprecedented triumph with unrivaled precision and excellence.
        </p>
      </div>

        {/* Fifth Box */}
        <div className='box_thing_three'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fe_logo} alt='logo_ran_out' />
          <h4>Futuristic Code</h4>
        </div>
        <p> Embark on a visionary coding journey, as our futuristic code solutions propel you towards a new era of innovation and success, at an astonishing pace.
        </p>
      </div>

        {/* Sixth Box */}
        <div className='box_thing_three'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fe_logo} alt='logo_ran_out' />
          <h4>Code Oasis</h4>
        </div>
        <p>Immerse yourself in a sanctuary of code marvels, where our vast repository of brilliant solutions quench your thirst for knowledge and empower your ascent to coding mastery.
        </p>
      </div>

       {/* Seventh Box */}
       <div className='box_thing_three'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fe_logo} alt='logo_ran_out' />
          <h4>Code Alchemy</h4>
        </div>
        <p>Witness the magical transformation of your coding abilities as our alchemists unravel the secrets of code, bestowing upon you the power to turn ideas into digital gold.
        </p>
      </div>

       {/* Eighth Box */}
       <div className='box_thing_three'>
        <div className='makeitcool'>
          <img className='tbout_logo' src={Fe_logo} alt='logo_ran_out' />
          <h4>Code Symphony</h4>
        </div>
        <p>Indulge in a harmonious symphony of elegantly orchestrated code solutions, where each line of programming becomes a note in the masterpiece of your technological prowess.
        </p>
      </div>






    </div>
    // Box eneded 
  )
}

export default Cons
