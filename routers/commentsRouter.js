const express = require('express');
const routerComments = express.Router();
const FakeDao = require('../FakeDataAccessService');
const fakeDaoComments = new FakeDao();

routerComments.get("/postid=:id", (req, res) => 
{
    let specificUser = fakeDaoComments.GetAllCommentsByPostId(req.params.id);
    specificUser.then(value =>
    { 
      res.send(value.data);
    });
});



routerComments.get("/id=:id", (req, res) => 
{
    let specificUser = fakeDaoComments.GetAllCommentsById(req.params.id);
    specificUser.then(value =>
    { 
       res.send(value.data);
    });
});


module.exports = routerComments;
