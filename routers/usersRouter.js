const express = require('express');
const routerUsers = express.Router();
const bodyParser = require('body-parser');
const FakeDao = require('../FakeDataAccessService');
const fakeDaoUsers = new FakeDao();

routerUsers.use(bodyParser.json());
routerUsers.use(bodyParser.raw());
routerUsers.use(bodyParser.urlencoded({ extended: true }));

routerUsers.get('/', (req,res) => 
{
    let allUser = fakeDaoUsers.GetAllUsers();
    allUser.then(value =>
    {
      res.send(value.data);
    });
});

routerUsers.get("/:id", (req, res) => 
{
    let specificUser = fakeDaoUsers.GetUsersById(req.params.id);
    specificUser.then(value =>
    { 
        res.send(value.data);
    });
});

routerUsers.post('/', (req, res) => {
 
    let postedUser = fakeDaoUsers.PostUser(req.body);
    postedUser.then
    {
    res.sendStatus(200);
    };

});

routerUsers.put('/:id', (req, res) => {
 
    let updatedUser = fakeDaoUsers.UpdateUser(req.body,req.params.id);
    updatedUser.then
    {
    res.sendStatus(200);
    };
});

module.exports = routerUsers;
