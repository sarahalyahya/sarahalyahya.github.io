
/*animating the scroll upon pressing the down arrow button on the home page */
let downButton = document.getElementById('downArrow');


downButton.addEventListener('click', scroll);


function scroll(){

	if (this.id === 'downArrow'){
		window.scrollTo({
			top: window.innerHeight, left:0,
			behavior: 'smooth'
		});

	}

}


