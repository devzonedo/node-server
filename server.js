const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/dist/material-demo'));

app.listen(8081);
console.log('App listening on port 8081');