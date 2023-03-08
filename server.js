// import { config } from "dotenv";
// config();

// import express, {request} from "express";

const express = require('express')

const app = express();
const port = process.env.PORT || 5010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['weather.html'],
}

app.use(express.static("frontend"));
// app.use(express.json());
app.use(express.static("public",options));

app.get("/", function(req, res){
	res.sendFile(process.cwd()+"/frontend/html/weather.html");
});

app.listen(port, function(){
    console.log("Server running on http://localhost:"+port);
    // console.log(`Server running on http://localhost:${port}`);
});