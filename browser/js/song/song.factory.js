'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      return song;
    },
    getAllSongs: function() {
      return $http.get('/api/songs')
                .then(function(results){
                  return results.data
                });
    },
    addSong: function(playlistID,song){
      return $http.post('/api/playlists/'+playlistID+'/songs',song)
        .then(function(result){
          return result.data;
        })
    }
  };

});
