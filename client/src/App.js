import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Main from './Components/Main/views/main'

function App() {
  return (
    <Router>
      <Route path='/' component={Main}/>
    </Router>
  );
}

export default App;
