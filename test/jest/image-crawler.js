var getImageUrls = require('get-image-urls');
var fs = require('fs');
request = require('request');

var download = async function ({ uri, filename, callback, path }) {
    return new Promise((resolve, reject) => {

        request.head(uri, function (err, res, body) {
            if (err) {
                reject()
                console.log(err)
            } else {

                console.log('content-type:', res.headers['content-type']);
                console.log('content-length:', res.headers['content-length']);

                request(uri).pipe(fs.createWriteStream(path + '/' + filename)).on('close', () => {
                    resolve()
                    callback()
                });
            }
        });
    })
};


const getImages = () => {
    getImageUrls('https://www.ximalaya.com/my/subscribed', function (err, images) {
        debugger
        if (!err) {
            console.log('Images found', images.length);
            // console.log(images);
            const title = 'image-crawler'
            const dir = `/Users/qcgm1978/Movies/bilibili/${title}`
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            fs.writeFile(`${dir}/img`, JSON.stringify(images), function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
            const promises = images.map(item => {
                const filename = item.url.split('/').pop()
                return download({
                    uri: item.url,
                    filename,
                    path: dir,
                    callback: function () {
                        console.log('single file downloaded done');
                    }
                });
            })
            Promise.all(promises).then(_ => console.log('all files downloaded')).catch(_ => { console.log('something wrong') })
        }
        else {
            console.log('ERROR', err);
        }
    })
}
getImages()