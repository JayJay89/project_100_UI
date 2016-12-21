/*
Creational
Constructor Pattern - Create objects from functions

The new keyword
- Creates a brand new object
- Links to an object prototype
- Bind 'this' to the new object scope
- Implicitly returns this
*/

console.log("running js_constructor_pattern");

/*PATTERN*/

function ObjectName(x, y){
  this.param1 = x;
  this.param2 = y;
  this.toString = function () {
    return this.param1 + ' ' + this.param2
  }
}

/*COMMON CONSTRUCTOR*/

var task = function (name){
  this.taskName = name;
  this.completed = false;

  this.completeTask = function(){
    console.log(this.taskName + " is completed!")
    this.completed = true;
  }

  this.saveTask = function(){
    console.log("Saving task " + this.taskName);
  }

  /* Note that this function will be created on all objects. Which means that it's repeated 4 times for all objects.     To solve this problem, we use prototypes.
  */
}

var task1 = new task("Clean the dishes");
var task2 = new task("Clean the cups");
var task3 = new task("Clean the mouses");

task1.completeTask();
task2.saveTask();
task3.saveTask();

/*PROTOTYPE*/
var task_ver2 = function (name){
  this.taskName = name;
  this.completed = false;
}

task_ver2.prototype.completeTask = function(){
  console.log(this.taskName + " is completed!");
  this.completed = true;
}

task_ver2.prototype.saveTask = function (){
  console.log("Saving task " + this.taskName);
}

var taskA = new task_ver2("Clean the dishes");
var taskB = new task_ver2("Clean the cups");
var taskC = new task_ver2("Clean the mouses");

taskA.completeTask();
taskB.saveTask();
taskC.saveTask();

/*ECMASCRIPT 2015 CLASSES*/
class task_ver3 {
  constructor (name) {
    this.taskName = name;
    this.completed = false;
  };
  completeTask(){
    console.log(this.taskName + " is completed!");
    this.completed = true;
  }
  saveTask() {
    console.log("Saving task " + this.taskName);
  }
}

var taskA1 = new task_ver3("Clean the dishes");
var taskB1 = new task_ver3("Clean the cups");
var taskC1 = new task_ver3("Clean the mouses");

taskA1.completeTask();
taskB1.saveTask();
taskC1.saveTask();