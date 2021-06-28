"use strict";

const Artist = require("../models/artist.model");

exports.findAll = function (req, res) {
  Artist.findAll(function (err, artist) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", artist);
    res.send(artist);
  });
};

exports.create = function (req, res) {
  const new_artist = new Artist(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Artist.create(new_artist, function (err, artist) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Artist added successfully!",
        data: artist,
      });
    });
  }
};

exports.findById = function (req, res) {
  Artist.findById(req.params.id, function (err, artist) {
    if (err) res.send(err);
    res.json(artist);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Artist.update(req.params.id, new Artist(req.body), function (err, artist) {
      if (err) res.send(err);
      res.json({ error: false, message: "Artist successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  Artist.delete(req.params.id, function (err, artist) {
    if (err) res.send(err);
    res.json({ error: false, message: "Artist successfully deleted" });
  });
};
