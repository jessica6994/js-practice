var movies = [
  {
    title: "Mean Girls",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Schindler's list",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Shawshank Redemption",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Greece",
    rating: 3.5,
    hasWatched: true
  }
];

movies.forEach(function(movies){
  if (movies.hasWatched === true){
  console.log("You have watched " + movies.title + " - " + movies.rating + " stars")
  }else{
  console.log("You have NOT watched " + movies.title + " - " + movies.rating + " stars")
  }
});
