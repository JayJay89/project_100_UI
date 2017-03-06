/*Calling the TweenMax function*/
TweenMax.to('.box-1', 3, {left: 600});

/*QuerySelectorAll was used to find all the .box*/
var box_2 = document.querySelectorAll('.box-2');
var box_3 = document.querySelectorAll('.box-3');
var box_4 = document.querySelectorAll('.box-4');
var box_5 = document.querySelectorAll('.box-5');
var box_6 = document.querySelectorAll('.box-6');
var box_7 = document.querySelectorAll('.box-7');
var box_8 = document.querySelectorAll('.box-8');
var box_9 = document.querySelectorAll('.box-9');
var box_10 = document.querySelectorAll('.box-10');
var box_11 = document.querySelectorAll('.box-11');

/*targeting an object*/
TweenMax.to(box_2, 1, {left: 600});
TweenMax.to(box_2, 0.5, {opacity: 0.1, delay: 1});

/*Using Jquery Selector*/
TweenMax.to($('.box-4'), 1, {left: 600});

/*Selecting an array of object*/
TweenMax.to([box_5, box_6], 1, {left: 600, backgroundColor: '#ff0'});

/*Animating Multiple Properties*/
TweenMax.to([box_7], 1, {
  left: 600, 
  backgroundColor: '#ff0',
  padding: 20,
  borderColor: 'white',
  borderRadius: '50%'
});

/*Animating Transforms*/
TweenMax.to([box_8], 2, {
  x: 600,
  rotation: 360,
  scale: 0.5
});

/*Easing
https://greensock.com/get-started-js#easing
  easeIn,  easeOut,  easeInOut
  CustomEase require yearly membership
*/
TweenMax.to([box_9], 1.2, {
  x: 600,
  ease: Power0.easeOut, //linear
  ease: Back.easeInOut, //easeOut
  ease: Back.easeInOut.config(0.5), //easeOut
});

/*From Tween Starts the object from the defined properties*/
TweenMax.from([box_10], 2, {
  x: 600,
  opacity: 0
});

/*Staggering*/
TweenMax.staggerFrom('.box-stagger', 0.5, {
  opacity: 0,
  y: 200
}, 0.2);

/*Callbacks*/
TweenMax.to(box_11, 1, {left: 600, onComplete:complete});

function complete() {
  console.log("DONE!");
}