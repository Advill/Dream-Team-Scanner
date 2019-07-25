const parser = require('./receipt-parser.js');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.get('/', function(req, res) {
  res.redirect('/index.html');
});
app.get('/test', function(req, res) {
  parse('./examples/receipt.jpg').then(function(attribs) {
    console.log(attribs);
    res.status(200).json(attribs);
  }).catch(err => res.status(418).send("busted"));
});

app.post('/upload', upload.single('Image'), function (req, res, next) {
  console.log(req.file.path);
  parse(req.file.path).then(function(attribs) {
    res.status(200).json(attribs);
  }).catch(err => res.status(418).send("busted"));
});

app.use(express.static('app'));

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log('App listening on port ${port}');
  });
}

// redirect all else to index
app.get('*', function (req, res) {
  res.redirect('/index.html');
});

module.exports = app;

async function parse(imgPath) {
  return parser.parseReceipt(imgPath);
}

