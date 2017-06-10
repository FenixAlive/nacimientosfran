var express = require("express");
var app = express();

app.use(express.static("../"));

app.get("/", function(req,res){
	res.render("../index")
});


app.get("/chiquito", function(req,res){
	res.render("chiquito")
});


app.get("/mini", function(req,res){
	res.render("mini")
});


app.get("/cisco", function(req,res){
	res.render("cisco")
});


app.get("/mini-especial", function(req,res){
	res.render("mini-especial")
});


app.get("/francis", function(req,res){
	res.render("francis")
});


app.get("/estrella", function(req,res){
	res.render("estrella")
});


app.get("/casita", function(req,res){
	res.render("casita")
});


app.get("/templo", function(req,res){
	res.render("templo")
});

app.listen(8888);
