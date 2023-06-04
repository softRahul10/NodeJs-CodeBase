const express = require('express');
const path = require('path');

const app = express(); // request handler

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


app.listen(3000);