import React from 'react'
import './ShowId.css';
const ShowId = () => {
    return (
        <>
            <div className="introShowId">
                <p className="firstLineShowId">
                    Your Grievance has been registered on our Portal.📫
                    <br/>
                    Your Grievance ID is <span style={{color:"red"}}>027</span>.
                    <br/>
                    Kindly keep note of your Grievance ID for future use and see status of your Grievance.
                </p>
            </div>
        </>
    )
}

export default ShowId
