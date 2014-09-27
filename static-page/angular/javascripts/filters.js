var myApp = angular.module('myApp', []);

myApp.controller('personCtrl', function($scope){

	$scope.persons = [
		{ 'name':'tom', 'sex':'male', 'capacity':'abled' },
		{ 'name':'jack', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'helen', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'jessey', 'sex':'male', 'capacity':'abled' },
		{ 'name':'kitty', 'sex':'female', 'capacity':'abled' }
	];

	$scope.nameQuery = '';

	$scope.sexQuery = 'male';
	$scope.sexOptions = ['male', 'female'];	
	$scope.sexSelector = function(sex) {
		$scope.sexQuery = sex;
	}
});

myApp.filter('sexFilter', function(){
	var filterFunction = function(items, sex) {
		var result = [];
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if ( item.sex === sex ) {
				result.push(item);
			};
		};
		return result;
	}
	return filterFunction;
});