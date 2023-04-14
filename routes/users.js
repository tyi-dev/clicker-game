var express = require('express');
var router = express.Router();

let data = [{
  id: 1,
  firstName: "firstName",
  lastName: "lastName",
  inGameName: "TY_DEV",
  stage: 1,
  lvl: 1,
  damagePerClick: 1,
  upgradePoints: 3,
  totalDMGDealt: 0,
  skinPack: "default"
},{
  id: 2,
  firstName: "firstName2",
  lastName: "lastName2",
  inGameName: "TY_DEV2",
  stage: 777,
  lvl:2,
  damagePerClick: 1,
  upgradePoints: 8732043,
  totalDMGDealt: 0,
  skinPack: "monsters"
}, ]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data)
});
router.post('/', function(req, res, next) {
  console.log(req.body)
  data = req.body
});
module.exports = router;
