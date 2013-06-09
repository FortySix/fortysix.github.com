$.backstretch("img/topbg.jpg");

$(document).ready(function() {

  $.ajax({

    url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=qsrc3nwb5xsuvwbnv6xazzc3',

    dataType: "jsonp",

    success: searchCallback

  });



});




// callback for when we get back the results
function searchCallback(data) {


 var movies = data.movies;

 $.each(movies, function(index, movie) {

   $('.films').append('<li><h2>' + movie.title + '</h2> <img src="' + movie.posters.detailed + '" /> <h3>' + movie.ratings.critics_score + '%</h3><h3>' + movie.ratings.audience_score + '%</h3><p>' + movie.critics_consensus + '</p><h4>' + movie.runtime + ' min.</h4><h4>' + movie.release_dates.theater + '</h4><h4>Rated ' + movie.mpaa_rating + '</h4><a href="http://www.google.com/movies?hl=en&q=' + movie.title + '" target="_blank">Showtimes</a> <a href="http://www.youtube.com/embed?listType=search&list=' + movie.title + ' trailer" target="_blank">Trailer</a></li>');

 });

}

