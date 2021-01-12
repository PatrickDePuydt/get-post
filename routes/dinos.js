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

  // Read or turn dinos.json into a mutable array
  let dinos = fs.readFileSync('./dinos.json');
  dinosArray = JSON.parse(dinos);

  // Add new dino from req.body to the array
  dinosArray.push(req.body);

  // Turn dino array into JSON
  let dinoJSON = JSON.stringify(dinosArray);
  
  // write to dinos.json
  fs.writeFileSync('./dinos.json', dinoJSON)
  
  res.redirect('/dinos'); // Redirect
});


module.exports = router;