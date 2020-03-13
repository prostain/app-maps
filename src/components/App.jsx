import React, { useState } from 'react';
import HomePage from './HomePage';
import MapPage from './MapPage';
import Button from '@material-ui/core/Button';
import {Link, BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


const App = () => {

  return (
    <div className='App'>
        <Router>
       <Link to="/home">Home</Link>
       <Link to="/map">Map</Link>
       <Switch>
          <Route path="/home">
              <HomePage></HomePage>
              </Route>
          <Route path="/map"><MapPage ></MapPage></Route>
          <Route path="/"><Redirect to="/home"></Redirect></Route>
        </Switch>
      </Router>

      </div>
  );
};

export default App;
