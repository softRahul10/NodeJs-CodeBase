const express = require('express');

const quotes = require('../data/quotes');

const generateNumber = require('../util/random');

const router = express.Router();

router.use((req, res) => {
      let hindiQuotes = quotes.hindiQuotes;
      let index = generateNumber(hindiQuotes.length);
      let quote = hindiQuotes[index];
      res.status(200);
      res.json({data: quote});
})

module.exports = router;