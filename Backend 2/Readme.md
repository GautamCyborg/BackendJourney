node js install
import and export 
run the code
npm usage
express 
express generator
mongodb
middleware

backend --> server and database
GET --> shows data in route(use for normal data that does not need to be hide)
POST --> does not shows data in route(use for data like login data)


-express generator
this is use to make folder structure and also write basic code 
-steps to install and use express generator
1)install globally 
    npm i express-generator -g
2)now to create app,open cmd move to desktop
3)create new app: 
    express appname --view=ejs
4)cd appname -> npm i
5)run the app using:nodemon or npx nodemon //no need to write any filename
6)now in this express generator instead of using app.get you use router.get

**mongodb**
database are of two types 
relational->sql
non relational->mongodb

code->DB setup      mongodb->DB formation
code->Model         mongodb->collection
code->schema        mongodb->documents

database->pure app ka ek database hoga
collection->ek database m alag alag categories hongi vo collection hoga
models->uss collection ko banane k liye apn code m models banaenge
models(code)==collection(db)
schema(code)==documents(db)


**setting up db**
install mongodb
install mongoosejs
require and setup connection
make schema 
create model and export

**import and CRUD**
now import just like other files

**CRUD OPERATIONS**

**creating a entry in a database**

app.get('/enterusers',async (req,res)=>{
    const user=await usermodel.create({
        username:"VineetOP",
        name:"Vineet",
        age:15
    })   
    res.send(user);
})

**reading Operation in a database**

/*app.get('/findall',async (req,res)=>{
    const user11=await usermodel.find();
    res.send(user11);    
})*/


**finding a particular entry from database**
app.get("/findone",async (req,res)=>{
    const onlyuser=await usermodel.findOne({username:"Cyborg"});
    res.send(onlyuser);
    console.log(onlyuser);
})


**deleting a entry from database**
app.get("/delete",async (req,res)=>{
    const delete1=await usermodel.findOneAndDelete({username:"Cyborg"});
    res.send(delete1);
})