"use strict";

const Cancion = require("../models/cancion.model");

exports.findAll = function (req, res) {
  Cancion.findAll(function (err, cancion) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", cancion);
    res.send(cancion);
  });
};

exports.create = function (req, res) {
  const new_cancion = new Cancion(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Cancion.create(new_cancion, function (err, cancion) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Cancion added successfully!",
        data: cancion,
      });
    });
  }
};

exports.findById = function (req, res) {
  Cancion.findById(req.params.id, function (err, cancion) {
    if (err) res.send(err);
    res.json(cancion);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Cancion.update(
      req.params.id,
      new Cancion(req.body),
      function (err, cancion) {
        if (err) res.send(err);
        res.json({ error: false, message: "Cancion successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
  Cancion.delete(req.params.id, function (err, cancion) {
    if (err) res.send(err);
    res.json({ error: false, message: "Cancion successfully deleted" });
  });
};
