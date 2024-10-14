import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className='footer'>
    <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>
            Hey, my name is Rahul Anand. I am a Java Full-Stack Developer
        </Typography>

        <Link to="/contact" className='footerContactbtn'>
        <Typography>Contact Us</Typography>
        </Link>
    </div>
    <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href='https://github.com/Anand25rahul' target='black'>
        <BsGithub/>
        </a>

        <a href='https://www.instagram.com/_its__anand_/' target='black'>
        <BsInstagram/>
        </a>

        <a href='https://www.linkedin.com/in/rahul-anand-22a546218/' target='black'>
        <BsLinkedin/>
        </a>

    </div>
  </div>
  )
}

export default Footer