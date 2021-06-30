"user strict";
var dbConn = require("./../../config/db.config");

//User object create
var User = function (user) {
  //  this.id = user.id;
  this.nombre = user.nombre;
};
User.create = function (newArt, result) {
  dbConn.query("INSERT INTO usuario set ?", newArt, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.findById = function (id, result) {
  dbConn.query("Select * from usuario where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.findAll = function (result) {
  dbConn.query("select * from usuario", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("usuario : ", res);
      result(null, res);
    }
  });
};
User.update = function (id, user, result) {
  dbConn.query(
    "UPDATE usuario SET nombre = ? WHERE id = ?",
    [user.nombre, id],
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
User.delete = function (id, result) {
  dbConn.query("DELETE FROM usuario WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = User;
