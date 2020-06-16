import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function QandA() {
  return (
  	<div>
	  	<div id="query1">
	  		<ScrollAnimation animateIn="bounceInLeft" initiallyVisible={false}>
			  	<p>Would you like to have quick refreshers sent to you?</p>
			  </ScrollAnimation>
	  	</div>
	  	
	  	<div id="query2">
	  		<ScrollAnimation animateIn="bounceInLeft" initiallyVisible={false}>
			  	<p>Have you ever worked on a problem and thought there HAS to be a better way to do this, then later realized that there WAS a better way to do it? If only you had known that obscure method or property that was never taught to you...</p>
			  </ScrollAnimation>
	  	</div>

	  	<div id="query3">
	  		<ScrollAnimation animateIn="bounceInLeft" initiallyVisible={false}>
	  			<p>Are you overwhelmed trying to learn all things JavaScript and just want to learn a little bit at a time?</p>
	  		</ScrollAnimation>
	  	</div>

	  	<div id="answer">
	  		<ScrollAnimation animateIn="tada" initiallyVisible={true}>
			  	<p>Then this email series is for you!</p>
			  </ScrollAnimation>
	  	</div>
  	</div>
  )
}

export default QandA;