import React from 'react'
import CountUp from 'react-countup';
import './services.css'

export default function Services() {
  return (
    <div className="service-container">
    <div className="service-row">
    <CountUp start={0} end={100} delay={0} duration={5}>
  {({ countUpRef }) => (
      <span style={{fontFamily:  'Poppins', fontSize: '30px'}} ref={countUpRef}></span>
      )}
</CountUp>
      <h4>Projects</h4>
      
      </div>

      <div className="service-row">
      <CountUp start={0} end={42} delay={0}>
  {({ countUpRef }) => (
      <span style={{fontFamily:  'Poppins', fontSize: '30px'}}  ref={countUpRef}></span>
      )}
</CountUp>
      <h4>Clients</h4>
      </div>
       

      <div className="service-row">
      <CountUp start={0} end={1121} delay={0}>
  {({ countUpRef }) => (
      <span style={{fontFamily:  'Poppins', fontSize: '30px'}}  ref={countUpRef}></span>
      )}
</CountUp>
      <h4>Nights</h4>
      </div>

      <div className="service-row">
      <CountUp start={0} end={28796} delay={0}>
  {({ countUpRef }) => (
     <span style={{fontFamily:  'Poppins', fontSize: '30px'}}  ref={countUpRef}></span>
      )}
</CountUp>
      <h4>Hours</h4>
      </div>

    </div>
  )
}
