async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection('../the-dream-team-repo/receipt.jpg');
  const detections = result.textAnnotations;
  console.log('Text::');
  detections.forEach(text => console.log(text.description));
}

quickstart();
