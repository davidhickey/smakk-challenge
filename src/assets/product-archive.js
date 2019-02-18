document.addEventListener("DOMContentLoaded",function(){
showSort();
showDetails();
//opens and closes "learn More" details div on collection.product-archive.liquid
function showDetails(){
  var btns = document.querySelectorAll('.learn-more');
  btns.forEach(function(btn, index){
    var details = btn.nextElementSibling
    var close = details.firstElementChild
    btn.addEventListener("click", function(){
      details.classList.toggle("hide")
    });
    close.addEventListener("click", function(){
      details.classList.toggle("hide")
    });
  });
}
function showSort(){
  sort = document.querySelector('.sort-dropdown');
  dropdown = document.querySelector('.sort-options-container')
  sort.addEventListener("click", function(){
    dropdown.classList.toggle("hide");
  });

}
});
