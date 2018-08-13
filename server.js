var express = require('express');
console.log(express);
var app = express();
app.listen(8080);
// app.get('/', function(request, response){
//   console.log("Hello World");
// });

app.use(express.static('public'));
app.use(express.static('node_modules'));