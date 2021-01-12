const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
  let dinos = fs.readFileSync('./dinos.json');
  let dinoData = JSON.parse(dinos); // parse to do, strigify to send
  
  console.log(`dinos: `, dinoData);

  res.render('dinos/index', {   
    dinos: []
  });
});

module.exports = router;