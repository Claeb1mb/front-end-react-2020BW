import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 345,
    },
    media: {
      height: 240,
    },
  });

  const cards = [
    {
      
        id:0,
        url: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1025&q=80",
        imageTitle:"React Dark Mode",
        title:" Instruct Anywhere",
        backgroundImage:`url()`,
        description:"Have experience teaching gym classes apply today with our easy sign up options",
                                                                                                              

    },
   {
    id:1,
    url: "https://images.unsplash.com/photo-1590487988357-5233b152a9b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80",
    imageTitle:"React Dark Mode",
    title:" Workout Anytime ",
    backgroundImage:`url(${process.env.PUBLIC_URL + 'images/photo-1489844097929-c8d5b91c456e.jpg'})`,
    description:"Whether from the comfort of your home or at one of our locations located around the globe we've got you covered get active anytime",



        
    },
    {   
      id:2,
        url: "https://images.unsplash.com/photo-1549995546-87cb41aa98a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        imageTitle:"React Dark Mode",
        title:" Drop In Class ",
        image:`url(${process.env.PUBLIC_URL + 'images/photo-1489844097929-c8d5b91c456e.jpg'})`,

        description:"Here at anywhere fitness we strive to give you the option of dropping into one of our many classes tought by our wonderful instructors everyday even weekends",

        
    }
  ]
  

export default function HomeCards() {
    const classes = useStyles();

    
  
    return(
  <Card className={classes.root}>
    {cards.map((card, i) => (
      <CardActionArea key={i}>
        <CardMedia
          className={classes.media}
          image={card.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    ))}
    </Card>
  );
}