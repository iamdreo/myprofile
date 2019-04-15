import React from 'react'
import './about.css'


function About({ id }) {
  return (
    <div style={{backgroundColor: '#F2F4F4'}} id={id}>
      <h1 className="about-me-text">About me</h1>
    <div className="about-grid">
    <div className="about-text-sec">
            <p>I am a full stack software engineer that is obsessed with 
              creating amazing user experiences from front end to backend
              and giving my users the best possible service.</p>

            <p>Nulla sint amet enim non sunt.
           Magna velit ad consectetur elit culpa nostrud in qui officia 
           veniam sint consequat enim. Do et ut duis ipsum amet ea exercitation laborum. 
           Nulla commodo velit incididunt Lorem minim Lorem aliqua excepteur commodo nulla
            amet et. Aliquip consequat sint duis ea.</p>
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