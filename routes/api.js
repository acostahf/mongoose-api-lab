var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

/* GET /api/movies  */
router.get('/movies', moviesCtrl.index);
  
// post /api/movies
router.post('/movies', moviesCtrl.create);

//get/api/movies/id
router.get('/movies/:id', moviesCtrl.show);

//PUT/api/movies/id
router.put('/movies/:id', moviesCtrl.update);

//Delete/api/movies
router.delete('/movies/:id', moviesCtrl.delete);

module.exports = router;
