import React,{useState} from 'react'

const Nav = () => {

    const [estado,setEstado] = useState(true)
    var [contador,setContador] = useState(0)
    

  return (
    <div>
       
        <button onClick={() =>setEstado(!estado)}>Cambiar
        </button>
        <h2>Hola soy un estado: {estado ? "Comun" : "setState" }</h2>

        <br/>
        
        <h2>{contador}</h2>
        <button onClick={()=>setContador(contador +1 )}>Sumar</button>
        <button onClick={()=>setContador(contador + 2 )}>Sumar de a 2</button>
    </div>
  )
}

export default Nav