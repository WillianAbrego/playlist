"user strict";
var dbConn = require("./../../config/db.config");

//Cancion object create
var Cancion = function (cancion) {
  //  this.id = cancion.id;
  this.nombre_cancion = cancion.nombre_cancion;
  this.url = cancion.url;
  this.id_album = cancion.id_album;
};
Cancion.create = function (newCan, result) {
  dbConn.query("INSERT INTO cancion set ?", newCan, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Cancion.findById = function (id, result) {
  dbConn.query(
    "SELECT cancion.id,cancion.nombre_cancion,cancion.url, album.nombre_Album, album.anio, artista.nombre FROM `cancion` INNER JOIN album on cancion.id_album=album.id INNER JOIN artista on album.id_artista=artista.id where album.id = ? ",
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
Cancion.findAll = function (result) {
  dbConn.query(
    "SELECT cancion.id,cancion.nombre_cancion,cancion.url, album.nombre_Album, album.anio, artista.nombre FROM `cancion` INNER JOIN album on cancion.id_album=album.id INNER JOIN artista on album.id_artista=artista.id;",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("cancion : ", res);
        result(null, res);
      }
    }
  );
};
Cancion.update = function (id, cancion, result) {
  dbConn.query(
    "UPDATE cancion SET nombre_cancion=?,url=?,id_album=? WHERE id=?",
    [cancion.nombre_cancion, cancion.url, cancion.id_album, id],
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
Cancion.delete = function (id, result) {
  dbConn.query("DELETE FROM cancion WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Cancion;
