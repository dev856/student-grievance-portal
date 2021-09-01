import React from 'react'
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import View from './components/View';
import Admin from './components/Admin';
import Student from './components/Student';
import About from './components/About';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
    <Navbar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/View">
      <View/>
    </Route>
    <Route path="/Admin">
      <Admin/>
    </Route>
    <Route path="/Student">
      <Student/>
    </Route>
    <Route path="/About">
      <About/>
    </Route>
    <Route path="/Contact">
      <Contact/>
    </Route>
    </>
  )
}

export default App
