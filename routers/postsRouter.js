const express = require('express');
const routerPosts = express.Router();
const bodyParser = require('body-parser');
const FakeDao = require('../FakeDataAccessService');
const fakeDaoPosts = new FakeDao();

routerPosts.use(bodyParser.json());
routerPosts.use(bodyParser.raw());
routerPosts.use(bodyParser.urlencoded({ extended: true }));

routerPosts.get('/withcomments', (req,res) =>
{
    let allPostsWithComments = fakeDaoPosts.getAllPostsWithComments();
    allPostsWithComments.then(value =>
    {
        res.send(value)
    });
});

routerPosts.get('/', async (req,res) => 
{
    let allPosts = fakeDaoPosts.getAllPosts();
    allPosts.then(value => 
    {
        res.send(value.data);
    });
});



routerPosts.post('/', (req, res) => 
{
    let postedPost = fakeDaoPosts.postPost(req.body);
    postedPost.then
    {
        res.sendStatus(200);
    };
});

module.exports = routerPosts;