
var app = angular.module('app', []);

app.directive('ngCity', function(){

	return {
		controller: function($scope){}
	}

});


app.directive('ngSparkline', function(){

	return {
		restrict: 'A',
		require: '^ngCity',
		template: '<div class="sparkline" ><h4>weather for {{ngModel}}</h4></div>',
		scope: {
			ngCity: '&'
		},
		link: function(scope, iElement, iAttrs) {
			console.log(iElement);
			scope.getTemp(iAttrs.ngCity);
		},
		controller: [ '$scope', function($scope) {
			$scope.getTemp = function(city) {

			}
		}
		]
	}

});



