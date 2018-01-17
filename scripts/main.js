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