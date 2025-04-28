// adding the express in js application through node js
/** 
 * Module dependencies
*/
const express = require('express');
const path = require('path');
const app = express();
// const http = require('http').createServer(app)
const port = 3090;



// serving static file on express
 app.use(express.static(path.join(__dirname, 'dist/y')))
 console.log(__dirname)

app.get('/route', (req, res)=>{
    
    res.send('Hello World')
});
/**
 * 404 route
 */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/y/index.html"));
});

app.listen(port, ()=>{
    console.log(`Server is runnig at ${port}`)
})