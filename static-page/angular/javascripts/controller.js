

var myCtrl = function($scope) {

	var personsRepo = [
		{ 'name':'tom', 'sex':'male', 'capacity':'abled' },
		{ 'name':'jack', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'helen', 'sex':'male', 'capacity':'disabled' },
		{ 'name':'jessey', 'sex':'male', 'capacity':'abled' },
		{ 'name':'kitty', 'sex':'female', 'capacity':'abled' }
	];

	$scope.persons = personsRepo;

	$scope.candidate = '';
	$scope.addPerson = function() {
		if ( $scope.candidate ) {
			var newPerson = {
				'name':$scope.candidate,
				'sex':'male'
			}
			personsRepo.push(newPerson);
			$scope.persons = personsRepo;
			$scope.candidate = '';
		};
	}

	$scope.query = function(condition) {
		if ( condition ) {
			var retainPeople = [];
			for (var i = 0; i < personsRepo.length; i++) {
				var person = personsRepo[i];	
				if ( person.name.indexOf(condition)!=-1 ) {
					retainPeople.push(person);
				};
			};
			$scope.persons = retainPeople;
		} else {
			$scope.persons = personsRepo;
		}
	}

	$scope.removeDisabledPeople = function() {
		var abledPeople = [];
		for (var i = 0; i < personsRepo.length; i++) {
			var person = personsRepo[i];			
			if ( 'abled' == person.capacity) {
				abledPeople.push(person);
			};
		};
		personsRepo = abledPeople;
		$scope.persons = personsRepo;
	}

	$scope.affect = 'hide';
	$scope.shouldShowPersons = true;
	$scope.hideorshow = function() {
		if ($scope.affect=='hide') {
			$scope.affect = 'show';
			$scope.shouldShowPersons = false;
		} else {
			$scope.affect='hide';
			$scope.shouldShowPersons = true;
		}
	}



}
