'use strict';


function catClick(Cat, element_id_to_be_replaced){
    var cat_click_p = document.getElementById(element_id_to_be_replaced);
    Cat.click_count += 1;
    cat_click_p.innerHTML = Cat.click_count;
}


//Returns the CatCount object for the button that was clicked
function buttonClick(allCats, element_id_to_be_replaced){
	var cat_click_button = document.getElementById(element_id_to_be_replaced);
	console.log(cat_click_button);
	for (var i = 0; i < allCats; i++){
		var cat = allCats[i]
		console.log(cat);
		if (cat.cat_button_string == element_id_to_be_replaced){
			console.log(cat);
			return cat;
		}
	}

}

$(function(){
	var allCats = [];
	var model = {
		init: function() {
			/* Cat object */
			function CatCount (pic_url, cat_name, cat_button_string) {
				this.pic_url = pic_url;
				this.click_count = 0;
				this.cat_name = cat_name;
				this.cat_button_string = cat_button_string;
				return false;
				}
			/* Populate allCats with the cats that will be shown on the page */
			

			var sleepyCat = new CatCount('http://www.jigzone.com/p/jz/jzC/CatNap.jpg', 'Sleepy Cat', 'cat_button_0');
			allCats.push(sleepyCat);
			var pensiveCat = new CatCount('http://www.fndvisions.org/img/cutecat.jpg', 'Pensive Cat', 'cat_button_1');
			allCats.push(pensiveCat);
			var musicCat = new CatCount('http://petsfans.com/wp-content/uploads/2014/12/PianoCat.jpg', 'Music Cat', 'cat_button_2');
			allCats.push(musicCat);
			var bunnyCat = new CatCount('http://animalxwallpaper.info/wp-content/uploads/2015/05/cute-rabbit-and-cat-hd-photorabbit-cute-n-tiny---part-3-ibqbnwv9.jpg',
				'Bunny Cat', 'cat_button_3');
			allCats.push(bunnyCat);
			var puppyCat = new CatCount('http://2.bp.blogspot.com/-IpkGTeR9zKs/T3MPd8Bi_bI/AAAAAAAAAMU/Y2AK6oybkNg/s640/1104607golden-retriever-puppy-and-kitten-posters.jpg',
				'Puppy Cat', 'cat_button_4');
			allCats.push(puppyCat);
			var vintageCat = new CatCount('http://s2.favim.com/orig/37/cat-cuddling-cute-cuteness-kitten-Favim.com-306836.jpg', 
				'Vintage Cat', 'cat_button_4');
		},
		getAllCats: function() {
			return allCats;
		}
	}

	var octopus = {

		getCats: function() {
			return model.getAllCats();
		},

		init: function(){
			model.init();
			view.init();
			view.renderCatViewingArea(allCats[0]);
			view.renderToolbar(allCats);
		
	} }

	var view = {
		init: function() {
			allCats = octopus.getCats();

			//view.initialAppendCats(allCats);
			

		},
		initialAppendCats: function(allCats) {
			for (var i = 0; i < allCats.length; i++){
				
				var cat_name = allCats[i].cat_name;
				var pic_url = allCats[i].pic_url;
				var click_count = allCats[i].click_count;

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
				$('.cat').append($('<div>', {text: 'times. '}));
				$('.cat').append($('<p>')); //newline

				var catPic 	= document.getElementById(cat_name);
				catPic.addEventListener('click', catClick.bind(this, allCats[i], click_count_string), false);
				}
			},



			renderToolbar: function(allCats) {
				for (var i=0; i < allCats.length; i++){
					var cat_name = allCats[i].cat_name;
					
					var cat_button_string = 'cat_button_' + String(i)

					$('.nav').append($('<li>', {id: cat_button_string,
						'html': $('<a>', {href : '#', text: cat_name})}));

					var button = document.getElementById(cat_button_string);
					//TODO: Fix this event listener
					var a = button.addEventListener('click', buttonClick.bind(this, allCats, cat_button_string), false);
					console.log(a);
				}
			},
			renderCatViewingArea: function(cat) {
				var cat_name = cat.cat_name;
				var pic_url = cat.pic_url;
				var click_count = cat.click_count;

				/* Example:
				<div>Music Cat</div>
				<img id='Music Cat' src=musiccaturl>
				*/

				$('.cat').append($('<div>', {text: cat_name}));
				$('.cat').append($('<img>', {id: cat_name, src: pic_url}));
				var catPic = document.getElementById(cat_name);
				catPic.addEventListener('click', catClick, false);

				var click_count_string = cat.cat_button_string
				$('.cat').append($('<div>', {text: 'This cat has been clicked'}));
				$('.cat').append($('<p>', {text: 0, id: click_count_string}));
				$('.cat').append($('<div>', {text: 'times. '}));
				$('.cat').append($('<p>')); //newline

				var catPic 	= document.getElementById(cat_name);
				catPic.addEventListener('click', catClick.bind(this, cat, click_count_string), false);
			}


		}

	
        /*<div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Cat No. 1</a></li>
                <li><a href="#">Cat No. 2</a></li>
                <li><a href="#">Cat No. 3</a></li>
                <li><a href='#'>Cat No. 4</a></li>
                <li><a href='#'>Cat No. 5</a></li>
            </ul>
        </div>*/
	
	octopus.init();




});





