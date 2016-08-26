juke.factory('PlayListFactory', function($http){

  var playListFunctions = {};

  playListFunctions.create = function(data) {
    var url = '/api/playlists';
    console.log(data);
    return $http.post(url, data)
      .then(function(postStatus) {
        console.log(postStatus); //the data we created in the database
      });
  }

  playListFunctions.getPlaylistName = function(playlistID){
  	var url = '/api/playlists/' + playlistID;
  	return $http.get(url)
  			.then(function(result){
  				return result.data;
  			})				
  }

  return playListFunctions;

});