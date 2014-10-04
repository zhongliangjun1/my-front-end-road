/**
	var promise = $http({
	  method: 'GET',
	  url: 'http://foo.com/v1/api',
	  params: {
	    api_key: 'abc'
	  }
	});

	promise
	.then(function(data) {
	  // Called when no errors have occurred with data
	})
	.catch(function(err) {
	  // Called when an error has occurred
	})
	.finally(function(data) {
	  // Called always, regardless of the output result
	})
*/

var myApp = angular.module('myApp', []);

myApp.controller('personCtrl', function($scope, $http){

	$scope.nameQuery = '';

	// $http.get('/httpDemo/persons').success(function(data) {
	//     $scope.persons = data;
	// });

	var promise = $http({
	  method: 'GET',
	  url: '/httpDemo/persons'
	});

	promise
	.then(function(data) {
	  $scope.persons = data.data;
	  console.log(data.status);
	  console.log(data.statusText);
	})
	.catch(function(err) {
	  console.log(err.status);
	  console.log(err.statusText);
	})
	.finally(function() {
	  console.log('finally');
	})

	

});