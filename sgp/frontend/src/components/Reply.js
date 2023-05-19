import React,{useState,useEffect} from 'react';
import './Reply.css';
import { useHistory } from 'react-router';
//import { useParams } from 'react-router';
import Table from 'react-bootstrap/Table';
const Reply = () => {
    const history = useHistory();
    const [complain , setTrial]= useState([]);
    function fetchdata () {
        fetch('http://localhost:8080/api/auth/complaints').then((data)=>{
            return data.json();
        })
        .then((data)=>{
            //console.log(data)
                setTrial(data);
        })
    }
    useEffect(()=>{
            fetchdata();
    },[]) 
    let authdata = JSON.parse(localStorage.getItem('user'))
    console.log(authdata.msg.email)

    return (
        <>
            <div className="introReply">
                <p className="firstLineReply">
                    Redressal to your Grievance from Faculty
                </p>
                <Table striped bordered>

    
                    <thead style={{backgroundColor:'#39b9d2'}}>
                        <tr>
                            <th>Grievance ID</th>
                            <th>Grievance Subject</th>
                            <th>Faculty Response</th>
                            <th>Student ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {complain?.map((cmp) => {

                            console.log(cmp.email)
                            if(authdata.msg.email === cmp?.email)
                            {
                                
                                return <tr> 

                            <td>{cmp?._id}</td>
                            <td>{cmp?.grievancesub}</td>
                            <td>{cmp?.redressal}</td>
                            <td>{cmp?.studentid}</td>
                        </tr>
                            }
                    })}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Reply