juke.factory('SideBarPlayListFactory', function($http){

  var SideBarPlayListFactory = {};

  SideBarPlayListFactory.getAllPlaylists = function() {
    return $http.get('/api/playlists')
      .then(function(results){
        return results.data;
      });
  }

  return SideBarPlayListFactory;

});