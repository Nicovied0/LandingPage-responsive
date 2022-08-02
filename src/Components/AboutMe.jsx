import React from 'react';
import Dowload from '../Assets/descargar.png'

const AboutMe = () => {
  return (
    <div id='AboutMe'>
      <div>
        <p>Me especializo en la investigación de incendios, también me desempeño en el ámbito de la capacitación y asesoramiento en aspectos relacionados con la prevención y extinción de incendios, prevención de accidentes, rescate, liderazgo y logística.</p>

      </div>

        <div className='Dowload-cv'>
          <img src={Dowload} alt="dow" className='Img-dow'/>
        <button className='Btn-dow'>
          Descargar CV
        </button>
        </div>
     
    </div>
  )
}

export default AboutMe