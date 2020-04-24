import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './services.css'

export default function Services() {
  return (
    <div className="service-container">
    <div className="service-row">
    <CountUp start={0} end={100} delay={0} duration={5}>
  {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
      <span style={{fontFamily:  'Poppins', fontSize: '30px'}} ref={countUpRef}></span>
      </VisibilitySensor>
      )}
</CountUp>
      <h4>Projects</h4>
      
      </div>

      <div className="service-row">
      <CountUp start={10} end={42} delay={0} duration={5}>
  {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
      <span style={{fontFamily:  'Poppins', fontSize: '30px'}}  ref={countUpRef}></span>
      </VisibilitySensor>
      )}
</CountUp>
      <h4>Clients</h4>
      </div>
       

      <div className="service-row">
      <CountUp start={400} end={1121} delay={0} duration={5}>
  {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
      <span style={{fontFamily:  'Poppins', fontSize: '30px'}}  ref={countUpRef}></span>
      </VisibilitySensor>
      )}
</CountUp>
      <h4>Nights</h4>
      </div>

      <div className="service-row">
      <CountUp start={5000} end={28796} delay={0} duration={5}>
  {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
     <span style={{fontFamily:  'Poppins', fontSize: '30px'}}  ref={countUpRef}></span>
       </VisibilitySensor>
      )}
</CountUp>
      <h4>Hours</h4>
      </div>

    </div>
  )
}
