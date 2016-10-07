angular
	.module('booker', ['ngRoute'])
	.config(config)

config.$inject = ['$routeProvider', '$locationProvider'];
function config(  $routeProvider, $locationProvider	) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/templates/book.html',
		controllerAs: "booksIndexCtrl",
		controller: 'BooksIndexController'
	})
	.when('/books/:id', {
		templateUrl: 'views/templates/bookshow.html',
		controllerAs: 'booksShowCtrl',
		controller: 'BooksShowController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}