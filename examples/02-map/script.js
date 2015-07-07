// TODO: Create an array called `simplifiedPhotographs` that takes `photographs` and transforms each one into an object with only two properties: `caption` and `url`.

var simplifiedPhotographs = photographs.map(function (photo) {
  var image = {
    caption: photo.caption.text,
    url: photo.images.low_resolution.url
  }
  return image;
});

// TODO: Create an array called `photographElements` that takes `simplifiedPhotographs` and transforms each one into a DOM element.

var photographElements = simplifiedPhotographs.map(function(photo) {
  var newImage = document.createElement('img');
  newImage.alt = photo.caption;
  newImage.src = photo.url;
  return newImage;
});
