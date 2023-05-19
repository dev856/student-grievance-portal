import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import {Form, Button,FormCheck, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Register.css';
const Register = () => {
    const history = useHistory();
    async function handleSubmit  (event)  {
        event.preventDefault()
    
		fetch('http://localhost:8080/api/auth/Register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				name,
                studentid,
                grievancesub,
                mobile,
                grievancedesc,
                grievancecat,
                department,
			}),
		})
        .then((res)=>{
            return res.json()
            
        })
        .then((data)=>{
            console.log(data);
            history.push("/Register");
            alert("Registered successfully")
        })
        //.then(response => response.json())
         
    }
    const authdata = JSON.parse(localStorage.getItem('user'))
    const [name, setName] = useState('')
    const [studentid, setSid] = useState('')
    const [email, setEmail] = useState(authdata.msg.email)
    const [mobile, setMobile] = useState('')
    const [grievancesub, setSub] = useState('')
    const [grievancedesc, setGrievancedesc]=useState('')
    const [grievancecat, setCat] = useState('')
    const [department, setDepartment] = useState('')
    return (
        <>
            <div className="base">
                <p className="firstLineForm">
                    Please fill the Grievance Form:-
                </p>
                <p className="otherLineForm">
                    Note that &#40;*&#41; are mandatory fields
                </p>
                <Form className="ourForm">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="name">
                        <Form.Label>Name<sup className="superScript">*</sup></Form.Label>
                        <Form.Control type="text" name="name" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="id">
                        <Form.Label>Student ID<sup className="superScript">*</sup></Form.Label>
                        <Form.Control type="text"  name="studentid" value={studentid} placeholder="Enter id" onChange={(e) => setSid(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        {/* <Form.Group as={Col} controlId="email">
                        <Form.Label>Email<sup className="superScript">*</sup></Form.Label>
                        <Form.Control type="email"  name="email" value={a} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group> */}

                        <Form.Group as={Col} controlId="mobile">
                        <Form.Label>Mobile<sup className="superScript">*</sup></Form.Label>
                        <Form.Control type="text"  name="mobile" value={mobile} placeholder="Enter mobile" onChange={(e) => setMobile(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="category">
                            <Form.Label>Grievance Category<sup className="superScript">*</sup></Form.Label>
                            <Form.Select defaultValue="Choose..." value={grievancecat}  onChange={(e)=>setCat(e.target.value)}>
                                <option>Choose...</option>
                                <option>Academics &#38; Examination Department</option>
                                <option>Accounts &#38; Fees Department</option>
                                <option>Administration Department</option>
                                <option>Anti-Ragging &#38; Harassment Department</option>
                                <option>Infrastructure Department</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="department">
                            <Form.Label>Department</Form.Label>
                            <Form.Select defaultValue="Select..." value={department} onChange={(e)=>setDepartment(e.target.value)}>
                                <option>Select...</option>
                                <option>Computer Science &#38; Engineering</option>
                                <option>Computer Engineering</option>
                                <option>Information Technology</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="subject">
                        <Form.Label>Grievance Subject<sup className="superScript">*</sup></Form.Label>
                        <Form.Control type="text"name="grievancesubject" value={grievancesub} placeholder="Enter subject" onChange={(e) => setSub(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Grievance Description<sup className="superScript">*</sup></Form.Label>
                        <Form.Control as="textarea" rows={4} type="text" name="grievancedescription" value={grievancedesc} placeholder = "Enter the grievance description " onChange={(e)=> setGrievancedesc(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Register
