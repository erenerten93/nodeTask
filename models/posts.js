
var dummyPost = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

function Post ()
{


}

Post.prototype.mergeCommentsAndPosts = function (posts, comments)
{
      posts.map(function(post) {
        post['comments']  = '';
      });

    var postsObjectArray = JSON.parse(JSON.stringify(posts));
    var commentsObjectArray = JSON.parse(JSON.stringify(comments));
    var commentCounter ;
    for( var postCounter = 0 ; postCounter < postsObjectArray.length; postCounter++)
    {
        commentCounter = 0;
        while(postsObjectArray[postCounter].id != commentsObjectArray[commentCounter].postId && 
            commentCounter < commentsObjectArray.length)
        {
            commentCounter++;
        }
        if(postsObjectArray[postCounter].id == commentsObjectArray[commentCounter].postId)
        {
            postsObjectArray[postCounter].comments += commentsObjectArray[commentCounter].body;
        }  
    }
    console.log(postsObjectArray[0])  
    return postsObjectArray;
}

Post.prototype.UpdatePostAttributesWithBody = function(inputBody)
{
    var jsonKey;
    var inputData = JSON.parse(JSON.stringify(inputBody))
    var inputKeys = Object.keys(inputData);
    for (var i = 0; i<inputKeys.length; i++)
    {
    jsonKey = inputKeys[i];
    dummyPost[jsonKey] = inputData[jsonKey];  
    }
    return dummyPost; // updated dummypost.
}


module.exports = Post ;
