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

   $('.films').append('<li><h2>' + movie.title + '</h2> <img src="' + movie.posters.detailed + '" /> <h3>' + movie.ratings.critics_score + '%</h3></li>');


 });

}

