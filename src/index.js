import React from "react";
import ReactDOM from "react-dom";

var curHr = new Date().getHours();

let timeOfDayColor = { color: "" };
let timeOfDayMessage;

if (curHr < 12 && curHr >= 0) {
  timeOfDayColor.color = "red";
  timeOfDayMessage = "Good Morning";
} else if (curHr >= 12 && curHr <= 18) {
  timeOfDayColor.color = "green";
  timeOfDayMessage = "Good Afternoon";
} else {
  timeOfDayColor.color = "blue";
  timeOfDayMessage = "Good Evening";
}

ReactDOM.render(
  <h1 className="heading" style={timeOfDayColor}>
    {timeOfDayMessage}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
