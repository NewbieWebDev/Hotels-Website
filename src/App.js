import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Errors from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/rooms/" component={Rooms}/>
      <Route  path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Errors}/>
   </Switch>
    </>
  );
}

export default App;
