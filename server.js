//Import Express
const express = require('express');

//Use Express
const app = express()

//Create port
const port = 8000;

//App Running
app.listen(port,() =>{
    console.log(`App is running on ${port}`);
});

