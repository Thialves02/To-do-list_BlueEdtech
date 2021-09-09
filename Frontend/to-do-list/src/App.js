import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route/>
      </Switch>
    </Router>
  );
}

export default App;
