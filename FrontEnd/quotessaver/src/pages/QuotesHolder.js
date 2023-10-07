import React, { useEffect, useState } from 'react'
import Quotes from './Quotes'
import axios from 'axios';

function QuotesHolder() {
    const[words,setWords]=useState([])
    useEffect(()=>{
       axios.get("http://localhost:8080/Quotes").then(response=>{
        console.log(response.data)
        setWords(response.data)
       }) 
    },[])
    const handleDelete=(id)=>{
      console.log(id);
      axios.delete(`http://localhost:8080/Quotes/${id}`)
      .then(response=>{
        setWords(response.data)
      }
      )
      }
    
  

  return (
    <div className='container-fluid flxwrap bg-dark'>

        {  words.map((details)=>{
          return(
            <Quotes key={details.id}
             title={details.title} 
             quote={details.quote} 
             deleteClick={()=>handleDelete(details.id)}
             quoteId={details.id}
             />
             
            )
})    
            
            
        }
    </div>
  )
}

export default QuotesHolder