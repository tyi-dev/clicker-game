var express = require('express');
var router = express.Router();

let data = [{
  id: 1,
  firstName: "CHEATACCOUNT",
  lastName: "CHEATACCOUNT",
  inGameName: "CHEATACCOUNT",
  stage: 1,
  lvl: 1,
  damagePerClick: 1,
  upgradePoints: 1000,
  totalDMGDealt: 0,
  skinPack: "default"
}]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data)
});
router.post('/', function(req, res, next) {
  console.log(req.body)
  data = req.body
});
module.exports = router;
