// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI




function AppViewModel() {
    this.location = ko.observable("Barcelona, Spain");
    this.gymBox = ko.observable(true);
    this.parkBox = ko.observable(true);
    this.storeBox = ko.observable(true);
    this.museumBox = ko.observable(true);
    this.zooBox = ko.observable(true);




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
