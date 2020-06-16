import React from "react";
// import postscribe from 'postscribe';

class SubscriptionForm extends React.Component { 

  // componentDidMount() {
  //   // postscribe("#script","<script src='//web.webformscr.com/apps/fc3/build/loader.js' sp-form-id='3482dc1028115f249345d173b00076fa30757cc439b81069ac3bbd97b2ce3839'></script>"); 

  //   postscribe("#script","<script type='text/javascript' src='//web.webformscr.com/apps/fc3/build/default-handler.js?1591191285660'></script>");
  // }

  render () {
    return (
      <div className="sp-form-outer">
        <div id="sp-form-157588" sp-id="157588" sp-hash="3482dc1028115f249345d173b00076fa30757cc439b81069ac3bbd97b2ce3839" sp-lang="en" className="sp-form sp-form-regular sp-form-embed" sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22%22%2C%22hideOnMobile%22%3Afalse%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22Subscription_form_My_emails%22%2C%22send%22%3Afalse%7D%2C%22ym%22%3A%7B%22counterId%22%3Anull%2C%22eventLabel%22%3Anull%2C%22targetId%22%3Anull%2C%22send%22%3Afalse%7D%7D%7D">
          <div><h2>Subscribe</h2></div>
          <form noValidate="" className="sp-element-container ui-sortable ui-droppable ">
            <div className="sp-form-fields-wrapper">
              <div className="sp-message">
                <div>
                </div>
              </div>
              <div className="sp-field " sp-id="sp-30752364-6226-4cf7-9e03-722f199667d7">
                <label className="sp-control-label"><span >Email</span><strong >*</strong></label>
                <input type="email" sp-type="email" name="sform[email]" className="sp-form-control " placeholder="username@gmail.com" sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D" required="required" />
              </div>
              <div className="sp-field " sp-id="sp-09ac102d-a773-4851-b5f9-f24405dfb07d">
                <label className="sp-control-label"><span >Name</span><strong >*</strong></label>
                <input type="text" sp-type="name" name="sform[ODgyMjkwNTI=]" className="sp-form-control " placeholder="Full name" sp-tips="%7B%22required%22%3A%22Required%20field%22%7D" required="required" />
              </div>
            </div>
            <div className="sp-field sp-button-container " sp-id="sp-3a65e46d-b014-44da-9775-22718ea7007b">
              <button id="sp-3a65e46d-b014-44da-9775-22718ea7007b" className="sp-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SubscriptionForm;