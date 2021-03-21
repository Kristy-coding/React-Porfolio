
import React from 'react';


import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';

import snapphoto from '../../assets/images/Screen Shot 2021-03-20 at 3.55.18 PM.png'
import madlibsphoto from '../../assets/images/Screen Shot 2021-03-21 at 9.49.08 AM.png'
import runbuddyphoto from '../../assets/images/run-buddy-snap.jpeg'
import holidaycheerphoto from '../../assets/images/screen shot 3.png'
import techblogphoto from '../../assets/images/Screen Shot 2021-03-20 at 9.19.05 AM.png'
import flowerphoto from '../../assets/images/Screen Shot 2021-03-20 at 4.30.13 PM.png'


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
    <div style={{marginLeft:"15%", marginRight: "15%", marginTop: "5%"}}  className={classes.root}>
      <Grid container spacing={1}>
        
       
        
        <Grid item xs={12} sm={6}>
          <img src={holidaycheerphoto} alt="holiday cheer"/> 
        </Grid>
        <Grid item xs={12} sm={6}>
            <img src={madlibsphoto} alt="madlibs"/> 
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={snapphoto} alt="oh snap"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={runbuddyphoto} alt="run buddy"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={flowerphoto} alt="flower"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={techblogphoto} alt="tech blog"/>
        </Grid>

      


      </Grid>
    </div>
  );
}

 

