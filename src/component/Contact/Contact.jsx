import React, { useState } from 'react'
import "./Contact.css"
import { Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  let navigate = useNavigate();

  const contactFormHandler = (e)=>{
    e.preventDefault();
    alert("Message Send Successfully")
    navigate("/contact")
  };

  return (
    <div className='contact'>
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className='contactContainerForm' onSubmit={contactFormHandler}>
          <Typography variant='h4'>Contact Me</Typography>
          <input 
          type="text" 
          placeholder='Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input 
          type="email" 
          placeholder='Email' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />

          <textarea 
          placeholder='Message' 
          cols="30" 
          rows="10"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <button variant="contained" type='submit'>
            Send
            </button>
        </form>
      </div>

    </div>
  )
}

export default Contact