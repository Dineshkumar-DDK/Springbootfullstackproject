import React, { useState } from 'react'
import InputElement from '../component/InputElement'
import Button from '../component/Button'
import '../App.css'
import axios from 'axios';
import ButtonLink from '../component/ButtonLink';

function Add() {
  const [thinking,setThinking]=useState([])
  const[title,setTitle]=useState("Enter a title");
  const[quote,setQuote]=useState("Enter a quote");

  const handleAddClick=()=>{
    const thinking={
      "title":title,
      "quote":quote
    }
    axios.post("http://localhost:8080/Quotes",thinking).then((res)=>{setThinking(res.data)})
      setQuote("Enter a title")
      setTitle("Enter your quote")

    
  }
  return (
    <div className='container-fluid fill wrpflx' >
      <div className='row' >
       <div className='col-sm-6 p-3'>
        <div className='card cardsizing'>
          <div className='card-body wrpflx p-4'>
            <p className='card-text text-center display-6'> Add a thought </p>
            <InputElement
            inputType="text"
            inputName="Title"
            inputPlaceHolder={title}
            inputSet={setTitle}
            />
            <InputElement
            inputType="text"
            inputName="quote"
            inputPlaceHolder={quote}
            inputSet={setQuote}
            
            />
            <div className='rwrpflx'>
            <Button  buttonValue="Add your quote" handleSubmit={handleAddClick}/>
            <ButtonLink buttonValue="Back to Home"/>
            </div>
          </div>
        </div>
       </div>


      </div>
    </div>
    
  
  )
}

export default Add