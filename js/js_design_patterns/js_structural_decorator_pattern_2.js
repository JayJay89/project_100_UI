
/*
  Creating a subObject
*/

console.log("running js_decorator_pattern");

var task = function (name){
  this.name = name;
  this.completed = false;
}

task.prototype.complete = function(){
  console.log(this.name + " is completed!");
  this.completed = true;
}

task.prototype.save = function (){
  console.log("Saving " + this.name);
}

var myTask = new task('My Task');
// myTask.complete();
// myTask.save();

/*Creating a urgentTask constructor blueprint*/
var urgentTask = function(name, priority){
  task.call(this, name);
  this.priority = priority;
}

/*
  However urgentTask still doesn't have the save and complete prototype
*/

// The following works but remember that if we change task's save(), urgentTask.save() will be affected as well because they are tied 
// urgentTask.prototype.save = task.prototype.save;

// urgentTask.prototype = Object.create(task.prototype);

/*Earlier urgentTask had the ability to notify important ppl*/
urgentTask.prototype.notify = function(){
  console.log('notifying important ppl');
};

urgentTask.prototype.save = function(){
  console.log('Doing awesome stuff before saving');
  this.notify();
  task.prototype.save.call(this);
}

var myUrgentTask = new urgentTask("SUPER URGENT TASK", 5);



