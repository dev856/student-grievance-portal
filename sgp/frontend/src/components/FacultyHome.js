import React, { useEffect, useState } from 'react';
import './FacultyHome.css';
import Table from 'react-bootstrap/Table';
import {Form, Button,FormCheck, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useHistory } from 'react-router';
//import data from '../../../user-permission/data';

const FacultyHome = () => {
    const history = useHistory();
    const [complaints , setComplaint]= useState([]);
    const handleFacultyHome = () => {
        history.push("/Redressal");
    }
    function fetchdata () {
        fetch('http://localhost:8080/api/auth/complaints').then((data)=>{
            return data.json();
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
            <div className="introFaculty">
                <p className="firstLineFaculty">
                    List of Grievances
                </p>
                <Table striped bordered >
                    <thead style={{backgroundColor:'#39b9d2'}}>
                        <tr>
                            <th>Grievance ID</th>
                            <th>Grievance Subject</th>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Department</th>
                            <th>Grievance category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints?.map((cmp)=>{
                            return <tr onClick={()=>{
                                history.push('/complaint/'+cmp?._id)
                            }}>
                            <td>{cmp?._id}</td>
                            <td>{cmp?.grievancesub}</td>
                            <td>{cmp?.studentid}</td>
                            <td>{cmp?.name}</td>
                            <td>{cmp?.department}</td>
                            <td>{cmp?.grievancecat}</td>
                        </tr> 
                            
                        })}
                        
                    </tbody>
                </Table>
                {/* /<div>
                    <Form className="formStatusFaculty">
                        <Form.Label style={{padding: '1%'}}>Enter the Grievance ID to Respond </Form.Label>
                        <Form.Control type="text" />
                        <Button variant="primary" style={{marginTop: '2%'}} type="submit" onClick={handleFacultyHome}>
                            Submit
                        </Button>
                    </Form>
                </div>// */}
            </div>

        </>
    )
}

export default FacultyHome
