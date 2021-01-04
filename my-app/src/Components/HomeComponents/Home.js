import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";
import HomeCards from "./HomeCards"
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      main: {
        minHeight: "60vh",
        backgroundImage:`url(${process.env.PUBLIC_URL + '/photo-1536922246289-88c42f957773.webp'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center-top",
  
      },
    fitBanner: {
  
    }
  }));
  
  

const Home = () => {
    const classes = useStyles();

    return(
    <div>  
    <Grid position="relative" className={classes.main} item md={12} />
    <Grid item xs={12}>
    <Paper elevation={0}>
            <Typography variant="h2">
            Get Fit Today
            </Typography>
        </Paper>
        </Grid>
    <Grid  item xs={3} className={classes.root} spacing={4}>
    <HomeCards/>
    </Grid>

    </div>)
}

export default Home