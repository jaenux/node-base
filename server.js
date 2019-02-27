var cors = require('cors');
var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

app.use(express.json());

var Router = require('./routes/route.js')(app);
app.use("/g1", Router);

app.use(cors({credentials:true, origin:true}));

var server = app.listen(3000, function(){
	    console.log("Express server has started on port 3000")
})
