"use strict";

const Favorito = require("../models/fav.model");

exports.findAll = function (req, res) {
  Favorito.findAll(function (err, fav) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", fav);
    res.send(fav);
  });
};

exports.create = function (req, res) {
  const new_fav = new Favorito(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Favorito.create(new_fav, function (err, fav) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Favorito added successfully!",
        data: fav,
      });
    });
  }
};

exports.findById = function (req, res) {
  Favorito.findById(req.params.id, function (err, fav) {
    if (err) res.send(err);
    res.json(fav);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Favorito.update(req.params.id, new Favorito(req.body), function (err, fav) {
      if (err) res.send(err);
      res.json({ error: false, message: "Favorito successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  Favorito.delete(req.params.id, function (err, fav) {
    if (err) res.send(err);
    res.json({ error: false, message: "Favorito successfully deleted" });
  });
};
