'use strict';




function CatCount (pic_url, cat_name){
	this.pic_url = pic_url;
	this.click_count = 0;
	this.cat_name = cat_name;


}

CatCount.prototype.trackClicks = function() {
	$('.cat').click(function () {
		console.log('Clicked');
		this.click_count += 1;
		document.getElementById('number_clicked').innerHTML = this.clickCount;
	}
	);
}

var allCats = [];

var musicCat = new CatCount('http://thepetproductguru.com/wp-content/uploads/2012/05/CAT-HEADPHONES.jpeg', 'Music Cat');
allCats.push(musicCat);
var winkingCat = new CatCount('https://pbs.twimg.com/profile_images/2167035896/123cat.jpg', 'Winking Cat');
allCats.push(winkingCat);

var cat_name;
var pic_url;
var click_count;

function appendCats (){
	for (var i = 0; i < allCats.length; i++){
	cat_name = allCats[i].cat_name;
	pic_url = allCats[i].pic_url;
	click_count = allCats[i].click_count;
	$('.cat').append($('<div>', {text: cat_name}));
	$('.cat').append($('<img>', {id: cat_name, src: pic_url}));
	$('.cat').append($('<div>', {text: 'This cat has been clicked'}));
	$('.cat').append($('<div>', {text: click_count, id:'number_clicked'}));
	$('.cat').append($('<div>', {text: 'times.'}));
	allCats[i].prototype.trackClicks();
	}
}

appendCats();

/*
(function() {
	var catClickCounter = 0;

	$('.cat').click(function () {
		console.log('Clicked');
		catClickCounter += 1;
		document.getElementById('number_clicked').innerHTML = catClickCounter;
	}
	);

})
();*/


