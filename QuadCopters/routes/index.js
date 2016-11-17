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

/* GET register page. */
router.get('/reg_quadcopter', function(req, res, next) {
  res.render('reg_quadcopter', { title: 'Register Quadcopters' });
});


/* POST to Add Quadcopter Service */
router.post('/quadcopters', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var name = req.body.name;
    var model = req.body.model;

    // Set our collection
    var collection = db.get('reg_data');

    // Submit to the DB
    collection.insert({
        "name" : name,
        "model" : model
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect('/reg_quadcopter');
        }
    });
});


module.exports = router;
