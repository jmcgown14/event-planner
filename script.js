// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


// PSEUDOCODE
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
  // we want to use DayJS to display the current date
    // make sure the DayJS CDN link exisits in the HTML
      // create a variabel, get Dayjs()
      // got to the Docs
        // set the format
      // Set the current time to an element in the Html




$(document).ready(function) {

  // Save Button Click
  document.getElementsByClassName("saveBtn").addEventListener('click', function() {

  // next are steps of saving the individual text in the boxes and how to associate that correctly in local storage to the correct box
  var info = document.getElementsByClassName('description');
  var timeID = document.getElementById('');

  },


  //what to use with .getitem to pull from local stogare?






var currentDate = (dayjs().format('ddd, MMMM D'));
document.getElementById("currentDate").innerHTML = currentDate;

// How do I make this a 24 hour clock?
$(function updateHour(){
  var currentHour = dayjs().hour()
})

$('.timeblock').each(function(){
  var timeSlot = parseInt($(this).attr('id'));
  if (currentHour === timeSlot){
    $(this).removeclass("past")
    $(this).removeclass("future")
    $(this).addclass("present")
  } else if (currentHour > timeSlot){
    $(this).addclass("past")
    $(this).removeclass("future")
    $(this).removeclass("present")
  } else {
    $(this).removeclass("past")
    $(this).addclass("future")
    $(this).removeclass("present")
  }
})
}

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
  // complete the rest of the timeblocks form the three that were given to us in the HTML file
    // remove static past, present, future clases
    // find a way to progomatically (function) add or remove the appropriate class
    // NOTE: colors need to shift at the START of a new hour

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // compare the time block (the hour that it is) against the current time from DayJS(). THen apply the correct class based on the comparison




// WHEN I click into a timeblock
// THEN I can enter an text
  // grab text input (text area)
  // 





// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
  // Eventlistener on the save button
    // create a variable, get the value
    // set it to local storage (what will data in local storage look like?)
      // times: [{},{}]





// WHEN I refresh the page
// THEN the saved events persist (confirms that data was entered into local storage)
  // getting from localStorage
  // Parse the data from localStorage to turn it back into an object (if the data was stored as a JSON)

// Look at miniproject = should match very well
// Activity 10 - Event delegation
// Activity 2 - jquerey methods refresher addClass
// activities for localStorage
// Activity 8 potentially for DOM traversal in regards to save buttons