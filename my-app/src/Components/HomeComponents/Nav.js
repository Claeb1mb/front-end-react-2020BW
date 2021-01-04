import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));

  const sections = [
    { title: 'Home', href: '/' },
    { title: 'Instructor Login', href: '/instructor-login' },
    { title: 'New Instructor', href:'/instructor-registration'},
    { title: 'Already A Member', href: 'client-login' },
    { title: 'Try Us For Free', href: 'client-registration' },
  ];

export default function Nav() {
    const classes = useStyles();
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log("nav link click")
      }

    return(
        <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
              Anywhere Fitness
          </Typography>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Button 
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.href}
              className={classes.toolbarLink}
            >
              {section.title}
            </Button>
          ))}
        </Toolbar>
      </React.Fragment>
    );
  }
  
  
