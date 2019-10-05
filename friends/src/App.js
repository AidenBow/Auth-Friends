import React, {useHistory} from 'react';
import './App.css';

import Login from "./components/Login"
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login}/>
        {/* <Route exact path="/protected" component={Login}/> */}
      </header>
    </div>
  );
}

export default App;
