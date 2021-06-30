"use strict";

const PlaylistDetalle = require("../models/playlistDetalle.model");

exports.findAll = function (req, res) {
  PlaylistDetalle.findAll(function (err, playlistDetalle) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", playlistDetalle);
    res.send(playlistDetalle);
  });
};

exports.create = function (req, res) {
  const new_playlistDetalle = new PlaylistDetalle(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    PlaylistDetalle.create(
      new_playlistDetalle,
      function (err, playlistDetalle) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "PlaylistDetalle added successfully!",
          data: playlistDetalle,
        });
      }
    );
  }
};

exports.findById = function (req, res) {
  PlaylistDetalle.findById(req.params.id, function (err, playlistDetalle) {
    if (err) res.send(err);
    res.json(playlistDetalle);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    PlaylistDetalle.update(
      req.params.id,
      new PlaylistDetalle(req.body),
      function (err, playlistDetalle) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "PlaylistDetalle successfully updated",
        });
      }
    );
  }
};

exports.delete = function (req, res) {
  PlaylistDetalle.delete(req.params.id, function (err, playlistDetalle) {
    if (err) res.send(err);
    res.json({ error: false, message: "PlaylistDetalle successfully deleted" });
  });
};
