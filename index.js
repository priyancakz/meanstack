var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    'Name':'Shavez', 
    'ID':'7260',
    'address':'Hostel-3'
  })
});

router.get('/question', function(req, res, next) {
  res.send({
    'Q':'What is ID?', 
    'Identification':'opt b',
    'address':'Hostel-3'
  })
});

module.exports = router;
