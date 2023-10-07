import React, { useState } from 'react'
import InputElement from '../component/InputElement'
import Button from '../component/Button'
import '../App.css'
import axios from 'axios';
import ButtonLink from '../component/ButtonLink';
import { useParams } from 'react-router-dom';


function Updatev2() {
  const [thinking,setThinking]=useState([]);
  const{quoteId,title,quote}=useParams();
  const[newTitle,setNewTitle]=useState(title);
  const[newQuote,setNewQuote]=useState(quote);

  const handleUpdateClick=()=>{
    console.log(quoteId);
    console.log(title);
    console.log(quote);
    console.log(newTitle);
    console.log(newQuote);
    const thinking={
      "title":newTitle,
      "quote":newQuote
    }
    axios.put(`http://localhost:8080/Quotes/${quoteId}`,thinking).then((res)=>{setThinking(res.data)})
      setNewQuote(newQuote)
      setNewTitle(newTitle)
    }
  return (
    <div className='container-fluid fill wrpflx' >
      <div className='row' >
       <div className='col-sm-6 p-3'>
        <div className='card cardsizing'>
          <div className='card-body wrpflx p-4'>
            <p className='card-text text-center display-6'> Update a thought </p>
            <InputElement
            inputType="text"
            inputName="Title"
            inputPlaceHolder={newTitle}
            inputSet={setNewTitle}
            />
            <InputElement
            inputType="text"
            inputName="quote"
            inputPlaceHolder={newQuote}
            inputSet={setNewQuote}
            
            />
            <div className='rwrpflx'>
            <Button  buttonValue="Update" handleSubmit={handleUpdateClick}/>
            <ButtonLink buttonValue="Back to Home"/>
            </div>
          </div>
        </div>
       </div>


      </div>
    </div>
    
  
  )
}


export default Updatev2;