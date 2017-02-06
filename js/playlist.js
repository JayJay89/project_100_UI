/*==========================*/
/*Playlist*/
/*==========================*/
function Playlist() {
  this.songlist = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(givenSong) {
  this.songlist.push(givenSong);
};

Playlist.prototype.play = function() {
  var currentSong = this.songlist[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.songlist[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songlist.length){
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for (var i = 0; i < this.songlist.length; i++){
    list.innerHTML += this.songlist[i].toHTML();
  }
};

/*==========================*/
/*Song*/
/*==========================*/
function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
  var htmlString =  '<li';
  if(this.isPlaying){
      htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';

  return htmlString;
};

/*==========================*/
/*App*/
/*==========================*/

var newPlaylist = new Playlist();

var song_1 = new Song("Butterfly","Koji Wada", "3:15");
var song_2 = new Song("King of the North","Ramin Djawadi", "3:15");

newPlaylist.add(song_1);
newPlaylist.add(song_2);

var playlistElement = document.getElementById('playlist_list');

newPlaylist.renderInElement(playlistElement);

var playButton = document.getElementById('playlist_play');
var stopButton = document.getElementById('playlist_stop');
var nextButton = document.getElementById('playlist_next');

playButton.onclick = function(){
  newPlaylist.play();
  newPlaylist.renderInElement(playlistElement);
}

nextButton.onclick = function(){
  newPlaylist.next();
  newPlaylist.renderInElement(playlistElement);
}

stopButton.onclick = function(){
  newPlaylist.stop();
  newPlaylist.renderInElement(playlistElement);
}