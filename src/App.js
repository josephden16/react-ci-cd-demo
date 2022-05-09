import React from 'react';
import "whatwg-fetch";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header.js";
import Detail from "./views/Detail.js";
import Home from "./views/Home.js";
import './App.scss';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/:code">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>  
      </Switch>
    </Router>
  )
}
export default App;
