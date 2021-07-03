"user strict";
var dbConn = require("./../../config/db.config");

//Album object create
var Album = function (album) {
  //  this.id = album.id;
  this.nombre_Album = album.nombre_Album;
  this.anio = album.anio;
  this.id_artista = album.id_artista;
};
Album.create = function (newAlb, result) {
  dbConn.query("INSERT INTO album set ?", newAlb, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Album.findById = function (id, result) {
  dbConn.query(
    "SELECT album.id, nombre_Album,anio,artista.nombre FROM album INNER JOIN artista on album.id_artista = artista.id  where id_artista = ? ",
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
Album.findAll = function (result) {
  dbConn.query(
    "SELECT album.id, nombre_Album,anio,artista.nombre FROM album INNER JOIN artista on album.id_artista = artista.id; ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("albuma : ", res);
        result(null, res);
      }
    }
  );
};
Album.update = function (id, album, result) {
  dbConn.query(
    "UPDATE album SET nombre_Album=?,anio=?,id_artista=? WHERE id=?",
    [album.nombre_Album, album.anio, album.id_artista, id],
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
Album.delete = function (id, result) {
  dbConn.query("DELETE FROM album WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Album;
