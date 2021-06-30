"user strict";
var dbConn = require("./../../config/db.config");

//PlaylistDetalle object create
var PlaylistDetalle = function (playlistdetalle) {
  //  this.id = playlist.id;
  this.id_playlist = playlistdetalle.id_playlist;
  this.id_usuario = playlistdetalle.id_usuario;
  this.id_cancion = playlistdetalle.id_cancion;
};
PlaylistDetalle.create = function (newPlay, result) {
  dbConn.query(
    "INSERT INTO playlist_detalle set ?",
    newPlay,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};
PlaylistDetalle.findById = function (id, result) {
  dbConn.query(
    "SELECT playlist_detalle.id,playlist.nombre as nombre_playlist,playlist.visibilidad,cancion.nombre_cancion,cancion.url,album.nombre_Album,album.anio,artista.nombre FROM `playlist_detalle` INNER JOIN playlist on playlist_detalle.id_playlist=playlist.id INNER JOIN cancion on playlist_detalle.id_cancion=cancion.id INNER JOIN album on cancion.id_album=album.id INNER JOIN artista on album.id_artista=artista.id where playlist_detalle.id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
PlaylistDetalle.findAll = function (result) {
  dbConn.query(
    "SELECT playlist_detalle.id,playlist.nombre as nombre_playlist,playlist.visibilidad,cancion.nombre_cancion,cancion.url,album.nombre_Album,album.anio,artista.nombre FROM `playlist_detalle` INNER JOIN playlist on playlist_detalle.id_playlist=playlist.id INNER JOIN cancion on playlist_detalle.id_cancion=cancion.id INNER JOIN album on cancion.id_album=album.id INNER JOIN artista on album.id_artista=artista.id",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("playlistdetalle : ", res);
        result(null, res);
      }
    }
  );
};
PlaylistDetalle.update = function (id, playlistdetalle, result) {
  dbConn.query(
    "UPDATE playlist_detalle SET id_playlist=?, id_usuario=?, id_cancion=? WHERE id=?",
    [
      playlistdetalle.id_playlist,
      playlistdetalle.id_usuario,
      playlistdetalle.id_cancion,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
PlaylistDetalle.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM playlist_detalle WHERE id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = PlaylistDetalle;
