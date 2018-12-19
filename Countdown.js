//This file contains the external JavaScript for the Countdown.html file.

$(document).ready(function() {
  $("#submit").click(function() {
    convertMillis();
    subtract();
  });

  //The value that the user enters into the text field.
  var collection = document.getElementById("colldate").value;
  // Get todays date and time
  var today = new Date();
  //var patient = document.getElementByName("patname")[0].value;

  //Check if the text field contains any data. If it does not, display an alert box.
  function emptyCheck() {
    if (collection === "") {
      //|| patient === "")
      alert("The required field is null!");
    }
  }

  // Set the date we're counting down to
  //var countDownDate = new Date(collection).getTime();

  // Update the count down every 1 second
  //var x = setInterval(function() {

  function convertMillis() {
    //Convert 'today' into milliseconds and output it to the console.
    var ms = today.getMilliseconds();
    console.log(ms);
  }

  // Find the distance between now and the count down date
  function subtract() 
  {
    if (collection != "") 
    {
      var difference = today - collection;
      console.log(difference);
    } 

    else if (collection == "" || !moment().format("MM/DD/YYYY").isValid()) 
    {
      emptyCheck();
    }
  }
});

// Time calculations for days, hours, minutes and seconds
/**var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);**/