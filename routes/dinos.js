const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/', (req, res) => {
  let dinos = fs.readFileSync('./dinos.json');
  console.log(`dinos: `, dinos);

  res.render('dinos/index', {   
    dinos: []
  });
});

module.exports = router;