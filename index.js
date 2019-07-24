const parser = require('./receipt-parser.js');

parser.parseReceipt('./examples/receipt.jpg').then(function(attribs) {
  console.log(attribs);
});

