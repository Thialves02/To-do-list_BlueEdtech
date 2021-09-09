import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Menu/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
