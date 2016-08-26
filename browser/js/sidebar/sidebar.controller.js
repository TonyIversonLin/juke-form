'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  // nothing to see here for now… state transitions happening with ui-sref!

});


juke.controller('SideBarPlayListCtrl', function($scope, SideBarPlayListFactory, $rootScope){
  SideBarPlayListFactory.getAllPlaylists()
    .then(function(results){
      $scope.playListList = results;
    });

  $rootScope.$on('newplaylist', function(){
  SideBarPlayListFactory.getAllPlaylists()
    .then(function(results){
      $scope.playListList = results;
    });
  });
});