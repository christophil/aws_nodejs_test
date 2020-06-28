const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.listen("8500", "localhost");
