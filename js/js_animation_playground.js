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
  moveBy(e.target, 270, 1);
})

/*http://javax3script.info/js-animation*/
var moveBy = function(target, distance, seconds){
  
  var pos = 0;
  var toPosition = distance;
  const fps = 1;
  var time =  seconds * 1000;

  var moveInterval = setInterval(moveTarget, fps);

  function moveTarget(){
    if (pos == toPosition) {
      clearInterval(moveInterval);
    } else {
      pos += (distance/time);
      console.log(pos);
      target.style.left = pos + 'px';
    }
  }

  /*The answer is to calculate the time passed, rather than how far this guy reach*/
}




