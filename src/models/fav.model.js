"fav strict";
var dbConn = require("./../../config/db.config");

//Favorito object create
var Favorito = function (fav) {
  //  this.id = fav.id;
  this.id_usuario = fav.id_usuario;
  this.id_cancion = fav.id_cancion;
};
Favorito.create = function (newFav, result) {
  dbConn.query("INSERT INTO favorito set ?", newFav, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Favorito.findById = function (id, result) {
  dbConn.query("Select * from favorito where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Favorito.findAll = function (result) {
  dbConn.query("select * from favorito", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("favorito : ", res);
      result(null, res);
    }
  });
};
Favorito.update = function (id, fav, result) {
  dbConn.query(
    "UPDATE favorito SET id_usuario = ?, id_cancion=?  WHERE id = ?",
    [fav.id_usuario, fav.id_cancion, id],
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
Favorito.delete = function (id, result) {
  dbConn.query("DELETE FROM favorito WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Favorito;
