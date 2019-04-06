// import * as mobilenet from '@tensorflow-models/mobilenet';
import mobilenet from './mobilenet';
let model = null
async function run(img: HTMLImageElement) {
    // Load the MobileNetV2 model.
    model = model || await mobilenet(img);

    // Classify the image.
    if (!img.width) {
        img.setAttribute('height', 300)
        img.setAttribute('width', 300)
    }
    if (img.width > document.body.clientWidth) {
        img.setAttribute('width', document.body.clientWidth)
    }
    const predictions = await model.classify(img);
    console.log('Predictions');
    return (predictions);
}

// Ensure to load the image.
window.onload = (e) => {
    const img = document.getElementById('img') as HTMLImageElement;
    run(img).then(predictions => {
        const para = document.getElementById('beauty')
        para.textContent += predictions.map(item => `\n${item.className}: probability(${item.probability.toFixed(2)})`);
    });
    // input func
    var input = document.querySelector('input');
    var preview = document.querySelector('.preview');

    // input.style.opacity = 0;
    input.addEventListener('change', updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }

        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement('p');
            para.textContent = 'No files currently selected for upload';
            preview.appendChild(para);
        } else {
            var list = document.createElement('ol');
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement('li');
                var para = document.createElement('p');
                if (validFileType(curFiles[i])) {
                    para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
                    var image = document.createElement('img');
                    image.src = window.URL.createObjectURL(curFiles[i]);

                    listItem.appendChild(image);
                    image.onload = function () {
                        run(image).then(predictions => {

                            para.textContent += predictions.map(item => `\n${item.className}: probability(${item.probability.toFixed(2)})`);
                            listItem.appendChild(para);
                        })

                    }
                } else {
                    para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
                    listItem.appendChild(para);
                }

                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ]

    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }

        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }
}
