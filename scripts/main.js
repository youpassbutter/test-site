var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/shovel-knight-art.jpg') {
		myImage.setAttribute ('src','images/shovel-of-hope.png');
	} else if(mySrc === 'images/shovel-of-hope.png') {
		myImage.setAttribute ('src','images/specter-of-torment.jpg')
	} else if(mySrc === 'images/specter-of-torment.jpg') {
		myImage.setAttribute ('src','images/plague-of-shadows.png')
	} else {
		myImage.setAttribute ('src','images/shovel-knight-art.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to the Shovel Knight fan page, ' + myName + '!';
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to the Shovel Knight fan page, ' + storedName + '!';
}

myButton.onclick = function() {
	setUserName();
}