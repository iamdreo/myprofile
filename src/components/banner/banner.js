import React from 'react'
import { useSpring, animated } from 'react-spring'
import './banner.css';

const TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  let elements = document.getElementsByClassName('typewrite');
  for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-type');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
function Banner(){
  const props = useSpring({ to: [{ opacity: 1, color: 'grey'  }, { opacity: 1, color: 'rgb(14,26,19)' }],
  from: { opacity: 0, color: 'green', marginLeft: 20 }, config: { duration: 3000 }  })
    return (
      <div className="banner-container">
      
      <animated.div style={props}>
        <h1 className="banner-text">I'm Andrew Ole</h1>
        </animated.div>
        <p className="typewrite" data-period="2000"
         data-type='[ "Software engineer", "I Love to build things.", 
         "Based in Lagos, Nigeria." ]'> <span className="wrap"></span></p>
      </div>
    )
  
}

export default Banner;
