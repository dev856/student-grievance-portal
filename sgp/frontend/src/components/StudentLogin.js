import React , {useState, useContext} from 'react'
import './Student.css';
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';
import Img1 from "../images/charusat1.jpg"; 

const StudentLogin = ()=> {
    const {state,dispatch} = useContext(UserContext)   
    const history = useHistory();

    const handleCLickSignup = () => {
        history.push("/Student");
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser (event) 
    {
        event.preventDefault()
    
		fetch('http://localhost:3000/api/auth/StudentLogin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            dispatch({type:"USER", payload:true});
            localStorage.setItem('user', JSON.stringify(data));
            if(data?.msg?.role === 'teacher')
            {
                 dispatch({type:"USER", payload:true});
                history.push("/FacultyHome")

            }
            else if(data?.msg?.role === 'student')
            {
                dispatch({type:"USER", payload:true});
                history.push("/StudentHome");
                console.log('Successfully Login');
            }
          
        })
        //.then(response => response.json())
        
            
        
    }
    
    return (
        <>
            <div className="container">
                
                <div className="form-container">
                
                    <div className="button-box">
                        <div style={{left:'50%'}} id="btn"></div>
                        <button type="button" style={{outline: 'none'}}  onClick={handleCLickSignup} className="toggle-btn">Sign up</button>
                        <button type="button" style={{outline: 'none'}} className="toggle-btn">Log in</button>
                    </div>
                    <form id="login" className="input-group" >
                    <input type="text" name="email" className="input-field" value={email} placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} required></input>
                        <input type="password" name="password" className="input-field" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                        <input type="submit" className="btn-submit" onClick={loginUser} value="Log In" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default StudentLogin
