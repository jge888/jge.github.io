const burger = document.getElementById('burger');
const hoverDiv = document.getElementById('hover_div');

$(function(){
$('#burger').click(function(){
    $('#hover_div').toggle(200)


})

})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
    x[i].style.transition = 'all 2s'
    
  }
  x[slideIndex-1].style.display = "block";  
}




