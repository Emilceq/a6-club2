
$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 21
    if ( age >= 21 ) {
      //if age is greater than 21 show the next question
      $("#year-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
    
  });

  $("#year-submit").click(function(){
    var yearbornString = $("#year-born").val();
    var yearborn = parseInt(yearbornString);
    console.log("got the value");

    if ( yearborn < 1996 ) {
      $("#year-form").hide();
      $("#answer").text("You're in!");
      $("#club-img").attr("src", "http://i.giphy.com/wcBHNxXOXWOXe.gif");
      console.log("this is less than 1996");

    } else {
      console.log("this is greater than 1996");
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://i.giphy.com/wcBHNxXOXWOXe.gif");
      console.log("this works");

  }

  });

  $("#president-submit").click(function(){
    var whoisString = $("#who-is").val();
   
   if ( whoisString === "Barack Obama") {
    console.log("True!"); 
    $("#president-form").hide();
    $("#answer").text("You're in!");
    $("#club-img").attr("src", "http://i.giphy.com/wcBHNxXOXWOXe.gif");

   } else {
    $("#answer").text("scram, youre too young.");
    console.log("Go away.");

   }

 });

  $("#states-submit").click(function(){
    var statesString = $("#statesString").val();
    var states =parseInt ("statesString");

    if ( states = 50) {
      console.log("yes!!");
      $("#states-form").hide();
      $("#answer").text("You're in!");
      $("#club-img").attr("src", "http://i.giphy.com/wcBHNxXOXWOXe.gif");
      console.log("yup yup");
    
    } else{
      $("#answer").text("scram, you're too young.");
      console.log("go away.");

      }
    });

  });