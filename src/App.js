import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import ToDoList from './components/todolist.js';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      
      <Switch>
          <Route path="/about" component={About}>
            <About />
          </Route>
         
          <Route path="/" component={ToDoList} exact>
          </Route>
      </Switch>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
