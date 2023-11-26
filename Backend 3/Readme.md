->what in this

flash messages
authentication and authorization

->using flash messages

1)install connect-flash
2)MAKE SURE TO SETUP EXPRESS SESSION
3)connect flash in app.use function -- to run it before loading a route everytime
4)kisi bhi route p flash create kre
5)kisi bhi dusre route p flash chlae

**BINA EXPRESS SESSION K CONNECT FLASH NAHI CHALEGA**(end game part 2 start-33:00)

1)install connect flash
    npm i connect flash

2)setup express-session
    all in prev

3)ab setup krne k baad m hee 
    app.use("connect-flash");

4)creating flash ->actually flash message will be created in one route and can be used in other route this is why it is used

    router.get('/route',(req,res)=>{
        req.flash("naam",value);
    })

**AUTHENTICATION AND AUTHORIZATION**(end game part 2 1:15-1:40)
all code for authentication and authorization is in folder name code

->install these packages
npm i passport passport-local passport-local-mongoose mongoose-express-session

->import passport
var passport=require('passport');

->write app.js code first in app.js file(from image) and write it after view engine and before logger

->then initialise passport(app.js code is same)
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());            //users router is userfile that is imported with name usersRouter
passport.deserializeUser(userRouter.deserializeUser());

->setup users.js properly

->in index.js try register first and then others code as well



**form submission,authentication and authorization,regular expression and mongo need more time**



