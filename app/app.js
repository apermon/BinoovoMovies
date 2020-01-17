var myMoviesApp = angular.module('myMoviesApp', ['ngRoute']); /*ngRoute para las rutas al acceso de HOME*/

myMoviesApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'MoviesController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'MoviesController'
    }).otherwise({
      redirectTo: '/home'
    });
}]);

/* Creación de un nuevo directorio para elegir de forma random la pelicula de la semana*/
myMoviesApp.directive('randomMovie', [function(){
  return {
    restrict: 'E', /*Solo puede ser un elemento*/
    scope: {
      movies: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4)
    }
  };
}]);

myMoviesApp.controller('MoviesController', ['$scope', '$http', function($scope, $http){

  $scope.removeMovie = function(movie){
    var removedMovie = $scope.movies.indexOf(movie);
    $scope.movies.splice(removedMovie, 1);
  };

  $scope.addMovie = function(){
    $scope.movies.push({
      name: $scope.newMovie.name,
      category: $scope.newMovie.category,
      director: $scope.newMovie.director,
      duration: parseInt($scope.newMovie.duration),
      premiere: $scope.newMovie.premiere,
      available: true
    });

    /* Limpia el formulario al añadir una nueva película */
    $scope.newMovie.name = "";
    $scope.newMovie.category = "";
    $scope.newMovie.director = "";
    $scope.newMovie.duration = "";
    $scope.newMovie.premiere = "";
  };

  /* Carga de datos Json */
   $http.get('data/movies.json').then(function(response){
     var data = response.data;
     $scope.movies = data;
   });

}]);
