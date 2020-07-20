const axios = require('axios');
const express = require('express');
const app = express();
const user = require("./models/user.js");
var user1 = new user();
const post = require('./models/posts.js');
var post1 = new post();

function FakeDataAccessService()
{

}
// -------- USERS Functions --------
FakeDataAccessService.prototype.GetAllUsers = async function ()
{
    try 
    {
    return await axios.get('https://jsonplaceholder.typicode.com/users/');
    } 
    catch (error)
    {
      console.error(error);
    }
}     

FakeDataAccessService.prototype.GetUsersById = async function (id)
{
    try 
    {
      return await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    } 
    catch (error) 
    {
      console.error(error);
    }
}

FakeDataAccessService.prototype.PostUser = async function (inputBody)
{
    let postedUser = user1.UpdateUserAttributesWithBody(inputBody);
    postedUser.then
    {
      try
      {
         return await axios.post('https://jsonplaceholder.typicode.com/users',postedUser);
      }
      catch (error) 
      {
        console.error(error);
      }
    }
}

FakeDataAccessService.prototype.UpdateUser = async function (inputBody,id)
{
    let updatedUser = user1.UpdateUserAttributesWithBody(inputBody);
    updatedUser.then
    {
      try
      {
      return await axios.put('https://jsonplaceholder.typicode.com/users/'+id,test);
      }
      catch (error) 
      {
        console.error(error);
      }
  }
}
  
// -------- COMMENTS Functions ----------
FakeDataAccessService.prototype.GetAllCommentsById = async function (id)
{
    try 
    {
      return await axios.get('https://jsonplaceholder.typicode.com/comments?id='+id);
    } 
    catch (error) 
    {
      console.error(error);
    }
}

FakeDataAccessService.prototype.GetAllCommentsByPostId = async function (postId)
{
  try 
  {
    return await axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId );
  } 
  catch (error) 
  {
    console.error(error);
  }
}

FakeDataAccessService.prototype.getAllComments =  async function (postId)
{
  try 
  {
    return await axios.get('https://jsonplaceholder.typicode.com/comments' );
  } 
  catch (error) 
  {
    console.error(error);
  }
}

// -------- POSTS Functions --------
FakeDataAccessService.prototype.getAllPosts = async function ()
{
  try 
  {
    return await axios.get('https://jsonplaceholder.typicode.com/posts' );
  } 
  catch (error) 
  {
    console.error(error);
  }
}

FakeDataAccessService.prototype.postPost = async function(inputBody)
  {
    let postedPost = user1.UpdateUserAttributesWithBody(inputBody);
    postedPost.then
    {
      try
      {
        return await axios.post('https://jsonplaceholder.typicode.com/post',postedPost);
      }
      catch (error) 
      {
        console.error(error);
      }
    }
  }

  FakeDataAccessService.prototype.getNames = async function (userInfo) 
  {
    return new Promise((resolve) =>
    {
               resolve(userInfo + "resolved");
    });
  };

FakeDataAccessService.prototype.getAllPostsWithComments = async function() 
{
  try 
  {  
    const postURL = 'https://jsonplaceholder.typicode.com/posts';
    const commentsURL = 'https://jsonplaceholder.typicode.com/comments';
    const promisePost = axios.get(postURL);
    const promiseComments = axios.get(commentsURL);
    const responses = await axios.all([promisePost, promiseComments]);
    const responsePosts = responses[0].data;
    const responseComments= responses[1].data;
    let mergedCommentsAndPosts =  post1.mergeCommentsAndPosts(responsePosts,responseComments);
    return mergedCommentsAndPosts; // dışarda bir promise tanımlayarak
  }
  catch (error) 
  {
    console.error(error);
  }

}
  
module.exports = FakeDataAccessService;

  
