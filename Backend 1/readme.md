what i have learned in backend
1)routing
2)middleware
3)dynamic routing or route parameters
3)template engines->ejs(what i learned),there are more like->pug,handlebars,jade etc
4)static folder
5)error handling

setting up ejs->

1)install ejs using npm i ejs
2)configure ejs using code
    app.set("view engine",ejs);
3)ek views folder banao
4)usme ejs file banao
5)now use render in script file with res instead of send->and add the name of file inside  the view folder and make sure you dont add .ejs

static folder->

1)create a folder called public
2)create three folders inside public images,stylesheets,images
3)setup static path inside the script.js backend file using code
    app.use(express.static('./public'));
4)now while loading request it will always load and look for static files they can be configured inside other files
5)make sure not to write the "public" in path of the file because we have already defined it and used it

error handling->
1)use error handler code which will render whenever the error occurs from express js error handling documentation 
2)write this code inside app.use()->so that it always checks for the error and use it whenever error occurs

    function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}


2)now inside a route write
    throw Error("something went wrong");
3)**IMPORTANT**error handler ka code humesha last m likhna h 


