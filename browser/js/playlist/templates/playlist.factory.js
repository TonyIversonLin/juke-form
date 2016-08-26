juke.factory('PlayListFactory', function($http) {

  var playListFunctions = {};

  playListFunctions.create = function(data) {
    var url = '/api/playlists';
    console.log(data);
    return $http.post(url, data)
      .then(function(result) {
         return result.data
      });
  }

  playListFunctions.getPlaylistName = function(playlistID) {
    var url = '/api/playlists/' + playlistID;
    return $http.get(url)
      .then(function(result) {
        return result.data;
      })
  }

  return playListFunctions;

});