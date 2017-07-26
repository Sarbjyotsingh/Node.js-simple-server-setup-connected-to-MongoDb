var express = require('express');
var app = express();
var port = process.env.PORT||8080;
var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/tutorial', function(err){
	if(err) {
		console.log('Not connected to the Database: '+ err);
	}
	else {
		console.log('Succesfully connected to Mongodb');
	}
});

app.listen(port, function () {
	console.log('Running the server on port ' + port);
});   
