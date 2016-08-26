juke.factory('PlayListFactory', function($http){

  var playListFunctions = {};

  playListFunctions.create = function(title) {
    var url = '/api/playlist';

    return $http.post(url, title)
      .then(function(postStatus) {
        console.log(postStatus);
      });
  }

  return playlistFunctions;

});