import React from 'react'
import './Student.css';

const Student = () => {
    return (
        <>
            <div className="container">
                <div className="form-container">
                    <div className="button-box">
                            <button type="button" id="btn" className="toggle-btn">Sign up</button>
                            <button type="button" className="toggle-btn">Log in</button>
                    </div>
                    <form className="input-group">
                        <input type="email" className="input-field" placeholder="Email Id" required/>
                        <input type="text" className="input-field" placeholder="Student Id" required/>
                        <input type="password" className="input-field" placeholder="Password" required/>
                        <button type="button" className="btn-submit" >Sign Up</button>
                    </form>
                    {/* <form className="input-group">
                        <input type="text" className="input-field" placeholder="Student Id" required/>
                        <input type="password" className="input-field" placeholder="Password" required/>
                        <button type="button" className="btn-submit" >Log In</button>
                    </form> */}
                </div>
            </div>            
        </>
    )
}

export default Student
