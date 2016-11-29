var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '/views/templates/home.html',
      })
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'dogController',
            controllerAs: 'dc',
          })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'catController',
            controllerAs: 'cc',
          })
        .when('/smallfurry', {
            templateUrl: '/views/templates/smallfurry.html',
            controller: 'smallFurryController',
            controllerAs: 'sfc',
          })
        .otherwise({
            redirectTo: 'home',
          });

  },
]);

app.controller('dogController', ['$http', function ($http) {
    console.log('dogController up and running');
    var key = '1b227d3836463bb5f6f5ea3dd1192d7b';
    var self = this;

    self.animal = {};

    self.getRandomPet = function () {
      var query = 'http://api.petfinder.com/'; // baseURL for API
      query += 'pet.getRandom'; // selecting the method we would like to return
      query += '?key=' + key; // Giving petfinder our key
      query += '&animal=dog'; //selecting only dogs
      query += '&format=json'; // Telling petfinder we want our response to be JSON
      query += '&output=basic'; // Telling petfinder what data we want (more than just id)
      var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

      console.log('Request:', request);

      $http.jsonp(request).then(function (response) {
        console.log(response);
        self.animal = response.data.petfinder.pet;
      });

    };

    self.getRandomPet();
  },
]);

app.controller('catController', ['$http', function ($http) {
    console.log('catController up and running');
    var key = '1b227d3836463bb5f6f5ea3dd1192d7b';
    var self = this;

    self.animal = {};

    self.getRandomPet = function () {
      var query = 'http://api.petfinder.com/'; // baseURL for API
      query += 'pet.getRandom'; // selecting the method we would like to return
      query += '?key=' + key; // Giving petfinder our key
      query += '&animal=cat'; //selecting only cats
      query += '&format=json'; // Telling petfinder we want our response to be JSON
      query += '&output=basic'; // Telling petfinder what data we want (more than just id)
      var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

      console.log('Request:', request);

      $http.jsonp(request).then(function (response) {
        console.log(response);
        self.animal = response.data.petfinder.pet;
      });

    };

    self.getRandomPet();
  },
]);

app.controller('smallFurryController', ['$http', function ($http) {
    console.log('smallFurryController up and running');
    var key = '1b227d3836463bb5f6f5ea3dd1192d7b';
    var self = this;

    self.animal = {};

    self.getRandomPet = function () {
      var query = 'http://api.petfinder.com/'; // baseURL for API
      query += 'pet.getRandom'; // selecting the method we would like to return
      query += '?key=' + key; // Giving petfinder our key
      query += '&animal=smallfurry'; //selecting only small, furry animals
      query += '&format=json'; // Telling petfinder we want our response to be JSON
      query += '&output=basic'; // Telling petfinder what data we want (more than just id)
      var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

      console.log('Request:', request);

      $http.jsonp(request).then(function (response) {
        console.log(response);
        self.animal = response.data.petfinder.pet;
      });

    };

    self.getRandomPet();
  },
]);
