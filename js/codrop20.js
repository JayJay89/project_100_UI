document.addEventListener('DOMContentLoaded',function(){
  
  const cn_page = document.querySelectorAll('.cn-page');
  const cn_page_item = document.querySelectorAll('.cn-page-item');
  const cn_page_list = document.querySelector('.cnp-page-list');
  const cn_preview_list = document.querySelector('.cnp-preview-list');
  const cn_page_list_length = document.querySelector('.cnp-page-list').children.length;
  const cnp_content = document.querySelectorAll('.cnp-content');

  const cnp_nav_prev  = document.querySelector('.cnp-nav-prev');
  const cnp_nav_next  = document.querySelector('.cnp-nav-next');

  var currentPageList = 1;
  var currentPagePreview = 1;

  const updatePageList = function(){
    var selected = cn_page_list.querySelector('.cn-page:nth-child( ' + currentPageList  + ')');
    [...cn_page].forEach(function(elem){
      elem.classList.remove('active');
    });
    selected.classList.add('active');
  };

  cnp_nav_prev.addEventListener('click',function(){
    currentPageList--;
    if (currentPageList === 0) {
      currentPageList = 1;
    }
    updatePageList();
  });

  cnp_nav_next.addEventListener('click',function(){
    currentPageList++;
    if (currentPageList > cn_page_list_length) {
      currentPageList = cn_page_list_length;
    }
    updatePageList();
  });

  /*Update all cn-page-item with data-index*/
  for(i = 0; i < cn_page_item.length; i++){
    [...cn_page_item][i].setAttribute('data-index',i + 1);
  }

  /*Update all cn-page with data-index*/
  [...cn_page].forEach(function(elem){
    elem.addEventListener('click', function(e){
      if(e.target.className === 'cn-page-item') {
        var target_index = parseInt(e.target.getAttribute('data-index'))

        var current = cn_preview_list.querySelector('.cnp-content:nth-child( ' + currentPagePreview  + ')');
        var selected = cn_preview_list.querySelector('.cnp-content:nth-child( ' + target_index  + ')');

        console.log(currentPagePreview, target_index);

        if (target_index > currentPagePreview) {
          
          selected.className = "cnp-content move-up-show";
          current.className = "cnp-content move-up-hide";

          console.log("moveup");

        } else if (currentPagePreview > target_index) {
          
          selected.className = "cnp-content move-down-show";
          current.className = "cnp-content move-down-hide";
          console.log("movedown");
          
        } else {
          return;
        }

        currentPagePreview = target_index;

      }
    });
  });

});