import React, {useContext} from 'react';
import logo from "../images/depstar_symbol.png";
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';


const Navbar = () => {
 const {state, dispatch} = useContext(UserContext);
    // function logout () {
    //     localStorage.removeItem('user')
    // }
    console.log(localStorage.getItem('user'))
    const NavbarToggle = () => {
        if(state){
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/Student">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/Faq">FAQ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/About">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/Contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item" style={{marginLeft:"850px"}}>
                        <NavLink className="nav-link" activeClassName="active_class" to="/Logout">Logout</NavLink>
                    </li>
                </>
            )
        }else{
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/Student">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/Faq">FAQ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/About">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active_class" to="/Contact">Contact Us</NavLink>
                    </li>
                </>
            )
        }

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className = "navbar-brand" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavbarToggle/>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar