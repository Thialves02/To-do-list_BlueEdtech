import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Form from './pages/Form';
import FormEdit from './pages/FormEdit';
import Home from './pages/Home';
import Project from './pages/Project';
import View from './pages/View';

function App() {
  return (
    <div className="App">
    <Router>
      <Menu/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/project' exact component={Project}/>
        <Route path='/form' exact component={Form}/>
        <Route path='/view/:id' component={View}/>
        <Route path='/edit/:id' component={FormEdit}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
