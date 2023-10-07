import React, { useState } from 'react'
import InputElement from '../component/InputElement'
import ButtonLink from '../component/ButtonLink';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Update({quoId,tf}) {
  const handleUpdateClick=(quotId)=>{
      const thinking={
        "title":title,
        "quote":quote
      }
      axios.put(`http://locahost:8080/Book/${quoId}`,thinking)
      .then((res)=>{
        setThinking(res.data)
      })
      
  }
  const [thinking,setThinking]=useState([])
  const[title,setTitle]=useState("Enter a title");
  const[quote,setQuote]=useState("Enter a quote");
  return (
     
        <div className='card'>
          <div className='card-body '>
            <div className='row'>
              <div className='col-sm-3'>
                <InputElement
                inputType="text"
                inputName="Title"
                inputPlaceHolder={title}
                inputSet={setTitle}
                />
              </div>
              <div className='col-sm-9'>
                <InputElement
                  inputType="text"
                  inputName="quote"
                  inputPlaceHolder={quote}
                  inputSet={setQuote}
                />
              </div>
            </div>
            <div className='row'>
              <div classsName='col justify-center'>
                <Button buttonValue={'Add your quote'} handleSubmit={handleUpdateClick}/>
              </div>
                
            </div>
            
            
          
       </div>


      </div>
    
  )
}

export default Update