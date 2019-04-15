import React from 'react'
import './myservices.css'
import {FaHtml5, FaDatabase, FaMobile, FaRobot, FaDesktop , FaChartLine} from 'react-icons/fa'


function Whatido({ id }) {
  return (
    <div id={id}>
      <h1 className="service-text">Services</h1>
    <div className="service-grid">
    <div className="service">
    <div className="inside-grid">
    <FaHtml5 className="icon" /> 
     <p className="title-text"> Frontend </p>
     </div>
     <p className="description">Creating beautiful web UI</p>
           
      </div>
      <div className="service">
      <div className="inside-grid">
      <FaDatabase className="icon"/>
    <p  className="title-text">Backend </p>
    </div>
    <p className="description">Secure and reliable backends</p>
          
     </div>

     <div className="service">
     <div className="inside-grid">
     <FaMobile className="icon"/>
    <p className="title-text">Mobile app </p>
    </div>
    <p className="description">Beautiful and creative applications</p>
          
     </div>

     <div className="service">
     <div className="inside-grid">
     <FaRobot className="icon"/>
    <p className="title-text">Artificial intelligence </p>
    </div>
    <p className="description">Super intelligent powerful applications</p>
          
     </div>

     <div className="service">
     <div className="inside-grid">
     <FaDesktop className="icon"/>
    <p className="title-text">Virtual reality </p>
    </div>
    <p className="description">Building beautiful engaging worlds</p>
          
     </div>

     <div className="service">
     <div className="inside-grid">
     <FaChartLine className="icon"/>
    <p className="title-text">Marketing</p>
    </div>
    <p className="description">Reach the right customers</p>
          
     </div>
  
    </div>
    </div>
  )
}
export default Whatido;