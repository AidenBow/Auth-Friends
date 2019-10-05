import React from 'react';
import './App.css';

import Login from "./components/Login"
import Friends from "./components/Friends"
import {Route} from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/login" component={Login}/>
        <PrivateRoute path="/friends" component={Friends} />
      </header>
    </div>
  );
}

export default App;
