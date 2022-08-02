import React from 'react';
import Profile from '../Assets/Profile.jpeg'
import Linkedin from '../Assets/linkedin.svg'
import Gmail from '../Assets/gmail.png'

import '../Css/Home.css'


const Home = () => {
  return (
    <div id='Home' className='Home-container'>

      <div>
        <div   className='home'>
          <h2 data-aos="fade-up" className='Name'>Marcelo G. Oviedo</h2>
          <br></br>
          <p className='Description'> Capacitaciónes, asesoramiento y peritajes.
          </p>

        </div>
        <div className='Img'>
          <img src={Profile} alt='profile' className='img-profile'></img>
        </div>
      </div>

      <div className='links-icon'>
        <a href='https://www.linkedin.com/in/nicoboviedo/' className='a-icon'>
          <img src={Linkedin} alt='linkedin' className='img-linkedin'></img>
        </a>
        <a href='https://www.linkedin.com/in/nicoboviedo/' className='a-icon'>
          <img src={Gmail} alt='gmail' className='img-gmail'></img>
        </a>
      </div>


    </div>
  )

}

export default Home