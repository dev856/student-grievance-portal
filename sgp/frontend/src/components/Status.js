import React from 'react';
import './Status.css';
import {Form, Button,FormCheck, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useHistory } from 'react-router';

const Status = () => {
    const history = useHistory();
    const handleSubmit = () => {
        history.push("/Reply");
    }
    return (
        <div className="introStatus">
            <Form className="formStatus">
                <Form.Label>Enter Your Grievance ID</Form.Label>
                <Form.Control type="text" />
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Status
