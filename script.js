var picArray = ["img/dog.png","img/cow.png","img/pig.png","img/cock.png","img/frog.png"];
var howManyPics = picArray.length;
var prevPic = Math.floor((Math.random() * howManyPics));

var img1 = document.getElementById("win1");
var img2 = document.getElementById("win2");
var img3 = document.getElementById("win3");
var img4 = document.getElementById("win4");

var images = [img1,img2,img3,img4];
console.log(images.length);
var selected1, selected2, selected3, selected4;

var imageClicked;
var won = false;

function changePicture (img) {
	var picIndex = randomPic(howManyPics);
	img.setAttribute("src",picArray[picIndex]);
	img.setAttribute("pic",picIndex);
	}
    


function randomPic (range){
	do {
		var i = Math.floor((Math.random() * range));
	}
	while (i==prevPic);
	prevPic=i;	
	return i;
	}


function checkWin(){
	var pic1 = img1.getAttribute("pic");
	var pic2 = img2.getAttribute("pic");
	var pic3 = img3.getAttribute("pic");
	var pic4 = img4.getAttribute("pic");
	 console.log(pic1,pic2,pic3,pic4);		
	if (pic1==pic2 && pic2==pic3 && pic3==pic4){
		console.log("won");
		return true;
	}
}	

function celebrate(){
	alert("Gratulacje!!!");
}

for (var i=0; i<images.length;i++){
	var image = images[i];
	
	console.log("pentla");
	
	image.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
		if (checkWin()==true){
			celebrate();	
		}
	}; 
}

/*
img1.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

img2.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

img3.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

img4.onclick = function() {
	imageClicked = this;
	changePicture(imageClicked);
	if (checkWin()==true){
		celebrate();	
	}
};

* */


