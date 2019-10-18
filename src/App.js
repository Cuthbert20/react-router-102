import React from 'react';
import './App.css';
import {HashRouter as Router, Link} from 'react-router-dom'
import routes from './components/routes'

function App() {
  return (
    <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to='/aliens' >Aliens</Link>
        </li>
        <li>
          <Link to='/predetor' >Predetor</Link>
        </li>
        <li>
          <Link to="/terminator" >Terminator</Link>
        </li>
        <li>
          <Link to='/robocop' >RoboCop</Link>
        </li>
      </ul>
      {routes}
    </div>
    </Router>
  );
}

export default App;
