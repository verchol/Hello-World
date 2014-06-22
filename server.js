var express =             require('express')
    , path =              require('path')
    , http =              require('http')
 

var app = express();
 
 
 
var app = express();
app.use(express.logger({format: 'dev'}));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.methodOverride());
app.use( express.cookieParser() );
app.use(express.session({ secret: 'keyboard cat' }));
app.use(app.router);
app.use(function(err, req, res, next){
  //return error default
  console.log("Default Error:" + err);
  return res.send(500);
});
app.get('/', function (req, res)
{
  res.render("./app/index.html");
});
app.post('/deploy', function (req, res)
{
   var request = require('request');
   request.post("http://localhost:8000/projects/freshsite/deploy", function(err, data)
   {
   	res.send("ok");
   });
});
 
app.set('port', process.env.PORT || 3000);
 
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
   // console.log(app.routes);
});

 
exports.app = app;