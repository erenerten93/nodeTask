const express = require('express');
const mainRouter = express.Router();
const FakeDao = require('./FakeDataAccessService');
const fakeDaoMain = new FakeDao();
const commentsRouter = require('./routers/commentsRouter.js')
const usersRouter = require('./routers/usersRouter.js')
const postsRouter = require('./routers/postsRouter.js')

mainRouter.use('/api/comments', commentsRouter);
mainRouter.use('/api/users',usersRouter);
mainRouter.use('/api/posts',postsRouter);


mainRouter.get('/api/promiseDeneme', async (req,res) => 
{
  let result  = await fakeDaoMain.getNames("Eren Erten")
  console.log(result)
  res.send(result)
});


module.exports = mainRouter;