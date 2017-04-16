document.addEventListener('DOMContentLoaded', function(){
  const fom_menu = document.querySelector('.fom-menu');
  const fom_menu_links = document.querySelectorAll('.fom-menu a');
  const fom_menu_first_link = document.querySelector('.fom-menu a:first-child');
  const fom_desc = document.querySelector('.fom-desc');
  const fom_desc_blocks = document.querySelectorAll('.fom-desc > li');
  const fom_hoverblock = document.querySelector('.fom-hoverblock'); 

  var currentSideBlock = 1;
  //Initialization
  fom_hoverblock.style.height = fom_menu_first_link.offsetHeight + 'px';
  fom_hoverblock.style.width = fom_menu_first_link.offsetWidth + 'px';
  fom_hoverblock.style.top = fom_menu_first_link.offsetTop + 'px';
  
  console.log(fom_menu_first_link);

  const warpRightBlockTo = function(elem){
    $(fom_hoverblock).stop().velocity({
      width: elem.offsetWidth + "px",
      top: elem.offsetTop + "px"
    }, 200);
  };

  const stretchBlock = function(index, selected){
    var target = document.querySelector('.fom-desc li:nth-child('  + index + ')');
    var warpWidth = (selected.offsetLeft - 20);

    $(target).stop(true).velocity({
      width: warpWidth + "px",
      left: 0 + "px"
    },400, "ease");
  };

  const collapseBlock = function(){
    [...fom_desc_blocks].forEach(function(elem){
      $(elem).stop(true).velocity({
        width: "0px",
        left: "-100%"
      },400, "ease");
    });
  };

  [...fom_menu_links].forEach(function(elem){

    elem.addEventListener('mouseenter', function(e){
      /*Find Index of Parent of a --> li*/
      currentSideBlock = findIndex(elem.parentNode);

      stretchBlock(currentSideBlock, e.target);
      warpRightBlockTo(e.target);
    });

    elem.addEventListener('mouseleave', function(e){
      collapseBlock();
    });
  });

});