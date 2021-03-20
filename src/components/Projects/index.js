// import React from 'react';

// function Projects () {
//     return (
//         <div>Projects section </div>
        
//     );
// }

// export default Projects;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import snapphoto from '../../assets/images/Screen Shot 2021-03-20 at 3.55.18 PM.png'
import madlibsphoto from '../../assets/images/MadLibsplay.png'
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

export default function Projects() {
  const classes = useStyles();

  return (
    <div style={{margin:"5%"}}  className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item xs={12} sm={6} md={5}>
          <Paper className={classes.paper}>
          <img src={holidaycheerphoto} alt="holiday cheer"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Paper className={classes.paper}>
              <img src={madlibsphoto} alt="madlibs"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}>
          <img src={snapphoto} alt="oh snap"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper className={classes.paper}><img src={runbuddyphoto} alt="run buddy"/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Paper className={classes.paper}>
          <img src={flowerphoto} alt="flower"/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Paper className={classes.paper}>
          <img src={techblogphoto} alt="tech blog"/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

 

