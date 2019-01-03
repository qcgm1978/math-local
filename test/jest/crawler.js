var Crawler = require("crawler");
var fs = require('fs');

var c = new Crawler({
    // encoding: null,
    jQuery: true,
    maxConnections: 1,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("title").text());
            // console.log($('body').html())
            // fs.createWriteStream(res.options.filename).write(res.body);
            const dir = `/Users/qcgm1978/Movies/bilibili/${$("title").text()}`
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            let title = $('.content-card .centered-primary-text .title').text()
            title = $('body').html()
            console.log(`title is ${title}`)
            fs.writeFile(`${dir}/title`, title, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
            fs.createWriteStream(res.options.filename).write(res.body);

        }
        done();
    }
});

// c.on('schedule', function (options) {
//     options.proxy = "hk200.whitebear123.com:26336";
// });

// Queue just one URL, with default callback
// c.queue('http://www.sina.com');

// Queue a list of URLs
// c.queue(['http://www.baidu.com/', 'http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
c.queue([{
    // uri: 'https://video-http.media-imdb.com/MV5BMTBmY2I4YmItYTdkNi00N2IyLTg1MzgtZDkwMWRmNWQwMzE4XkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1546583775&Signature=PJLsh8VQ-WWfY6l2-PJSburyPGQXScg4ARARj1mr-d43110PI6d90AavmXIvEQrjx3sz0fMhxSU-~Lb8xTeCHPv178U2x8~V0tHZZOEKTRlWMkW~HXhRTBDx27KtLW0pfQt2fPkyTeoYwm6l5vvKBGCYdzpFyXaXtevzdCgatKA_&Key-Pair-Id=APKAILW5I44IHKUN2DYA',
    uri: 'http://www.kit.edu/english/',
    // filename: '/Users/qcgm1978/Movies/bilibili/aquaman.mp4'
    // jQuery: true,

    // The global callback won't be called
    // callback: function (error, res, done) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Grabbed', res.body.length, 'bytes');
    //         fs.writeFile(`/tmp/test${$("title").text()}`, $('body').html(), function (err) {
    //             if (err) {
    //                 return console.log(err);
    //             }

    //             console.log("The file was saved!");
    //         })
    //     }
    //     done();
    // }
}]);

// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
    // html: '<p>This is a <strong>test</strong></p>'
// }]);