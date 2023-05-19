import React from 'react';
import './About.css';
import ListGroup from 'react-bootstrap/ListGroup'
const About = () => {
    return (
        <>
            <div className="introAbout">
                <p className="firstLineAbout">About Us </p>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; Depstar believes in the principles of Honesty, Integrity and Transparency. The Institute aims to provide a harmonic environment to all the students, employees, associates and stakeholders. To facilitate these, Depstar Internal Complaints Committee(ICC) brought up an idea to built a Student Grievance Redressal Portal. Various Departments like Academics &#38; Examination Department, Accounts &#38; Fees Department, Administration Department, Anti-Ragging &#38; Harassment Department, Infrastructure Department are made and faculties are assignment for goodwill of students. Any student who finds any discrepancy can use this portal to register a complaint and respective department will take further actions to resolve the problem.
                <br/>
                <br/>
                <p className="impLineAbout">Steps to use the Student grievance redressal portal: </p>
                <ListGroup>
                    <ListGroup.Item>⏩ Student must login to the portal. First time user must signup first</ListGroup.Item>
                    <ListGroup.Item>⏩ After login, sudent home page opens. Student home page has options to Register a complaint or see status of the complaint</ListGroup.Item>
                    <ListGroup.Item>⏩ If you want to register a complaint click on that card, it will redirect you to Grievance form, fill the Grievance form and submit it. Submitting the Grievance generates a Grievance ID which will be useful for check status of the Grievance later.</ListGroup.Item>
                    <ListGroup.Item>⏩ If you want to see status of the complaint click on that card, it will redirect you to a page which will ask your Grievance ID, fill the Grievance ID and click on submit. You will be shown response from faculty in tabular manner.</ListGroup.Item>
                </ListGroup>
                <br/>
                <br/>
                <p className="impLineAbout">Departments and Respective Faculties: </p>
                <ul style={{marginLeft:'2%'}}>
                    <li>
                        Academics &#38; Examination Department
                        <ul style={{marginLeft:'4%'}}>
                            <li>Admissions, Examinations, Assessments, Evaluation, Library facilities, Issuance of certificates, Add-on courses, Research related issues, etc.</li>
                            <li>Prof Brijesh Panchal : +917685908780</li>
                        </ul>
                    </li>
                </ul>
                <ul style={{marginLeft:'2%'}}>
                    <li>
                        Accounts &#38; Fees Department
                        <ul style={{marginLeft:'4%'}}>
                            <li>Collection of fee, online fee payment gateway, Scholarships, etc.</li>
                            <li>Prof Harshil Joshi : +918790908733</li>
                        </ul>
                    </li>
                </ul>
                <ul style={{marginLeft:'2%'}}>
                    <li>
                        Administration Department
                        <ul style={{marginLeft:'4%'}}>
                            <li>ID cards,HR related issues, Transportation,Safety &#38; Security, Discipline, Misbehaviors, Emergency services, etc.</li>
                            <li>Prof Vidhi Pandya : +917631456907</li>
                        </ul>
                    </li>
                </ul>
                <ul style={{marginLeft:'2%'}}>
                    <li>
                        Anti-Ragging &#38; Harassment Department
                        <ul style={{marginLeft:'4%'}}>
                            <li>Eve teasing, Gender Based insults, Ragging activity, Ragging regarding academics or social environment within the campus etc.</li>
                            <li>Prof Rima Patel : +919898453454</li>
                        </ul>
                    </li>
                </ul>
                <ul style={{marginLeft:'2%'}}>
                    <li>
                        Infrastructure Department
                        <ul style={{marginLeft:'4%'}}>
                            <li>Wi-fi internet connectivity,Utility-stores, Computer facilities, Drinking water,Sanitation &#38; hygiene, Standard of meal, Maintenance, Medical facilities, etc.</li>
                            <li>Prof Nilesh Dubey : +918976895645</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="last">
                &copy; Copyrights Reserved 2021 | Param Jani | Dev Kotak | Prof. Brijesh Panchal 
            </div>
        </>
    )
}

export default About
