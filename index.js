const parser = require('./receipt-parser.js');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  parse().then(function(attribs) {
    console.log(attribs);
    res.status(200).json(attribs);
  });
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log('App listening on port ${port}');
  });
}

module.exports = app;

async function parse() {
  return parser.parseReceipt('./examples/receipt.jpg');
}

