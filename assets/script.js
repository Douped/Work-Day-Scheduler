var saveBtnEl = $(".saveBtn");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtnEl.on("click", function () {
    //sets timeBlock equal to the closest div tag with a time-block class
    var timeBlock = this.closest(".time-block");
    //gets the id of the time block
    var timeBlockId = timeBlock.id;
    //get the text written in the textbox
    var textBox = timeBlock.querySelector(".description");
    var userInput = textBox.value;
    //save to local storage
    localStorage.setItem(timeBlockId, userInput);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // get all of the time blocks
  var timeBlocks = document.querySelectorAll(".time-block");
  //get the current hour as a number
  var currentHour = parseInt(dayjs().format('H'));
  // loop through the time blocks
  for (x = 0; x < timeBlocks.length; x++) {
    //get the number on the right side of the dash in the id and turn the string into a number
    var hour = parseInt(timeBlocks[x].id.split("-")[1]);
    //compare hour to the current hour and add classes accordingly
    if (hour < currentHour) {
      timeBlocks[x].classList.add("past");
    } else if (hour > currentHour) {
      timeBlocks[x].classList.add("future");
    } else {
      timeBlocks[x].classList.add("present");
    }
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //IT WORKS
    timeBlocks[x].querySelector(".description").value = localStorage.getItem(timeBlocks[x].id);
  }

  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMM D"));
});
