const express = require('express');
const app = express();
const mainrouter = require('./mainRouter');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port 3000...')); 
app.use('',mainrouter)

