import React,{useState , useEffect} from 'react';
import './Redressal.css';
import Table from 'react-bootstrap/Table';
import {Form, Button,FormCheck, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";


const Redressal = () => {
    const history = useHistory();
    const params= useParams()
    const [redressal , setReply ] = useState([]); 
    async function handleSubmit (event) {
        event.preventDefault()
        fetch('http://localhost:8080/api/auth/Redressal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				redressal,
                _id:params.id,
                
			}),
		})
        .then((res)=>{
            return res.json()
            
        })
        .then((data)=>{
            console.log(data);
            //history.push("/Redressal");
            alert("Redressal submitted successfully")
        })


    }
    
   // console.log(params);
    
    const [complaint , setComplaint]= useState([]);
    function fetchdata () {
        fetch('http://localhost:8080/api/auth/complaint',{method: 'POST' ,headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }, body: JSON.stringify({id:params.id})  }).then((data)=>{
         console.log(data);   
        return data.json()
        })
        .then((data)=>{
            console.log(data)
                setComplaint(data);
        })
    }
    useEffect(()=>{
            fetchdata();
    },[]) 


    return (
        <>
            <div className="introRedressal">
                <p className="firstLineRedressal">
                    Grievance Details
                </p>
                <Table striped bordered>
                    <thead style={{backgroundColor:'#39b9d2'}}>
                        <tr>
                            <th>References</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grievance ID</td>
                            <td>{complaint?._id}</td>
                        </tr>
                        <tr>
                            <td>Student Name</td>
                            <td>{complaint?.name}</td>
                        </tr>
                        <tr>
                            <td>Student ID</td>
                            <td>{complaint?.studentid}</td>
                        </tr>
                        <tr>
                            <td>Student Email</td>
                            <td>{complaint?.email}</td>
                        </tr>
                        <tr>
                            <td>Student Mobile</td>
                            <td>{complaint?.mobile}</td>
                        </tr>
                        <tr>
                            <td>Grievance Subject</td>
                            <td>{complaint?.grievancesub}</td>
                        </tr>
                        <tr>
                            <td>Grievance Category</td>
                            <td>{complaint?.grievancecat}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>{complaint?.department}</td>
                        </tr>
                        <tr>
                            <td>Grievance Description</td>
                            <td>{complaint?.grievancedesc}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="otherPartRedressal">
                    <Form className="formStatus">
                        <Form.Label>Give Redressal to the Grievance</Form.Label>
                        <Form.Control as="textarea" rows={4} type="text" name="redressal" value={redressal} placeholder = "Enter the grievance description " onChange={(e)=> setReply(e.target.value)} />
                        <Button variant="primary" type="submit" onClick={handleSubmit} >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Redressal
