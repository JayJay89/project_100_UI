/*Basics of Objects Creation, Inheritance*/
var task = {
  taskName: 'myTask',
  taskDescription: 'myTask Description',

  /*Usually we define object properties this way*/
  taskReturnInfo: function(){
    return this.taskName + " " + this.taskDescription; 
  }
}

/*However they can be easily overwritten */
task.taskReturnInfo = "Hi";
/*This would result in an error*/
// taskReturnInfo();

/*To protect properties from being overwritten, we can use the Objecy.defineProperty method*/
Object.defineProperty(task, 'taskReturnInfoBetter', {
  value: function(){
    return this.taskName + " " + this.taskDescription;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

/*Since writable has been set to false, we won't be able to overwrite this property*/
task.taskReturnInfoBetter = "lol";

/*
  If enumerable is set to true, we will see all the keys ["taskName", "taskDescription", "taskReturnInfo", "taskReturnInfoBetter"]
  If enumerable is set to false, we will see all the keys ["taskName", "taskDescription", "taskReturnInfo"]
  Only showing those which are defined in the original task object.
*/

console.log(Object.keys(task));

/*Configurable means that the properties can reconfigured, setting it to false will prevent it from being reconfigured*/

/*This creates an urgentTask object which inherits from task*/
var urgentTask = Object.create(task);
