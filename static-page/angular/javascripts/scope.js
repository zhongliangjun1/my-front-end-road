
angular.module('myApp', [])
.run(function($rootScope){
	var peopleRepo = [
		{ 'name':'tom', 'sex':'male', 'capacity':'abled' },
		{ 'name':'jack', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'helen', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'jessey', 'sex':'male', 'capacity':'abled' },
		{ 'name':'kitty', 'sex':'female', 'capacity':'abled' }
	];

	$rootScope.people = peopleRepo;
})
.controller('showCtrl', function($scope){
	$scope.persons = $scope.$parent.people;
})
.controller('addCtrl', function($scope){
	$scope.candidate = '';
	$scope.addPerson = function() {
		if ( $scope.candidate ) {
			var newPerson = {
				'name':$scope.candidate,
				'sex':'male'
			}
			$scope.$parent.people.push(newPerson);
			$scope.candidate = '';
		};
	}
})


