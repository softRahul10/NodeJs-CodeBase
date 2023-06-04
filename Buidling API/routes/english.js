const express = require('express');

const quotes = require('../data/quotes');

const generateNumber = require('../util/random');

const router = express.Router();

router.use((req, res) => {
      let englishQuotes = quotes.englishQuotes;
      let index = generateNumber(englishQuotes.length);
      let quote = englishQuotes[index];
      res.status(200);
      res.json({data: quote});
})

module.exports = router;