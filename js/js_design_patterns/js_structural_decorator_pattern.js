/*
  Structural Design Patterns
  - Concerned with how objects are made up and simplify relationships between objects

  Deals with the relationship of Objects
  - Extend functionality
  - Simplify functionality
*/

/*
  Decorator Pattern
  Used to add new functionality to an existing object, without being obtrusive

  - more complete inheritance (how to fully inherit an object in JS)
  - wraps an object and protects existing ones.
  - I want to be able to add new functionality while protecting the old ones
*/

console.log("running js_decorator_pattern");

var work = function (name){
  this.workName = name;
  this.completed = false;
}

work.prototype.complete = function(){
  console.log(this.workName + " is completed!");
  this.completed = true;
}

work.prototype.save = function (){
  console.log("Saving " + this.workName);
}

var myWork = new work('My Work');
// myWork.complete();
// myWork.save();

//What I want to achieve here is to be able to create new features without harming the ones that I had.
var urgentTask = new work('Urgent Work');

//Note that urgentTask is decorated with a new property(priority), and a new function(notify)
urgentTask.priority = 2;
urgentTask.notify = function(){
  console.log('notifying important ppl');
}
// urgentTask.notify();
// urgentTask.complete();
// urgentTask.save();

/* We can even take it one step further */
var superTask = new work('Super Work');

superTask.priority = 2;
superTask.notify = function(){
  console.log('notifying important ppl');
}
superTask.save = function (){
  this.notify();
  work.prototype.save.call(this);

  // Using "call(this)" here will result in calling in line 31 which is
  // console.log("Saving " + this.workName);
};

superTask.notify();
superTask.complete();
superTask.save();

/*
  What if you want to create multiple urgent tasks?? 
  You would have to repeat the code above multiple times.
  go to js_structural_decorator_pattern_2 for more info
*/


// EXTRA STUFF - How prototype.call works
// EXAMPLE 0 //

var addToThis = function(a){
  return "hohohoh"
};

addToThis.call(this); // returns "hohohoh"

// EXAMPLE 1 //
  var obj = {num:2};
  var addToThis = function(a){
    return this.num + a 
  };
  addToThis.call(obj, 3); // returns 5

// EXAMPLE 1a //
  var douglas = {
    person: 'Douglas Crockford', 
    role: 'Javascript Developer'
  };

  function greet() {
    console.log(this.person + "Is An Awesome" + this.role);
  }

  greet.call(douglas); // Douglas Crockford Is An Awesome Javascript Developer

// EXAMPLE 2 //
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }

  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }

  var cheese = new Food('feta', 5);
  var fun = new Toy('robot', 40);

//EXAMPLE 3 //
  var dude = function (name) {
    this.name = name;
  }

  dude.prototype.shout = function (){
    console.log(this.name + " is shouting");
  }

  var chillDude = new dude('Chillman');
  var superDude = new dude('Clark Kent');

  //By default both these objects will have a shout prototype inherited from dude object
  chillDude.shout(); //'Chillman is shouting'
  superDude.shout(); //'Clark Kent is shouting'

  //Superdude's shout is being overwritten here to include a special console.log feature.
  superDude.shout = function (){
    console.log("This is a superman shouting");
    dude.prototype.shout.call(this)
  };