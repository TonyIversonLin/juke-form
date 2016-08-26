'use strict';

juke.controller('PlayListCtrl', function($scope,PlayListFactory, $rootScope,$stateParams,$state){

	$scope.playListSubmit = function(){
		console.log($scope.playListName);
		PlayListFactory.create({name: $scope.playListName})
			.then(function(){
				//console.log(playlist)
				$scope.playListName = "";
        $rootScope.$broadcast('newplaylist');

			})
	}
	if(!$stateParams.id) return;
	PlayListFactory.getPlaylistName($stateParams.id)
			.then(function(playlist){
				$scope.playlist = playlist;
			}).catch(function(err){
				console.log(err);
			})
});