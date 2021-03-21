import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import snapphoto from '../../assets/images/Screen Shot 2021-03-20 at 3.55.18 PM.png'
import madlibsphoto from '../../assets/images/Screen Shot 2021-03-21 at 9.49.08 AM.png'
import runbuddyphoto from '../../assets/images/run-buddy-snap.jpeg'
import holidaycheerphoto from '../../assets/images/screen shot 3.png'
import techblogphoto from '../../assets/images/Screen Shot 2021-03-20 at 9.19.05 AM.png'
import flowerphoto from '../../assets/images/Screen Shot 2021-03-20 at 4.30.13 PM.png'

const Project = () => {

  //const [currentPhoto, setCurrentPhoto] = useState();

  

  const [projects] = useState([
    {
      name: 'Holiday Cheer',
      src: {holidaycheerphoto},
      
    },
    {
        name: 'Mad Libs',
        src: {madlibsphoto},
        
      },
      {
        name:'Oh Snap',
        src:  {snapphoto},
        
      },
      {
        name: 'Run Buddy',
        src: {runbuddyphoto},
        
      },
      {
        name: 'Flower',
        src: {flowerphoto},
        
      },
      {
        name: 'Tech Blog',
        src: {techblogphoto},
        
      },
  ]);

  

  




  return (
    
    <>
            {projects.map(() => (
                <Grid item xs={12} sm={6}>
                <img
                    src={projects.src}
                    alt={projects.name}
                    // onmouse over or hover should turn image opace  and display github icon and title of project with link
                    //onClick={() => ()}
                    // on Click on github link should take you to github
                    // onClick on title should take you  to link of deployed app 
                    key={projects.name}
                />
                </Grid>
            ))}
    </>
    
    
  );
};

export default Project;