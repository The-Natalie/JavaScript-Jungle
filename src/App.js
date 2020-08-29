import React from "react";
// import $ from "jquery";
import Header from "./Header";
import QandA from "./QandA";
import Info from "./Info";
import SubscriptionForm from "./SubscriptionForm";
import AboveFooter from "./AboveFooter";
import Footer from "./Footer";

class App extends React.Component {

	// componentDidMount() {
	// 	$("button").on('click', function() {
	//     setTimeout(function() {
	//       $("div.sp-message.sp-message-success h3").remove();
	//       $("h3").css({"display": "none"});
	//       $("div.sp-message-success").css({"height": "300px"});
	//       if ($("div#script").height() < "325") {
	//           $("div#info").css({"padding-bottom": "150px"});
	//           $("div#script").css({"padding-bottom": "40px"});
	//         }
	//       $("div.sp-message-success p:first-child").css({"text-align": "center", "padding-bottom": "30px", "padding-top": "20px"});
	//       $("div.sp-message-success p:nth-child(3)").css({"padding-left": "10px", "padding-right": "10px"}); 
	//     }, 4000);
	//   });
	// };

  render () {
		return (
			<div>
				<Header />
				<QandA />
				<div id="gradient">
					<Info />
					<SubscriptionForm />
					<AboveFooter />
				  <Footer />
				</div>
			</div>
		)
	}
}

export default App;