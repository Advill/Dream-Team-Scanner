async function scrapeReceipt(image) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection(image);
  const annotations = result.textAnnotations;
  var arr = [];
  annotations.forEach(function(annotation) {
    if(annotation.description.length > 2 && annotation.description.length <= 20) {
      arr.push(annotation.description)
    }
  });
  return arr;
}

async function parseText(textarr) {
  textarr.then(function (array) {
    array.forEach(val => console.log(val));
  });
}

var textarr = scrapeReceipt('./examples/receipt.jpg');
parseText(textarr);
