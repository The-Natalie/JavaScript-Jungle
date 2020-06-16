import React from "react";
import Header from "./Header";
import QandA from "./QandA";
import Info from "./Info";
import SubscriptionForm from "./SubscriptionForm";
import Footer from "./Footer";

class App extends React.Component {

  render () {
		return (
			<div>
				<Header />
				<QandA />
				<Info />
				<SubscriptionForm />
			  <Footer />
			</div>
		)
	}
}

export default App;