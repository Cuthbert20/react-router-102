import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
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
      {/* Route is a selfclosing tag, we are setting params on the root. */}
      <Route path="/:id" component={Child}  />
    </div>
    </Router>
  );
}

const Child = ({ match }) => {
  return(
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )
}

export default App;
