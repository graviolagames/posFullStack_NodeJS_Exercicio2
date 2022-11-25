var express = require('express');
var router = express.Router();

let users = {itens:[]};
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("[DEBUG]- GET/users/list");
  res.send(users.itens);
});

router.post('/', function(req, res, next) {
  console.log("[DEBUG]- POST/users");
  const body = req.body;
  users.itens.push(body);
  res.send("ok");
});
//To test this operation use curl --request DELETE localhost:3000/users
router.delete('/', function(req, res, next) {
  console.log("[DEBUG]- DELETE/users");
  let {email} = req.query;
  let foundIndex;
  let found = users.itens.find(function(user,index){
    foundIndex = index;
    return user.name == email;
  });
  if(found){
    users.itens.splice(foundIndex,1);
    return res.send("ok");
  }
  res.send("Not found");
});



module.exports = router;
