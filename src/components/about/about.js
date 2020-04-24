import React from 'react'
import './about.css'


function About({ id }) {
  return (
    <div style={{backgroundColor: '#F2F4F4'}} id={id}>
      <h1 className="about-me-text">About me</h1>
    <div className="about-grid">
    <div className="about-text-sec">

            <p>I am Andrew Ole, a full stack software engineer obsessed with 
              creating amazing user experiences from front end to backend
              and giving my users the best possible experience.</p>

            <p>I have a passion for constantly learning, evolving and building cool things with the latest
              technologies. So hit me up and let's grow and build cool things together.
            </p>

      </div>

  <div className="experience-section">
      <div id="ProgressBar">
  <div id="Progress"></div>
</div>
  <p>Javascript and React experience</p>

  <div id="ProgressBar">
  <div id="Progress"></div>
</div>
  <p>Python and Tensorflow experience </p>

  <div id="ProgressBar">
  <div id="Progress"></div>
</div>
  <p>Php and Larevel experience</p>

  <div id="ProgressBar">
  <div id="Progress"></div>
</div>
  <p>Git, Docker, Heroku and More </p>

 
   
   </div>  
    </div>
    </div>
  )
}
export default About;