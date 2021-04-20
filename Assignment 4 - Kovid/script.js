var slideIndex;
var tag1 = document.getElementById("tag1");
var slides = document.getElementsByClassName("videoScreen");
var vid1 = document.getElementById('story1');
var vid2 = document.getElementById('story2');
var vid3 = document.getElementById('story3');
var vid4 = document.getElementById('story4');
var vid5 = document.getElementById('story5');
var vid6 = document.getElementById('story6');

vid1.addEventListener('ended',function(){document.getElementById("next1").click()});
vid2.addEventListener('ended',function(){document.getElementById("next2").click()});
vid3.addEventListener('ended',function(){document.getElementById("next3").click()});
vid4.addEventListener('ended',function(){document.getElementById("next4").click()});
vid5.addEventListener('ended',function(){document.getElementById("next5").click()});
vid6.addEventListener('ended',function(){slides[5].style.display = "none"; });

// function to open up ig profiles in new tab (by clicking on tags in the last video/story)
function ig(s,n){
	if (vid6.currentTime > s) {
		window.open(n,'_blank' );
		vid6.pause();
	}
	else{
		pauseOrPlay('story6');
	}
}


showSlides(slideIndex);
//for the prev and next arrows
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  if (n > 6) {slideIndex = 1}    
  if (n < 1) {slideIndex = 6}
  for (i = 0; i < 6; i++) {
      slides[i].style.display = "none";  
  }
 slides[slideIndex-1].style.display = "block"; 
}
//function to pause and play video/story upon click
function pauseOrPlay(n){
	var vid = document.getElementById(n)
	if (vid.paused){vid.play();}
	else {vid.pause();}
}	