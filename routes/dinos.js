const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('dinos/index', {   
    dinos: []
  });
});

module.exports = router;