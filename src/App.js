
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {userContext} from "./context";

import './style.css';

import {Lesson1, Lesson2, Color} from './components';

export default function App(){

  const [value, setValue]= useState(null);
 

  return(
    <Router>

        <div className= "nav">

          <div className= "nav"><Link 
          to="/color">Set Color</Link></div>
          <div className= "nav"><Link to="/lesson1">Lesson1</Link></div>
          <div className= "nav"><Link to="/lesson2">Lesson2</Link></div>
          
        </div>
        
        <br/>
        <br/>
        
        <userContext.Provider value={{value, setValue}}>
        <Switch>
            
            <Route path="/color">
              <Color/>
            </Route>
            <Route path="/lesson1">
              <Lesson1/>
            </Route>
            <Route path="/lesson2">
              <Lesson2/>
            </Route>
            
        </Switch>
        </userContext.Provider>
        
      </Router>
    
  )
}