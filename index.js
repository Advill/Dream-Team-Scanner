const parser = require('./receipt-parser.js');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  val = parse()
  res.status(200).send('attribs');
});

if (module === require.main) {
  // [START server]
  const server = app.listen(process.env.PORT || 8080, () =>
    const port = server.aaddress().port;
    console.log('App listening on port ${port}');
  );
}

module.exports = app;

function parse() {
  parser.parseReceipt('./examples/receipt.jpg').then(function(attribs) {
    console.log(attribs);
  });
}

