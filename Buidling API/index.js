const express = require('express');

const englishRoute = require('./routes/english');

const hindiRoute = require('./routes/hindi');

const app = express();

app.use('/quote/english', englishRoute);

app.use('/quote/hindi', hindiRoute);

app.listen(3000);