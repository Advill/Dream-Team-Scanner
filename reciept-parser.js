async function scrapeReceipt(image) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection(image);
  return result.textAnnotations;
}

async function parseText(textarr) {
  console.log(await textarr)
}

var textarr = scrapeReceipt('./examples/receipt.jpg');
parseText(textarr);
