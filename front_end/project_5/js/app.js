/* Our data */

var data = {
	'Locations' : {
		'arrLocations': ['park', 'gym']
	}
};

var locationList = [];
var imageList = [];


/* This represents a single tourist location */
function LocationStore(name, icon) {
    this.name = name;
    this.icon = icon;
}



function AppViewModel() {
    this.location = ko.observable("Barcelona, Spain");
    this.Locations = ko.observableArray(data.Locations.arrLocations);
    this.locationList = ko.observableArray([]);

}


var map;
var infowindow;



function initMap() {
  var barcelona = {lat: 41.383, lng: 2.183};

  map = new google.maps.Map(document.getElementById('map'), {
    center: barcelona,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: barcelona,
    radius: 800,
    types: ['gym', 'park', 'store', 'museum', 'zoo']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      console.log(results[i]);
      locationList.push(results[i].name);
      imageList.push(results[i].icon);

    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());
var $wikiElem = $('#wikipedia-links');

$wikiElem.text('');

var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + 'barcelona' + '&format=json&callback=wikiCallback';



$.ajax({
  url: wikiUrl,
  dataType: 'jsonp',
  success: function( response ) {
    var articleList = response[1];

    for (var i = 0; i < locationList.length; i++) {
      locationStr = locationList[i];
      imageIcon = imageList[i];
      var url = 'http://en.wikipedia.org/wiki/' + locationStr;
      $wikiElem.append('<li><a href="' + url + '">' + locationStr + '</a></li');
      $wikiElem.append('<img src="' + imageIcon + '" alt="' + locationStr + '">')
    };
  }
});

