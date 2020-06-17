import React from "react";
import Header from "./Header";
import QandA from "./QandA";
import Info from "./Info";
import SubscriptionForm from "./SubscriptionForm";
import AboveFooter from "./AboveFooter";
import Footer from "./Footer";

class App extends React.Component {

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