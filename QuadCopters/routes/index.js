var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Quadcopters page. */
router.get('/quadcopters', function(req, res) {
    var db = req.db;
    var collection = db.get('description');
    collection.find({},{},function(e,docs){
        res.render('quadcopters', {
            "quadcopters" : docs,
            title : "Quadcopters"
        });
    });
});

/* GET home page. */
router.get('/quadcopters', function(req, res, next) {
  res.render('quadcopters', { title: 'Quadcopters' });
});

module.exports = router;
