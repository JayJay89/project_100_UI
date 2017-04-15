

document.addEventListener("DOMContentLoaded", function(){
'use strict';

/*Debugger 1*/
  var globalVar = "I'm a global variable";
  var a = 1;
  function writeTimesTable(timesTable) {
    var counter;
    var writeString;

    for (counter = 1; counter <= 3; counter++) {
      document.write(counter + " * " + timesTable + " = " + (counter * timesTable) + "<br>");
    }
  }
  writeTimesTable(3);
  console.log(globalVar);

/*Debugger 2*/
  // function firstCall() {
  //   console.log("first call");
  //   secondCall(); 
  // }

  // function secondCall() {
//   console.log("second call");
  //   thirdCall(); 
  // }

  // function thirdCall() {
  //   console.log("third call");
  // }

  // function init() {
  //   debugger;
  //   firstCall(); 
  // }

  // init();
});