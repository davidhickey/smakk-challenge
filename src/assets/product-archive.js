document.addEventListener("DOMContentLoaded",function(){
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
});
