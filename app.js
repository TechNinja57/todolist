//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  day = "";

  // if (currentDay === 6 || currentDay === 0)
  // {
  //     // res.write("<h1>Its weekend!</h1>");
  //     // res.send();
  //     res.sendFile(__dirname+"/weekend.html");

  // }else{
  //     // res.write("<p>It is not the weekend!</p>");
  //     // res.write("<h1>I have to work</h1>");
  //     res.sendFile(__dirname+"/weekday.html");
  // }
  // // res.send();

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error!");
  }

  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
