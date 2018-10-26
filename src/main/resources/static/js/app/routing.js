app
.config(function($routeProvider){
	
	$routeProvider
	.when('/list',{
		templateUrl:'fragments/list.html',
		controller:'ListController',
		controllerAs:'listCtrl'
	})
	.when('/details/:id',{
		templateUrl:'fragments/details.html',
		controller:'DetailsController',
		controllerAs:'detailsCtrl'
	})
	.when('/new',{
		templateUrl:'fragments/new.html',
		controller:'NewController',
		controllerAs:'newCtrl'
	})
	.otherwise({
		redirectTo:'/list'
	})
	
})