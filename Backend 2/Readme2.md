**Client and Server**
Client <----------> Server

1)Client pe hoti hai cookie
Server pe hota hai session

2)dono hee data ko save krne k liye use hote hai

3)Server pe session m save krna is safe kuki cookies client side p save hote hai

//Learning sessions and cookies

->creating sessions
1)install express-session
2)import session in script or app file using
    const session=require("session");
3)to use this session write code in app or script file only
    
    app.use(session({
        resave: false,              //agar session ki value change nhi hui ho to firse save mt krna
        saveUninitialized:false,    //dont save uninitialized data
        secret:"RandomKuchBhi"      //secret string jiske basis pe data encrypt hoga
    }));

4)use below code to create a session while visiting on a route
    
    Router.get("/session",()=>{
        req.session.sessionkakoibhinaam="Hello";
        res.send("Hello");
    })

5)below code is used to destroy session

    req.session.destroy();

6)code to read a session

    app.get("/sessioncheck",(req,res)=>{
        console.log(req.session);
        if(req.session.ban==true){
        res.send("You are banned");
        }else res.send("You are unban");
    })

7)create read and destroy session

->req.session.session_ka_naam=session_ki_value;
->re.session.session_ka_naam;
->req.session.destroy


-->creating cookies

1)importing cookie parser
const cookieParser=require('cookie-parser');

2)setting cookie
app.use(cookieParser())

3)code to make cookies
res.cookie("naam",value) //res because apan server s cookie ko bhej rhe h so we send cookie to save as a response

4)code to check cookie
console.log(req.cookies) //req because cookie is saved on browser so we request cookie

5)code to delete cookie
res.clearCookie("naam");    

