// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  if (!classifier) {
    classifier = ml5.imageClassifier("MobileNet");
  }
  img = loadImage("images/breast.jpg");
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img).then(results => {
    //If no callback is provided to any asynchronous function then a Promise is returned.
    image(img, 0, 0);
    gotResult(null, results);
  });
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv("Label: " + results[0].label);
    createDiv("Confidence: " + nf(results[0].confidence, 0, 2));
  }
}
