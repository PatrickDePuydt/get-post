const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
  let dinos = fs.readFileSync('./dinos.json');
  let dinoData = JSON.parse(dinos); // parse to do, strigify to send
  
  console.log(`dinos: `, dinoData);

  res.render('dinos/index', {   
    dinos: dinoData
  });
});

router.get('/new', (req, res) => {
  console.log(`------------- New dino`);
  res.render('dinos/new');
});

router.post('/', (req, res) => {
  console.log(req.body);
  // Add dinos to dino.json
  
  res.redirect('/dinos'); // Redirect
});


module.exports = router;