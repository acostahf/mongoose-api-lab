var Movie = require("../../models/movie");

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne
};

function deleteOne(req, res) {
  Movie.findByIdAndDelete(req.params.id, function(err, puppy) {
    res.status(200).json(puppy);
  });
}

function update(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    updatedMovie
  ) {
    res.status(200).json(updatedMovie);
  });
}

function show(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    res.status(200).json(movie);
  });
}

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.status(200).json(movies);
  });
}

function create(req, res) {
  Movie.create(req.body, function(err, movie) {
    if (err) {
      return res.status(400).json(err);
    } else {
      return res.status(201).json(movie);
    }
  });
}

function index(req, res) {
  Movie.find({})
    .populate("cast")
    .then(function(movies) {
      res.status(200).json(movies);
    });
}
