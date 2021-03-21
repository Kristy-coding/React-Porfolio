
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import Project from '../Project';
import snapphoto from '../../assets/images/Screen Shot 2021-03-20 at 3.55.18 PM.png'
import madlibsphoto from '../../assets/images/Screen Shot 2021-03-21 at 9.49.08 AM.png'
import runbuddyphoto from '../../assets/images/run-buddy-snap.jpeg'
import holidaycheerphoto from '../../assets/images/screen shot 3.png'
import techblogphoto from '../../assets/images/Screen Shot 2021-03-20 at 9.19.05 AM.png'
import flowerphoto from '../../assets/images/Screen Shot 2021-03-20 at 4.30.13 PM.png'


const projects = [
  {
    name: 'Holiday Cheer App',
    src: holidaycheerphoto,
    deploy: 'https://jyc5331.github.io/holiday-cheer/',
    github: 'https://github.com/jyc5331/holiday-cheer'
    
  },
  {
      name: 'Mad Libs App',
      src: madlibsphoto,
      deploy: 'https://desolate-beyond-80538.herokuapp.com/',
      github: 'https://github.com/Kristy-coding/Mad-Libs'
      
    },
    {
      name:'Oh Snap Webpage',
      src:  snapphoto,
      deploy: 'https://kristy-coding.github.io/photo-port/',
      github: 'https://github.com/Kristy-coding/photo-port'
      
    },
    {
      name: 'Run Buddy Webpage',
      src: runbuddyphoto,
      deploy: 'https://kristy-coding.github.io/run-buddy/',
      github: 'https://github.com/Kristy-coding/run-buddy'
      
    },
    {
      name: 'Project in the Works!',
      src: flowerphoto,
      
    },
    {
      name: 'Tech Blog',
      src: techblogphoto,
      deploy: 'https://nameless-fjord-39606.herokuapp.com/signup',
      github:'https://github.com/Kristy-coding/MVC-Challenge-Tech-Blog'
      
    },
]

console.log(projects)


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Portfolio() {


  const classes = useStyles();

  return (
    <div  id= "projects" style={{marginLeft:"15%", marginRight: "15%", marginTop: "5%"}}  className={classes.root}>
      <Grid container spacing={1}>
        {projects.map((project)=> (

              <Project 
                src= {project.src} 
                name= {project.name}  
                deploy ={project.deploy}
                github = {project.github} 
                key={project.src}
              />
        ))}
       
      </Grid>
    </div>
  );
}

 

