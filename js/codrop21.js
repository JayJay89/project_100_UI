document.addEventListener('DOMContentLoaded', function(){
  const aoe = document.querySelector('.aoe');
  const aoe_image_container = document.querySelectorAll('.aoe-image-container');

  // [...aoe_image_container].forEach(function(elem){
  //   console.log(elem);
  // })

  aoe.addEventListener('click', function(e){
    
    if (e.target.classList.contains('aoe-image-container')) {
      var target = e.target;
      var target_overlay = target.querySelector('.aoe-overlay ');
      target.classList.toggle('expand');

      if (target.classList.contains('expand')){
        target_overlay.className = 'aoe-overlay expand';
      } else {
        target_overlay.className = 'aoe-overlay normal';
      }

    }

  });

});