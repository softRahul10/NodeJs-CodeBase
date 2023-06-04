const generateRandomNumber = (n) => {
      let number = Math.floor(Math.random() * n);
      console.log('Random number: ' + number);
      return number;
}

module.exports = generateRandomNumber;