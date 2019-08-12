// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.9 };
const classifier = ml5.soundClassifier(
  "SpeechCommands18w",
  options,
  modelReady
);

function modelReady() {
  // classify sound
  classifier.classify(gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  // log the result
  console.log(result);
  if (result[0].confidence > 0.95) {
    document.body.append(JSON.stringify(result[0]));
  }
}
