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


$(document).ready(function() {
  // Save Button Click
  $(".saveBtn").on('click', function () {
    // next are steps of saving the individual text in the boxes and how to associate that correctly in local storage to the correct box
    var info = document.getElementsByClassName('description');
    var timeID = document.getElementById('');
  });

  //what to use with .getitem to pull from local stogare?

  var currentDate = (dayjs().format('ddd, MMMM D'));
  document.getElementById("currentDate").innerHTML = currentDate;
  var currentHour = dayjs().hour()
 
  $(function updateHour() {
    var currentHour = dayjs().hour()
  });

// runs funtion to change background to past, present, and future depening on current time
  $(".time-block").each(function () {
    var timeSlot = parseInt($(this).attr('id').split("-")[1]);
    if (currentHour === timeSlot) {
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    } else if (currentHour > timeSlot) {
      $(this).addClass("past")
      $(this).removeClass("future")
      $(this).removeClass("present")
    } else {
      $(this).removeClass("past")
      $(this).addClass("future")
      $(this).removeClass("present")
    }
  });
});


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