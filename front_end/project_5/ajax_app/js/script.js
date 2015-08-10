'use strict';
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');


    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var inputStreet = $('#street').val();
    var inputCity = $('#city').val();
    var address = inputStreet + ',' + inputCity;

    $greeting.text('So, you want to live at ' + address + '?');

    console.log(inputStreet);
    console.log(inputCity);

    // YOUR CODE GOES HERE!
    var streetviewUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + "";
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');


    $.getJSON();
    var nytBaseUri = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?';
    var key = 'fcdb7141f851975b09dc286a15642cb2:18:72659913';

    var nytUrl = nytBaseUri + 'q=' + inputCity + '&api-key=' + key + '';
    console.log(nytUrl);

    $.getJSON(nytUrl, function(data) {
            $nytHeaderElem.text('New York Times Aricles About' + city);

    articles = data.response.docs;

    for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>' + article.snippet + '</p>'+'</li>');
    };

});
    return false;
};

$('#form-container').submit(loadData);
