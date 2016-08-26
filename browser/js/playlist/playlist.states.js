'use strict';

juke.config(function ($stateProvider) {

	$stateProvider.state('playlist',{
		url: '/playlist',
		templateUrl: '/js/playlist/templates/playlist.template.html',
		controller: 'PlayListCtrl'
	});

  $stateProvider.state('singlePlaylist',{
    url: '/playlist/:id',
    templateUrl: '/js/playlist/templates/playlist.template.html',
    controller: 'PlayListCtrl'
  });

})
