import React, { Component } from 'react';
import Wrapper from './components/Wrapper'
import {BrowserRouter as Router} from 'react-router-dom'
const App = (props) => {
  return(
      <Router>
        <Wrapper/>
      </Router>
  );
}

export default App;
