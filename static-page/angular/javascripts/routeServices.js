
var phonecatServices = angular.module('routeServices', ['ngResource']);

phonecatServices.factory(
	'messageService', 
	function( $resource ) {
		return $resource('/routeDemo/loadMessages');
    }
);
  