
// create the module and name it routeApp
// also include ngRoute for all our routing needs
var routeApp = angular.module('routeApp', ['ngRoute', 'routeServices']);

routeApp.run( function($rootScope, $location) {
	$rootScope.location = $location;
	$rootScope.navTabs = [
		{ title:'Home', route:'home', isActive:'inactive' },
		{ title:'Profile', route:'profile', isActive:'inactive' },
		{ title:'Messages', route:'messages', isActive:'inactive' }
	];
	resetNavTabsActive($rootScope.navTabs, $location.path());
});


// configure our routes
routeApp.config( function($routeProvider) {
	$routeProvider
	// route for the home page
	.when('/home', {
		templateUrl : 'routeDemo/home.html',
		controller  : 'homeController'
	})

	// route for the profile page
	.when('/profile', {
		templateUrl : 'routeDemo/profile.html',
		controller  : 'profileController'
	})

	// route for the messages page
	.when('/messages', {
		templateUrl : 'routeDemo/messages.html',
		controller  : 'messagesController'
	})

	.otherwise({
        redirectTo: '/home'
    });
});


// create the controller and inject Angular's $scope
routeApp.controller('homeController', function($scope, $location) {
	// create a message to display in our view
	$scope.message = 'This is home page and my Controller is homeController';
	resetNavTabsActive($scope.navTabs, $location.path());
});

routeApp.controller('profileController', function($scope, $location) {
	$scope.message = 'This is profile page and my Controller is profileController';
	resetNavTabsActive($scope.navTabs, $location.path());
});

/** use origin $http
	routeApp.controller('messagesController', function($scope, $location, $http) {
		$http.get('/routeDemo/loadMessages').success(function(data) {
		    $scope.messages = data;
		});
		resetNavTabsActive($scope.navTabs, $location.path());
	});
*/

routeApp.controller('messagesController', function($scope, $location, messageService) {
	// ① var entries = messageService.get(function(){   
	// Error in resource configuration. Expected response to contain an object but got an array
    var entries = messageService.query(function(){ 
		$scope.messages = entries;
		// ② messageService.save(entries); POST http://localhost:3000/routeDemo/loadMessages 404 (Not Found) 
	});
	resetNavTabsActive($scope.navTabs, $location.path());
});


var resetNavTabsActive = function(navTabs, nowPath) {
	for (var i = 0; i < navTabs.length; i++) {
		var tab = navTabs[i];
		if ( nowPath === '/'+tab.route ) {
			tab.isActive = 'active';
		} else {
			tab.isActive =  'inactive';
		}
	};
}










