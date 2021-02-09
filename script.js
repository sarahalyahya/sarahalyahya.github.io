var slideIndex = 1;
//this displays the first image
showDivs(slideIndex);

//this is when the arrow is clicked, so the slide show moves between left n right
function plusDivs(n) {
  showDivs(slideIndex += n);
}

//alternates between hiding slides that don't correspond to the index and showing the chosen one
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} //loops back to the start
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) { //it continues through the slides
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block" ;
}