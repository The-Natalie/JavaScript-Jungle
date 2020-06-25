import React from "react";
import postscribe from 'postscribe';
import $ from "jquery";

class SubscriptionForm extends React.Component { 

  componentDidMount() {

    postscribe("#script","<script src='//web.webformscr.com/apps/fc3/build/loader.js' sp-form-id='3482dc1028115f249345d173b00076fa30757cc439b81069ac3bbd97b2ce3839'></script>");

    $(document).ready(function(){
      $(".sp-message-success h3").remove();
      $("div#script style").remove();
      setTimeout(function() {
        $(".sp-message-success h3").remove();
        $("div#script style").remove();
        $("<div><h2>Subscribe</h2></div>").insertBefore("form");
        $("div.sp-field").css({"margin-left": "15px"});
        $("div.sp-link-wrapper.sp-brandname__left").insertBefore("div.sp-field.sp-button-container").css({"text-align": "center"});
        $("div.sp-field.sp-button-container").css({"text-align": "center", "margin-left": 0});
        $("button.sp-button").text("Submit").css({"background": "none", "color": "#ffffff", "width": "100%", "margin-top": "5px", "font-size": "1.7em", "padding": "12px 0 12px 0", "border": "none", "border-top": "1px white solid", "line-height": "100%", "border-radius": "none", "overflow": "visible"});
        $("button.sp-button").hover(function(){
          $(this).css({"color": "#ab2900"});}, function(){
          $(this).css({"color": "white"});
        });
        $(".sp-form .sp-field").css({"padding": "8px 0 8px 0"});
        
        if ($("div#script").height() < "325") {
          $("div#info").css({"padding-bottom": "150px"});
          $("div#script").css({"padding-bottom": "40px"});
        }
      }, 2000);

      if ($("div.sp-message-success p:first-child").text() !== "") {
        $("div.sp-message.sp-message-success h3").remove();
        $("h3").css({"display": "none"});
        $("div.sp-message-success").css({"height": "300px"});
        if ($("div#script").height() < "325") {
            $("div#info").css({"padding-bottom": "150px"});
            $("div#script").css({"padding-bottom": "40px"});
          }
        $("div.sp-message-success p:first-child").css({"text-align": "center", "padding-bottom": "30px", "padding-top": "20px"});
        $("div.sp-message-success p:nth-child(3)").css({"padding-left": "10px", "padding-right": "10px"}); 
      }
    });
  };

  render () { 
    return (
      <div>
        <div id="script"></div>
      </div>
    )
  }
}

export default SubscriptionForm;