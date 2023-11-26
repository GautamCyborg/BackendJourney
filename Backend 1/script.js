//first install express using npm i express
//below is the default code

const express = require('express')//assigning express in express named variable
const app = express()

app.set("view engine","ejs")
app.use(express.static('./public'));
//middleware humesha routes s phle chlega kitne bhi middleware ho skte h aur sb chlenge routes s phle
//req mtlb user jo request bhejega uska data
//res mtlb apna server jo response bhejega vo code ya ky krna h vo
//next is push to move request to next thing which should be executed
//Below is code for middleware
app.use(function(req,res,next){
    console.log("Middleware working");
    next();
})

//Below is code for routing 
app.get('/', function (req, res) {
  res.render("index");
});

app.get("/error",function(req,res,next){
    throw Error("something went wrong");
});
//dynamic routing
//use /profile/:username  username after colon is dynamic parameter
//to use value of username we know the req will be send so to access its value req.params.username
app.get('/profile/name/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`)
  })

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('Error', { error: err })
  });

app.listen(3000)