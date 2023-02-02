$(document).ready(function() {
  // Save Button Click
  $(".saveBtn").on('click', function () {
    // next are steps of saving the individual text in the boxes and how to associate that correctly in local storage to the correct box

    var info = $(this).siblings(".description").val()
    console.log(info);
    var timeID = $(this).parent().attr("id")
    console.log(timeID);

    localStorage.setItem(timeID, info)
  });

  //what to use with .getitem to pull from local stogare
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



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