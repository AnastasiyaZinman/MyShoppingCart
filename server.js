var express = require('express');
console.log(express);
var app = express();
app.listen(8000);
app.get('/', function(request, response){
  console.log("Hello World");
});