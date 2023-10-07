import React from 'react'

function Button(props) {
  return (
       
            <button className='btn btn-primary m-2' onClick={props.handleSubmit} >
                {props.buttonValue}
            </button>
       
   
  )
}

export default Button