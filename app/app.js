var myMoviesApp = angular.module('myMoviesApp', []);

myMoviesApp.controller('MoviesController', ['$scope', function($scope){

  $scope.removeMovie = function(movie){
    var removedMovie = $scope.movies.indexOf(movie);
    $scope.movies.splice(removedMovie, 1);
  }


  $scope.movies = [
    {
      name: "Star Wars: Episodio IX",
      category: "Fantasía/Ciencia ficción",
      director: "J. J. Abrams",
      premiere: 2019,
      duration: 142,
      available: true
    },
    {
      name: "Joker",
      category: "Drama/Suspense",
      director: "Todd Phillips",
      premiere: 2019,
      duration: 122,
      available: true
    },
    {
      name: "Avatar 2",
      category: "Fantasía/Cine de ciencia ficción",
      director: "James Cameron",
      premiere: 2021,
      duration: "-",
      available: false
    },
    {
      name: "Vengadores: Endgame",
      category: "Fantasía/Cine de ciencia ficción",
      director: "Anthony y Joe Russo",
      premiere: 2019,
      duration: 181,
      available: true
    }
  ];
}]);
