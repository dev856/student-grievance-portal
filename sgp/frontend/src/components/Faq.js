import React from 'react';
import Accordion from './Accordion';

import './Faq.css';
const Faq = () => {
    const accordionData = [
        {
          title: 'PC / Desktop out of order in lab',
          content: `Call technical coordinator Mr. Rakesh Shah on +91 9889908767. Tell him lab number and pc number which has problem.`
        },
        {
          title: 'Pay Fees/ Fees rejection and related grievances',
          content: `You can pay fees on this https://charusat.edu.in:912/FeesPaymentApp/. Fill in your ID number and your pending fees and mode of fees payment option will be shown. The website also has various contact details in account department, you can contact them in case required.`
        },
        {
          title: 'Late fees charges',
          content: `Rs. 50 per day will levy after the deadline of fee payment. `
        },
        {
            title: 'Requirement of Fee receipt',
            content: `You can download Fee receipt from E-Governance. For Hardcopy you can visit Admin Department's Help Desk, you can provide our Enrollment ID and get the receipt.  `
        },
        {
            title: 'Pexa related grievances',
            content: `You can call or email with screenshot of problem to your exam coordinator. All batches will be assigned a exam coordiantor before exam and their contact details will shared on email.  `
        },
        {
            title: 'Permission for leave grant',
            content: `You need to email your class coordinator and counsellor regarding the same along with valid reason. If they find your reason satisfactory, they will grant it. `
        },
        {
            title: 'Non functioning of tubelight, power socket, fan, Airconditioner or any other electric devices',
            content: `You need to inform electrician team on +919867568788. If device doesn't get repaired in 3-4 days time, you can fill grievance form. `
        },
        {
          title: 'Requirement of some specific software',
          content: `You need to send an email to technical coordinator Mr. Rakesh Shah on rakeshshah@charusat.edu.in with software name and release number or version. `
        }
        
      ];
    
      return (
        <div className="introFaq">
          <h1>Frequently Asked Questions</h1>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      );
}

export default Faq
