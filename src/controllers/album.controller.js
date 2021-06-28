"use strict";

const Album = require("../models/album.model");

exports.findAll = function (req, res) {
  Album.findAll(function (err, album) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", album);
    res.send(album);
  });
};

exports.create = function (req, res) {
  const new_album = new Album(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Album.create(new_album, function (err, album) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Album added successfully!",
        data: album,
      });
    });
  }
};

exports.findById = function (req, res) {
  Album.findById(req.params.id, function (err, album) {
    if (err) res.send(err);
    res.json(album);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Album.update(req.params.id, new Album(req.body), function (err, album) {
      if (err) res.send(err);
      res.json({ error: false, message: "Album successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  Album.delete(req.params.id, function (err, album) {
    if (err) res.send(err);
    res.json({ error: false, message: "Album successfully deleted" });
  });
};
