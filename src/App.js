import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Main from './components/Main';
import TMain from './components/ThunkMain';
import TList from './components/ThunkList';
function App() {
  return (
    <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/redux" component={Main} />
    <Route exact path="/redux-thunk" component={TMain} />
    <Route path="/redux-thunk-list" component={TList} />
    </React.Fragment>
  );
}

export default App;
