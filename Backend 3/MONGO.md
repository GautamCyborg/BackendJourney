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

**ADVANCE MONGO DB**

->how to perform case sensetive search in mongodb
        
        var regex=new RegExp("Harsh",'i');                      
        
        //this above line of code converts harsh to case insensetive and store it in var name regex but there's a problem that it will search for all names containing harsh as substr
        //to solve that ^ use that to find something to start with and $ this to end with like below
        
        var regex=new RegExp("^Harsh$","i");
        let varname = await modelname.find({fieldname:regex});
    
->how do i find document where an array field contain all of a set of values
        
        let varname=await modelname.find({fieldname:{$all:["value","value2"]}})

->how can i search for documents with a specific date range in mongoose
        
        var date1=new Date('2023-11-20');
        var date2=new Date('2023-11-25');
        let varname=await modelname.find({fieldname:{$gte: date1,$lte: date2}})

        //in above code we have created variables name date1 and date 2 gte stands for greater than equal to and lte stands for less than equal to

    
->how can i filter documents based on the existence of a field in mongoose weather it has value or not

    var varname=await modelname.find({fieldname:{$exists: true}});
    
->how can i filter documents based on a specific fields length in mongoose

    let varnname=await modelname.find({
        $expr:{
            $and:[{$gte: [{$strLenCP: '$nickname'},0]},
                  {$lte: [{$strLenCP:'$nickname'},12]}]
    }
    })

