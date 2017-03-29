const js_counter = document.querySelector('.js-counter');
const js_box = document.querySelector('.js-box');

/*Counter and Stop Counter*/
// var counter = 1;
// var timer = setInterval(logCounter, 1000);

// function logCounter(){
//   console.log(counter++);
// }

js_counter.addEventListener('mousedown', function(){
  console.log("timer stopped")
  clearInterval(timer);
});
/*Counter and Stop Counter */

js_box.addEventListener('click', function(e){
  console.log("move");
  // moveBy(e.target, 500, 1);
  // moveBy2(e.target, "left", "px", 0 , 500, 2000);
  moveBy3(e.target);
})

/*http://javascript.info/css-animations*/
/*Prototype 1*/
/*It works, but timing and move distance was inaccurate */
var moveBy = function(movetarget, distance, duration){
  
  var start = Date.now();
  var fps = 20;
  var pos = 0;
  var time =  duration * 1000;

  var moveInterval = setInterval(moveTarget, fps);

  function moveTarget(){
    let timePassed = Date.now() - start;

    if (timePassed >= time) {
      clearInterval(moveInterval);
      console.log("clear!");
      return;
    }

    pos += (distance * fps)/time ;
    movetarget.style.left = pos;
  }
}

/*http://stackoverflow.com/questions/11213259/javascript-animation*/
/*Prototype 2*/
/*This one works well, accurate results as well */
var moveBy2 = function(elem, style, unit, from, to, time){

  var start = Date.now();
  var timer = setInterval(moveTarget, 25);

  function moveTarget(){
    var step = Math.min(1,(new Date().getTime()-start)/time);
    var step2 = Date.now() - start;
    
    console.log("step " + step);
    var distance = to - from;

    elem.style[style] = (from + step * distance ) + unit;

    /*clear interval*/
    if( step == 1) clearInterval(timer);
  }

  elem.style[style] = from + unit;
}

// http://javascript.info/js-animation#setinterval
/*Prototype 3*/
var moveBy3 = function(target){
  let start = performance.now();
  var duration = 500;
  var distance = 300;

  requestAnimationFrame(animate);

  function animate(){
    let timePassed = performance.now() - start;
    let progress = timePassed / duration;

    if (progress > 1) {
      progress = 1;
    }

    moveLeft();

    if (progress == 1) {
      cancelAnimationFrame(animate);
    } else {
      requestAnimationFrame(animate);
    }

    function moveLeft(){
      target.style.left = (distance * progress) + "px"; 
      console.log("timePassed " + timePassed);
      console.log("left " + target.style.left);
      console.log("progress " + progress);
    }
  }
}


