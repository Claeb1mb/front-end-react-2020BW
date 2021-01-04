import React, { Component } from "react"
import {Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => {
            // If token is presented return component
            if (localStorage.getItem("token")) {
                return<Component {...props}/>;
                // otherwise redirect to login form 
            } else {
                console.log("redirecting");
                return <Redirect to="/" />
            }
        }}
        />
    )
}

export default PrivateRoute;