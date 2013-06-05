$(document).ready(function(){

$.getJSON('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=qsrc3nwb5xsuvwbnv6xazzc3&limit=10', function(data) {
  var items = [];
 
  $.each(data, function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });
 
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
});

   });