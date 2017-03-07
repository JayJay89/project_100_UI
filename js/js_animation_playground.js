const js_counter = document.querySelector('.js-counter');
const js_animate_the_box = document.querySelector('.js-animate-the-box');
const box = document.querySelector('.box');
const box_2 = document.querySelector('.box-2');
const box_3 = document.querySelector('.box-3');

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

/*Move Element*/
function moveTest (elem) {
  var left = 0;
  function frame(){
    left++;
    elem.style.left = left + 'px';
    if (left == 100) {
      clearInterval(animateBox);
    }
  }
  var animateBox = setInterval(frame, 10);
}

js_animate_the_box.addEventListener('mousedown', function(){
  moveTest(box);
});
/*Move Element*/

/*Animate*/
function animate(opts) {
  
  var start = new Date

  var id = setInterval(function() {
    var timePassed = new Date - start
    var progress = timePassed / opts.duration

    console.log(timePassed);
    console.log(progress);

    if (progress > 1) {progress = 1}
    var delta = opts.delta(progress)
    opts.step(delta)
    
    if (progress == 1) {
      clearInterval(id)
    }
  }, opts.delay || 10)
}

function move(element, delta, duration) {
  var to = 100;
  console.log(delta);
  animate({
    delay: 20,
    duration: duration || 100, // 1 sec by default
    delta: delta,
    step: function(delta) {
      element.style.left = to*delta + "px"    
    }
  })
}

box_2.addEventListener('mousedown', function(e){
  move(e.target, function(p) {return p});
})
/*Animate*/





