import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
	    <p>&copy; {currentYear} JavaScript Jungle</p>
	    <div>
	    	<a href='https://pngtree.com/so/leaf'>leaf png from pngtree.com</a>
	    	<a id="scnd-img" href='https://pngtree.com/so/color'>color png from pngtree.com</a>
	    </div>
	  </footer>
  )
}

export default Footer