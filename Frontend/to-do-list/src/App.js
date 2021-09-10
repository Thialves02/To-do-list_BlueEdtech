import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
    <Router>
      <Menu/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/project' exact component={Project}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
