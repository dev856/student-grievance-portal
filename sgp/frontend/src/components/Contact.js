import React from 'react'
import './Contact.css';
import img1 from  "../images/user.png";
import img2 from  "../images/phone.png";
import img3 from  "../images/email.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup'
const Contact = () => {
    return (
        <>
            <div className="introContact">
                <p className="firstLineContact">Contact Us </p>
                <p className="impLineContact">Faculty Representative of Depstar Internal Complaint Committee &#40;ICC&#41;</p>
                <CardGroup>
                    <Card style={{ margin:'2% 8%'  }}>
                        <Card.Body>
                        <Card.Title>Convener Faculty</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item><img src={img1} style={{height:'30px',width:'30px'}}/> &nbsp; Mr. Chandrashekar Pawar</ListGroup.Item>
                                <ListGroup.Item><img src={img2} style={{height:'30px',width:'30px'}}/> &nbsp; +91 7867986765</ListGroup.Item>
                                <ListGroup.Item><img src={img3} style={{height:'30px',width:'30px'}}/> &nbsp; chandrashekarpawar@charusat.edu.in</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ margin:'2% 8%' }}>
                        <Card.Body>
                        <Card.Title>Other Faculty</Card.Title>
                        <Card.Text>
                        <ListGroup>
                                <ListGroup.Item><img src={img1} style={{height:'30px',width:'30px'}}/> &nbsp; Ms. Rima Patel</ListGroup.Item>
                                <ListGroup.Item><img src={img2} style={{height:'30px',width:'30px'}}/> &nbsp; +91 9890986745</ListGroup.Item>
                                <ListGroup.Item><img src={img3} style={{height:'30px',width:'30px'}}/> &nbsp; rimapatel@charusat.edu.in</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div style={{backgroundColor:'	#343a40' , color:'white'}}>
                <div className="vimp" style={{marginLeft:'1%'}}>
                    <p style={{fontWeight:'bold'}}>Address</p>
                    Devang Patel Institute of Advance Technology and Research
                    <br/>
                    Charotar University of Science 	&#38; Technology
                    <br/>
                    Off. Nadiad-Petlad Highway, Changa 388 421
                    <br/>
                    Anand, Gujarat, INDIA
                </div>
                <div className="vimp" style={{marginLeft:'41.3%'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4196172274524!2d72.81806351443451!3d22.600800437631797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c699400001%3A0x7571b60b6c28001b!2sDevang%20Patel%20Institute%20of%20Advance%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1633823472181!5m2!1sen!2sin"style={{width:'119%', height:'201%',border:'0'}}   allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact
