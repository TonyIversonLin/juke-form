'use strict';

juke.controller('PlayListCtrl', function($scope, PlayListFactory, $rootScope, $stateParams, $state, SongFactory) {

	$scope.playListSubmit = function() {
		console.log($scope.playListName);
		PlayListFactory.create({
			name: $scope.playListName
		})
			.then(function(playlist) {
				console.log(playlist)
				$scope.playListName = "";
				$rootScope.$broadcast('newplaylist');
				$state.go('singlePlaylist', {id: playlist.id});
			})
	}

	SongFactory.getAllSongs()
		.then(function(songs){
			$scope.songList = songs;
		})


	if (!$stateParams.id) return;
	PlayListFactory.getPlaylistName($stateParams.id)
		.then(function(playlist) {
			$scope.playlist = playlist;
		}).catch(function(err) {
			console.log(err);
		})
});