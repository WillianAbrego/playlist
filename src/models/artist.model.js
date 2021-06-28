"user strict";
var dbConn = require("./../../config/db.config");

//Artist object create
var Artist = function (artist) {
  //  this.id = artist.id;
  this.nombre = artist.nombre;
};
Artist.create = function (newArt, result) {
  dbConn.query("INSERT INTO artista set ?", newArt, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Artist.findById = function (id, result) {
  dbConn.query("Select * from artista where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Artist.findAll = function (result) {
  dbConn.query("select * from artista", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("artista : ", res);
      result(null, res);
    }
  });
};
Artist.update = function (id, artist, result) {
  dbConn.query(
    "UPDATE artista SET nombre = ? WHERE id = ?",
    [artist.nombre, id],
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
Artist.delete = function (id, result) {
  dbConn.query("DELETE FROM artista WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Artist;
