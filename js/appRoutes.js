angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'
		})

		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'
		})

				.when('/theater', {
					templateUrl: 'views/theater.html',
					controller: 'TheaterController'

				})
				.when('/cities', {
					templateUrl: 'views/cities.html',
					controller: 'CitiesController'
				});
	$locationProvider.html5Mode(true);

}]);
