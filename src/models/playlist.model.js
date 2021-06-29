"user strict";
var dbConn = require("./../../config/db.config");

//Playlist object create
var Playlist = function (playlist) {
  //  this.id = playlist.id;
  this.nombre_Playlist = playlist.nombre_Playlist;
  this.anio = playlist.anio;
  this.id_artista = playlist.id_artista;
};
Playlist.create = function (newAlb, result) {
  dbConn.query("INSERT INTO playlist set ?", newAlb, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Playlist.findById = function (id, result) {
  dbConn.query("Select * from playlist where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Playlist.findAll = function (result) {
  dbConn.query("select * from playlist", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("playlist : ", res);
      result(null, res);
    }
  });
};
Playlist.update = function (id, playlist, result) {
  dbConn.query(
    "UPDATE playlist SET nombre_Playlist=?,anio=?,id_artista=? WHERE id=?",
    [playlist.nombre_Playlist, playlist.anio, playlist.id_artista, id],
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
Playlist.delete = function (id, result) {
  dbConn.query("DELETE FROM playlist WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Playlist;
