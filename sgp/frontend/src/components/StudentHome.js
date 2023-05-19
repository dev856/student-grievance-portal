import React from 'react';
import './StudentHome.css';
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from "../images/edit.png";
import img2 from "../images/loupe.png";


const StudentHome = () => {
    const history = useHistory();
    const handleRegisterButton = () => {
        history.push("/Register");
    }
    const handleStatusButton = () => {
        history.push("/Reply");
    }
    return (
        <>
            <div className="intro">
                <p className="firstLine">
                    Hello, Student !!!
                    <br/>
                    Welcome to Depstar Student Grievance Redressal portal 
                </p> 
                
                <p className="impLine">
                    List of Grievance Categories and respective coordinators:-
                </p>
                <p className="otherLine">
                    Academics &#38; Examination Department - Prof Brijesh Panchal
                    <br/>
                    Accounts &#38; Fees Department - Prof Harshil Joshi
                    <br/>
                    Administration Department - Prof Vidhi Pandya
                    <br/>
                    Anti-Ragging &#38; Harassment Department - Prof Rima Patel
                    <br/>
                    Infrastructure Department - Prof Nilesh Dubey
                    <br/> 
                </p> 
                <p className="impLine">
                    Folow the instructions to register complain or view status of your complain:-
                </p>
                <CardGroup>
                    <Card style={{ margin: '2% 10%' }}>
                        <Card.Img variant="top" bg={'primary'} src={img1} className="cardImg" style={{height:"7rem" , width:"7rem", marginTop:"5%", marginLeft:"32%", marginRight:"32%" }} />
                        <Card.Body>
                        <Card.Title>Register Complaint</Card.Title>
                        <Card.Text>
                            👉 Click on below present register complaint icon
                            <br/>
                            👉 It will redirect you to a complaint form
                            <br/>
                            👉 Fill the complaint form 
                            <br/>
                            👉 Submiting the complaint form generates a complaint ID
                            <br/>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" onClick={handleRegisterButton}>Register Complaint</Button>
                        </Card.Footer>
                    </Card>
                    <Card style={{ margin: '2% 10%' }}>
                        <Card.Img variant="top" bg={'success'} src={img2} className="cardImg" style={{height:"7rem", width:"7rem", marginTop:"5%", marginLeft:"32%", marginRight:"32%"}} />
                        <Card.Body>
                        <Card.Title>View Status</Card.Title>
                        <Card.Text>
                            👉 Click on below present View Status icon
                            <br/>
                            👉 Enter your complaint ID assigned at the time of grievance register
                            <br/>
                            👉 Status or response of your complaint will be shown along with the responce to your grievance from faculty
                            <br/>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary" onClick={handleStatusButton}>View Status</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default StudentHome