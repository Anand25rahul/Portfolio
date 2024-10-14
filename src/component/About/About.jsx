import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'
import Anand from "../../Images/anand.jpg"


const About = () => {
  return (
    <div className='about'>
      <div className="aboutContainer">
        <Typography>To obtain a challenging role as a software developer in a reputable
        organization where I can utilize my technical skills and knowledge to
        contribute to the development of innovative software solutions.
       </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={Anand} alt="Rahul" className='aboutAvatar' />
          <Typography variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}>
              Rahul Anand
              </Typography>
              <Typography variant='h4'>
            Java Full-Stack Developer
            </Typography>
        </div>

        <div>
          <Typography
          style={{
            wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
          }}>
            I am Rahul Anand a B.Tech Graduate in CSE
            branch from JNCT Bhopal with a CGPA of 7.93
            passed out in 2023. I am technical good working
            in plateform like Core Java, HTML, CSS, Javascript,
            React.Js, SQL, JDBC, Hibernate.

             </Typography>

        </div>

      </div>
    </div>
  )
}


export default About