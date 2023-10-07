import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from '../pages/Home'

function ButtonLink(props) {
  return (
    <div>
        <button  className='btn btn-danger m-2'>
           <NavLink to='/' element={<Home/>}>{props.buttonValue}</NavLink> 
        </button>
    </div>
  )
}

export default ButtonLink