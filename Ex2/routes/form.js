var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("[DEBUG]- GET/form ");  
    res.render('form', {
        
      });
  });

module.exports = router;
