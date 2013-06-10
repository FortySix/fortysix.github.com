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
 var movTitle;

 $.each(movies, function(index, movie) {


	// To Do List
	//Javascript needs to be refactored/tweaked heavily and html moved out.
	//Format Date better

	if (movie.title.length > 23){
		var length = 20;
		movTitle = movie.title.substring(0,length);
		movTitle = movTitle+'...';
	}
	else{
		movTitle = movie.title;
	}

   $('.movielist').append('<li><div class="postercolumn"><img src="' + movie.posters.detailed + '" width="180px" height="261px"/><div class="blueer"><a href="http://www.youtube.com/embed?listType=search&list=' + movie.title + ' trailer" target="_blank"><span class="icon" aria-hidden="true" data-icon="&#9654;"></span>   trailer</a></div><a href="http://www.google.com/movies?hl=en&q=' + movie.title + '" target="_blank"><span class="icon" aria-hidden="true" data-icon="&#128340;"></span>   showtimes</a></div><div class="infocolumn"><div class="titlebox"><h2>' + movTitle + '</h2></div><div class="reviewbox"><p>' + movie.critics_consensus + '</p><h6> ' + movie.release_dates.theater + ' &#183; ' + movie.runtime + ' min &#183; Rated ' + movie.mpaa_rating + '</h6></div><div class="scores"><div class="criticbox"><h3>' + movie.ratings.critics_score + '</h3><p>CRITICS</p></div><div class="audiencebox"><h3>' + movie.ratings.audience_score + '</h3><p>AUDIENCE</p></div></div></div></li>');

 });

}

