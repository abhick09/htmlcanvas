const express = require('express');
const app = express();

// route
app.get('/', (req,res)=>{
  // Sending This is the home page! in the page
  res.send('This is the ci-cd page!');
});

app.get('/about', (req,res)=>{
    // Sending This is the home page! in the page
    res.send('This is the about page!');
  });

  app.get('/contact', (req,res)=>{
    // Sending This is the home page! in the page
    res.send('This is the contact page!');
  });

// Listening to the port
let PORT = 8080;
app.listen(PORT)
