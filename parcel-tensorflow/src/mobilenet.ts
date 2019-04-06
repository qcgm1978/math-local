import * as mobilenet from '@tensorflow-models/mobilenet';
let model = null
async function generateModel(img: HTMLImageElement) {
    // Load the MobileNetV2 model.
    return await mobilenet.load(2, 1.0);
}
export default generateModel