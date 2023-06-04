const n = require('./number');
const oneDollar = 82.56;
function roundTwo(num) {
      return Math.round((num * 100)/100);
}

exports.dollarToRupees = dollar => roundTwo(dollar * oneDollar);
exports.rupeeToDollars = rupee => roundTwo(rupee / oneDollar);