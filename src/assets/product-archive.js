
document.addEventListener("DOMContentLoaded",function(){
showDetails();

function showDetails(){
  var btns = document.querySelectorAll('.learn-more');
  btns.forEach(function(btn, index){
    btn.addEventListener("click", function(){
      btn.nextElementSibling.classList.toggle("hide")
    })
  });
}
});
