// TODO: Filter out just the photographs and store them in a variable called `photographs`.

var photographs = instagramAPI.data.filter(function(data){
  return data.type === 'image' ;
});


// TODO: Filter out just the videos and store them in a variable called `videos`.

var videos = instagramAPI.data.filter(function(data){
  return data.type === 'video' ;
});

// TODO: Filter out all of the photographs that don't have any likes and store the remaining photographs into a variable called `popularPhotographs`.

var popularPhotographs = photographs.filter(function(data){
  return data.likes.count !== 0 ;
});

// TODO: Map each photograph into a DOM node and append it to the #photographs DIV element.

// Your implementation here.
photographs.map(function(photo) {
  var newImage = document.createElement('img');
  newImage.alt = photo.caption.text;
  newImage.src = photo.images.low_resolution.url;
  return newImage;
}).forEach(function(img){
  document.getElementById('photographs').appendChild(img);
});
