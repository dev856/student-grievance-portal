import React , { useState } from "react";
//import Modal from "react-bootstrap/Modal";
//import Button from 'react-bootstrap/Button';
import './Student.css';
import { useHistory } from "react-router-dom";
//import Login from "./login";
//import Login from "./login";
function Student () {
    // Swift of login and signup module
    const signup = "0px";
    const [currentSignup, setSignup] = useState(signup);
    //const login = "400px";
    //const [currentLogin, setLogin] = useState(login);
    const btnDiv = "0";
    const [currentBtnDiv, setBtnDiv] = useState(btnDiv);
   /* const handleCLickLogin = () => {
        let newSignup = "-400px";
        setSignup(newSignup);
        let newLogin = "0px";
        setLogin(newLogin);
        let newBtnDiv = "50%";
        setBtnDiv(newBtnDiv);
    }*/
    const handleCLickSignup = () => {
        let newSignup = "0px";
        setSignup(newSignup);
        //let newLogin = "400px";
        //setLogin(newLogin);
        let newBtnDiv = "0";
        setBtnDiv(newBtnDiv);   
    }


    // Modal open close for signup successful
    //const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    // redirecting to student home on clicking login button
    //const handleLoginButton = () => {
        //history.push("/Student");
    //}
    const history = useHistory();
    // Swift of login and signup module
    const handleCLickLogin = () => {
        history.push("/StudentLogin");
    }
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [enrollment, setEnrollment] = useState('')

    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3000/api/auth/Student', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
                enrollment,
				password,
			}),
		})

		const data = await response.json()
        .then((res)=>{
            alert("signedup successfully")
        })
		if (data?.status === 200) {
			history.push('/StudentHome')
		}
	}
    

    return (
        <>
            <div className="container">
                 
                <div className="form-container">
                    <div className="button-box">
                        <div style={{left: currentBtnDiv}} id="btn"></div>
                            <button type="button" style={{outline: 'none'}}  onClick={handleCLickSignup} className="toggle-btn">Sign up</button>
                            <button type="button" style={{outline: 'none'}} className="toggle-btn" onClick={handleCLickLogin}>Log in</button>
                    </div>
                    <form style={{left: currentSignup}}id="signup" className="input-group">
                        <input type="text" name="email" className="input-field" value={email} placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} required></input>
                        <input type="text" name="enrollment" className="input-field" value={enrollment}  placeholder="ID" onChange={(e) => setEnrollment(e.target.value)} required/>
                        <input type="password" name="password" className="input-field" value={password}  placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                        <button type="button" onClick={registerUser} className="btn-submit" >Sign up</button>
                    </form>
                </div>
            </div> 
        </>
    )
}
export default Student
