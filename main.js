const express = require('express');
const app = express();

// route
app.get('/', (req,res)=>{
  // Sending This is the home page! in the page
  res.send('This is the home page!');
});

// Listening to the port
let PORT = 8080;
app.listen(PORT)
