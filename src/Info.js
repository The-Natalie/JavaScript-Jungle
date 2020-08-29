import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Info() {
  return (
  	<div id="info">
      <ScrollAnimation animateIn="slideInUp" initiallyVisible={false} animateOnce={true}>
    		<p>We'll be exploring the lesser-known JavaScript terms (at least for us newbies) - one per email. These are the methods and properties that aren't usually taught in beginner or even intermediate courses. Some of them may be familiar to you, but we'll go over them just in case. This is a quick but informative newsletter, and will take 5 minues or less to read.</p>
      </ScrollAnimation>  

      <ScrollAnimation animateIn="slideInUp" initiallyVisible={false} animateOnce={true}>
        <p>I'm no JavaScript expert...yet. So, if you see something wrong, please don't hesitate to <a href="mailto:guide@javascriptjungle.com">correct me</a>! I'm still learning the lingo, so I'll more than likely call something by the wrong name. But, hopefully writing this newsletter will help me. And maybe it'll help you, too.</p> 
      </ScrollAnimation>  

      <ScrollAnimation animateIn="slideInUp" initiallyVisible={false} animateOnce={true}>  
  		  <p>I'll try to consistently send out a newsletter throughout the week, but we'll take the weekends off.</p>
      </ScrollAnimation>  


      <ScrollAnimation animateIn="slideInUp" initiallyVisible={false} animateOnce={true}>  
  		  <p>Alright <span style={{color:"#0c660b",fontWeight:"bold"}}>JavaScript Jungle</span> explorers, sign up below and your guide will be in contact.</p>
      </ScrollAnimation>

  		<ScrollAnimation animateIn="slideInUp" initiallyVisible={false} animateOnce={true}>
    		<div id="signature-div">
    			<a href="https://technatalie.com" target="_blank" rel="noopener noreferrer"><img  id="signature" src="images/by_Natalie_Hall.gif" alt="by Natalie Hall" /></a>
    		</div>
      </ScrollAnimation>
  	</div>
  )
}

export default Info;