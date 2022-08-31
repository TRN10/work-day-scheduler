// Display current time and day at top of page

// var currentDayEl = $("#currentDay");

// currentDayEl.text(moment().format('LLL');)

// Check state of page?

var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);