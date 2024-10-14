import React from 'react'
import "./Projects.css"
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from '@mui/icons-material';

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin=false
})=>{
  return (
    <>
    <a href={url} className='projectCard' target='black'>
      <div>
        <img src={projectImage} alt="project" />
        <Typography variant='h5'>{projectTitle}</Typography>
      </div>

      <div>
        <Typography variant='h4'>About Project</Typography>
        <Typography>{description}</Typography>
        <Typography variant='h6'>Tech Stack: {technologies}</Typography>
      </div>
    </a>

    {isAdmin && (
      <Button style={{color:"rgba(40,40,40,0.7)"}}>
        <Delete/>
      </Button>
    )}
    </>
  )
}
const Projects = () => {
  const projects = [1,2,3];
  return (
    <div className='projects'>
      <Typography variant='h3'>
        Projects <AiOutlineProject/>
        </Typography>

        <div className="projectWrapper">
          {projects.map((projects,index)=>
          <ProjectCard
            url="https://github.com/Anand25rahul"
            projectImage="https://w7.pngwing.com/pngs/408/212/png-transparent-project-management-body-of-knowledge-project-management-professional-project-manager-management-project-miscellaneous-text-logo-thumbnail.png"
            projectTitle="Shopping-Cart"
            description="This is Shopping-Cart App"
            technologies="Html,Css,JavaScript,React.js"
          />
          )}
        </div>
    </div>
  )
}

export default Projects