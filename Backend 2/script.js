const express=require("express");
const app=express();
const session=require("express-session");
const cookieParser = require('cookie-parser');
//const usermodel=require("./users");

app.set("view engine","ejs");
app.use(express.static('./public'));
//code to use session
/*
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"HolaBholaLola"
}));
*/
//setting up cookie parser
//app.use(cookieParser());

app.get('/',(req,res)=>{
res.cookie("cookie",104);
res.send("Hello world");
});

//create cookie
/*
app.get('/createcookie',(req,res)=>{
    res.cookie("cookie",104);
    res.send("cookie created");
    });
*/

//check cookie
/*
app.get('/checkcookie',(req,res)=>{
    console.log(req.cookies);
    res.send("Check cookie");
})*/

//delete a cookie
/*
app.get('/deletecookie',(req,res)=>{
    res.clearCookie("cookie");
    res.send("cookie deleted");
    console.log(req.cookies);
})
*/

//code to create session
/*
app.get("/session",(req,res)=>{
    req.session.ban=true;
    res.send("Hello,session created");
})
*/

//code to check session
/*
app.get("/sessioncheck",(req,res)=>{
    console.log(req.session);
    if(req.session.ban==true){
        res.send("You are banned");
    }else res.send("You are unban");
})
*/

//deleting a session
/*
app.get('/undoban',(req,res)=>{
    req.session.destroy(function(err){
        if(err)throw err;
        res.send("ban removed");
        })
})
*/

//creating a entry in a database
/*app.get('/enterusers',async (req,res)=>{
    const user=await usermodel.create({
        username:"VineetOP",
        name:"Vineet",
        age:15
    })   
    res.send(user);
})*/

//reading Operation in a database
/*app.get('/findall',async (req,res)=>{
    const user11=await usermodel.find();
    res.send(user11);    
})*/


//finding a particular entry from database
/*app.get("/findone",async (req,res)=>{
    const onlyuser=await usermodel.findOne({username:"Cyborg"});
    res.send(onlyuser);
    console.log(onlyuser);
})*/


//deleting a entry from database
/*app.get("/delete",async (req,res)=>{
    const delete1=await usermodel.findOneAndDelete({username:"Cyborg"});
    res.send(delete1);
})*/

app.listen(3000);