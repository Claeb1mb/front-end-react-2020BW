import React from "react"
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


//Component Imports
import instructorLogin from "./Components/Instructor/InstructorLogin"
import instructorRegistration from "./Components/Instructor/InstructorRegister"
import Nav from "./Components/HomeComponents/Nav";
import Home from "./Components/HomeComponents/Home"

const useStyles = makeStyles(( theme) => ({
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


function App() {
  const classes = useStyles();

  return (
    <div className="App">
     <Router>
       <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/instructor-registration" component={instructorRegistration}/>
        <Route exact path="/instructor-login" component={instructorLogin}/>
        <Route exact path="client-registration" />
        <Route exact path="client-login"/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
