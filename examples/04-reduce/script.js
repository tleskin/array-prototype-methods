// TODO: We saw before that each photo/video has a count for the number of likes stored in `likes.count`. What is the total number of likes for all of the photos/videos fetch from the API?

var totalLikes = instagramAPI.data.reduce(function(total, number){
  return total + number.likes.count;
}, 0);

// TODO: Given an API response stored in `instagramAPI.data`, can you count up the number of times each tag appears?

var popularTags = instagramAPI.data.reduce(function(tagCount, asset){
  // For an asset, look at the tags
  // iterate over the tags
  // for each tage
  // if it is not a key in tagCount; add it
  // if it is, increment the count
  // return the tagCount

  asset.tags.forEach(function(tag){
    if (!tagCount[tag]){
      tagCount[tag] = 1;
    } else {
      tagCount[tag]++;
    }
  });

  return tagCount;
}, {});
