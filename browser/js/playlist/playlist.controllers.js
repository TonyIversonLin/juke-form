'use strict';

juke.controller('PlayListCtrl', function($scope,PlayListFactory){
	console.log(playListForm);
	//console.log($scope.playListForm);

	$scope.playListSubmit = function(){
		console.log($scope.playListName);
		PlayListFactory.create({name: $scope.playListName})
			.then(function(){
				$scope.playListName = "";
			})
	}
});