$(document).ready(function(){



$().ready(function () {
  var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=qsrc3nwb5xsuvwbnv6xazzc3&limit=10';

  $.get(url, function (data) {
    // can use 'data' in here...
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
});


