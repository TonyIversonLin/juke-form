'use strict';

juke.controller('PlayListCtrl', function($scope, PlayListFactory, $rootScope, $stateParams, $state, SongFactory, PlayerFactory) {

	$scope.playListSubmit = function() {
		console.log($scope.playListName);
		PlayListFactory.create({
			name: $scope.playListName
		})
			.then(function(playlist) {
				console.log(playlist)
				$scope.playListName = "";
				$rootScope.$broadcast('newplaylist');
				$state.go('singlePlaylist', {
					id: playlist.id
				});
			})
	}

	SongFactory.getAllSongs()
		.then(function(songs) {
			$scope.songList = songs

		})

	$scope.toggle = function(song) {
		if (song !== PlayerFactory.getCurrentSong()) {
			PlayerFactory.start(SongFactory.convert(song), $scope.playlist.songs);
		} else if (PlayerFactory.isPlaying()) {
			PlayerFactory.pause();
		} else {
			PlayerFactory.resume();
		}
	};

	$scope.addSongToPlaylistSubmit = function(playlistID) {
		SongFactory.addSong(playlistID, $scope.addSong)
			.then(function(result) {
				$scope.playlist.songs.push(result);
			}).catch(function(err) {
				console.log(err);
			})
	}


	if (!$stateParams.id) return;
	PlayListFactory.getPlaylistName($stateParams.id)
		.then(function(playlist) {
			$scope.playlist = playlist;
		}).catch(function(err) {
			console.log(err);
		})
});