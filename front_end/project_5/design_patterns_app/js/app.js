	'use strict';


	function CatCount (pic_url, cat_name){
		this.pic_url = pic_url;
		this.click_count = 0;
		this.cat_name = cat_name;
		return false;

	}

	/* Populate allCats with the cats that will be shown on the page */

	var allCats = [];

	var sleepyCat = new CatCount('http://4.bp.blogspot.com/_RAIC5wwyFQg/S7L9XSPu_6I/AAAAAAAAAAc/GyKdia77ke8/s200/cat.jpg', 'Sleepy Cat');
	allCats.push(sleepyCat);
	var winkingCat = new CatCount('https://pbs.twimg.com/profile_images/2167035896/123cat.jpg', 'Winking Cat');
	allCats.push(winkingCat);

	var cat_name;
	var pic_url;
	var click_count;

	function catClick(element_id_to_be_replaced){
	    var cat_click_p = document.getElementById(element_id_to_be_replaced);
	    var number = cat_click_p.innerHTML;
	    number 	= parseInt(number) + 1;
	    cat_click_p.innerHTML = number;

	}


	var catGrid = document.getElementById('cat_grid');
	catGrid.addEventListener('click', catClick.bind(this, 'number_clicked_0'), false);



function initialAppendCats (){
	for (var i = 0; i < allCats.length; i++){
	cat_name = allCats[i].cat_name;
	pic_url = allCats[i].pic_url;
	click_count = allCats[i].click_count;

	/* Example:
	<div>Music Cat</div>
	<img id='Music Cat' src=musiccaturl>
	*/

	$('.cat').append($('<div>', {text: cat_name}));
	$('.cat').append($('<img>', {id: cat_name, src: pic_url}));
	var catPic = document.getElementById(cat_name);
	catPic.addEventListener('click', catClick, false);

	var click_count_string = 'number_clicked_' + String(i);
	$('.cat').append($('<div>', {text: 'This cat has been clicked'}));
	$('.cat').append($('<p>', {text: 0, id: click_count_string}));
	$('.cat').append($('<div>', {text: 'times.'}));
	//allCats[i].prototype.trackClicks();

	var catPic 	= document.getElementById(cat_name);
	catPic.addEventListener('click', catClick.bind(this, click_count_string), false);
	}


}




initialAppendCats();
/*
CatCount.prototype.trackClicks = function() {
	$('.cat').click(function () {
		console.log('Clicked');
		this.click_count += 1;
		document.getElementById('number_clicked').innerHTML = this.clickCount;
	}
	);

}





function updateCats(){
	for (var i=0; i < allCats.length; i++){
		click_count = allCats[i].click_count;
		var click_count_string = 'number_clicked_' + String(i)
		var click_count_string_hashtag = '#' + click_count_string
		$(click_count_string_hashtag).replaceWith($('<div>', {text: click_count, id: click_count_string}))
	}
}

initialAppendCats();

var catGrid = document.getElementById('cat_grid');
catGrid.addEventListener('click', updateCats, false);
*/
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


