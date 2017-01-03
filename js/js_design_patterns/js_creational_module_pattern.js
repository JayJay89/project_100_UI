/*
  Creational
  Module Pattern - Object Literal
  
  - It's a toolbox
  - Simple Way to Encapsulate Methods
  - Creates a "Toolbox" of functions to use
  - It's a bundle of methods that we can used to interact with the DB
  
  Difference between Module and Constructor is that

  I'm going to have one thing as opposed to create multiple objects in the constructor

  Note that module, factory and singleton pattern is related to database
*/

console.log("running js_module_pattern");

/*PATTERN*/
/*It's collection of keys and functions*/
var module = {
  method: function(){...},
  nextMethod: function(){...}
}

var module = function (){
  var privateVar = "I'm a private variable";

  return {
    method: function(){...},
    nextMethod: function(){...}
  }
}

/*Module Pattern Demo*/
/*
  Related to DB
  Not going into too much detail
*/
