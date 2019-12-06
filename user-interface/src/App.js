import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Switch>
          <Route path="/api/users"><UserList /></Route>
          <Route path="/api/users/:id"><UserPage /></Route>
        </Switch>
        <Link to="/api/users">User List</Link> 
      </div>
    </div>
  );
}

export default App;
