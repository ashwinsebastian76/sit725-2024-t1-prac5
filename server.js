var express = require("express")
var app = express()
var port = process.env.port || 1000;
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port,()=>{
console.log("App running on "+port)
})
