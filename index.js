const parser = require('./receipt-parser.js');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Route to index
app.get('/', function(req, res) {
  res.redirect('/index.html');
});

// test route
app.get('/test', function(req, res) {
  parse('./examples/receipt.jpg').then(function(attribs) {
    console.log(attribs);
    res.status(200).json(attribs);
  }).catch(err => res.status(418).
    send("Something went wrong! contact your local guy who wrote this"));
});

// upload image through post request
app.post('/upload', upload.single('Image'), function (req, res, next) {
  console.log('Image received! file:' + req.file.path);
  parse(req.file.path).then(function(attribs) {
    res.status(200).render("response", attribs);
  }).catch(err => res.status(418).
    send("Something went wrong! contact your local guy who wrote this"));
});

// redirect all else to index
// This goes last in the direct links//
/*app.get('*', function (req, res) {
  console.log("Can't find address, redirecting");
  res.redirect('/index.html');
});*/

app.use(express.static('app'));

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log('App listening on port ${port}');
  });
}


module.exports = app;

async function parse(imgPath) {
  return parser.parseReceipt(imgPath);
}

