import React from 'react'
import img1 from '../assets/images/Img1.jpg'
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {  NavLink } from 'react-router-dom'
import Updatev2 from './Updatev2'
function Quotes(props) {
  return (
    <div className='m-2 cardsizing'>
      <div className='card'>
        <img src={img1} className='card-img-top' alt='bgimg'/>
          <div className='card-img-overlay p-2 cardwrp'>
            <h4 className='card-title m-0 p-0'>{props.title}</h4>
            <div className='card-body'>
              <blockquote className='blockquote  mt-0'>
                  {props.quote}
                  <cite className='mt-1 blockquote-footer'>&copy;Ajay</cite>
              </blockquote >
              <div className='flxwrap'>
                <button className='btn btn-outline-dark btn-sm rounded-pill p-2'>
                <NavLink style={{color:"white"}} to={`/Updatev2/${props.quoteId}/${props.title}/${props.quote}`} component={Updatev2}><FaEdit/></NavLink>
                </button>
                <button className='btn btn-outline-light btn-sm rounded-pill p-2'
                onClick={props.deleteClick }>
                  <RiDeleteBin5Fill/>
                </button>
              </div>
              
            </div>
           
          </div>
          
      </div>
      {/* <div className='d-grid mt-2 justify-center'> 
                <button className='btn btn-success btn-block' onClick={()=>{setToggleForm(!toggleForm)}}>Update</button>
                    {toggleForm && 
                      <Update quoId={props.quoteId}/>
                    }
      </div> */}
    </div>
    
  )
}

export default Quotes