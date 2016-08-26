'use strict';

juke.controller('PlayListCtrl', function($scope,PlayListFactory, $rootScope, SideBarPlayListFactory){

	$scope.playListSubmit = function(){
		console.log($scope.playListName);
		PlayListFactory.create({name: $scope.playListName})
			.then(function(){
				$scope.playListName = "";
        $rootScope.$broadcast('newplaylist');
			})
	}
});