/* Our data */

var data = {
	'Locations' : {
		'arrLocationTypes': ['park', 'gym'],
        'arrLocationNames': [],
        'arrLocationImageUrls': [],
	}

};


var AppViewModel = {
    location : ko.observable("Barcelona, Spain"),
    Locations : ko.observableArray(data.Locations.arrLocationTypes),
    placesList : ko.observableArray(data.Locations.arrLocationNames),
    imageList : ko.observableArray(data.LocationImageUrls),
};


var map, infowindow, markers = [];



function initMap() {
  var barcelona = {lat: 41.383, lng: 2.183};

  map = new google.maps.Map(document.getElementById('map'), {
    center: barcelona,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  AppViewModel.Locations.subscribe(function (newValue) {
    console.debug('Chaging', newValue);
    for (var i=0; i<markers.length; i++){
        markers[i].setMap(null);
    }
    markers = []; //reset the markers at the beginnign of each query

    service.nearbySearch({
        location: barcelona,
        radius: 800,
        types: newValue
    }, callback);
    });
    AppViewModel.Locations.notifySubscribers();




}


function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
      console.log(results[i]);
      AppViewModel.placesList.push(results[i].name);
      AppViewModel.imageList.push(results[i].icon);

    }

      var $wikiElem = $('#wikipedia-links');
    $wikiElem.text('');

    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + 'barcelona' + '&format=json&callback=wikiCallback';



    $.ajax({
      url: wikiUrl,
      dataType: 'jsonp',
      success: function( response ) {
        var articleList = response[1];

        for (var i = 0; i < AppViewModel.placesList().length; i++) {
          locationStr = AppViewModel.placesList()[i];
          imageIcon = AppViewModel.imageList()[i];
          var url = 'http://en.wikipedia.org/wiki/' + locationStr;
          $wikiElem.append('<li><a href="' + url + '">' + locationStr + '</a></li');
          $wikiElem.append('<img src="' + imageIcon + '" alt="' + locationStr + '">')
        };
      }
    });
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
  markers.push(marker);
}


// Activates knockout.js
ko.applyBindings(AppViewModel);
initMap();







