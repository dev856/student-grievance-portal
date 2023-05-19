import React,{ useEffect } from 'react'
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import About from './components/About';
import StudentHome from './components/StudentHome';
import Register from './components/Register';
import Status from './components/Status';
import ShowId from './components/ShowId';
import Reply from './components/Reply';
import Faq from './components/Faq';
import Logout from './components/Logout';
import { initialState, reducer  } from './reducer/UseReducer';
import { useHistory } from 'react-router';
import FacultyHome from './components/FacultyHome';
import Redressal from './components/Redressal';
import StudentLogin from './components/StudentLogin';
import { createContext, useReducer } from 'react'
import { Switch } from "react-router-dom";
export const UserContext = createContext();
//import { useEffect} from 'react';

const Routing = () =>{
  return(
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/StudentLogin" exact component={StudentLogin}>
        <StudentLogin/>
      </Route>
      <Route path="/Student" exact component={Student}>
        <Student/>
      </Route>  
      <Route path="/Faq" exact component={Faq}>
        <Faq/>
      </Route>
      <Route path="/About" exact component={About}>
        <About/>
      </Route>
      <Route path="/Contact" exact component={Contact}>
        <Contact/>
      </Route>
      <Route path="/StudentHome" exact component={StudentHome}>
        <StudentHome/>
      </Route>
      <Route path="/Register" exact component={Register}>
        <Register/>
      </Route>
      <Route path="/Status" exact component={Status}>
        <Status/>
      </Route>
      <Route path="/ShowId"exact component={ShowId}>
        <ShowId/>
      </Route>
      <Route path="/Reply"exact component={Reply}>
        <Reply/>
      </Route>
      <Route path="/FacultyHome"exact component={FacultyHome}>
        <FacultyHome/>
      </Route>
      <Route path="/Redressal"exact component={Redressal}>
        <Redressal/>
      </Route>
      <Route path="/complaint/:id" component={Redressal}>
        <Redressal/>
      </Route>
      <Route path="/Logout"exact component={Logout}>
        <Logout/>
      </Route>
    </Switch>
  )

}
const App = () => {
  
  const history = useHistory(); 
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
   
    if(userdata)
  {
    console.log(userdata);
    if(userdata.msg.role === 'student')
    {
      //console.log('hello');
      history.push("/StudentHome");
    }
    else
    {
      //console.log('hello');
      history.push("/FacultyHome");
    }
  }
  else
  {
    history.push("/");
  }
  },[] )
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
  
     <>
      <UserContext.Provider value={{state,dispatch}}>
        <Navbar/>
        <Routing/>
      </UserContext.Provider>      
    </> 
)
}


export default App
