async function scrapeReceipt() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection('../the-dream-team-repo/receipt.jpg');
  return result.textAnnotations;
}

function isTotal(element) {
  return new String("total").equalsEgnoreCase(element);
}


async function parseText(textarr) {

  
}


