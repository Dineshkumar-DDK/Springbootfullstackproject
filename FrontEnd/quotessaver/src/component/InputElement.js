import React from 'react'

function InputElement(props) {
  return (
    <div>
        <input className='m-2'
        type={props.inputTypes}
        name={props.inputName}
        value={props.inputPlaceHolder}
        onChange={(event)=>{props.inputSet(event.target.value)}}
        />
    </div>
  )
}

export default InputElement