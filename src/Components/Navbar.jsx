import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#Home">Inicio</a>
          <a onClick={handleClick} href="#AboutMe">Sobre mí</a>
          <a onClick={handleClick} href="#CV">CV</a>
          <a onClick={handleClick} href="#Contact">Contacto</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  position: static;
  top: 0px;
  padding: .4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(min-width: 768px){
      position: sticky;
      padding: 1rem;
      background: #141313cf;
      backdrop-filter: blur(1.5rem);
    }
  
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    a:hover{  
      width: 1rem;
      padding:  10px 0;
      border-radius: 10%;
      background-color: #ffffff2d;
    }
    
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.3rem;
        color: white;
        display: inline;
        margin: 0 1rem;
      }
      display: block;
    }
    
  }
  .links.active{
    width: 100%;
    height:100%;
    background: #2f2f2f;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin: 2.5rem;
      color: white;
      padding:1rem
    }
    a:hover{
      background-color:#1f1f1f;
      border-radius:3rem;
     
    }
  }
  
  
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
   
  }
  
`


const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
