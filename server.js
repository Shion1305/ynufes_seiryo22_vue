// 'use strict';
//
// // [START gae_node_request_example]
// const express = require('express');
//
// const app = express();
//
// app.get('/', (req, res) => {
//     res.status(200).send('Hello, world!').end();
// });
//
// // Start the server
// const PORT = parseInt(process.env.PORT) || 8080;
// app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}`);
//     console.log('Press Ctrl+C to quit.');
// });
// // [END gae_node_request_example]
//
// module.exports = app;

'use strict';

const express = require('express')
const app = express()
const fs = require('fs');
let sourceData;
let desc;

desc = prepareMetadata();
sourceData = prepareSourceData();
let html = '';
fs.readFile(__dirname + '/dist/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    html = data;
    // console.log(data);
});
app.use('/icon', express.static(__dirname + '/dist/icon/'));
app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/image', express.static(__dirname + '/dist/image/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.get('/*', (req, res) => {
    console.log("request received");
    if (req.path === "/robots.txt") {
        res.sendFile(__dirname + "/public/robots.txt");
        return;
    }
    if (req.path === "/sitemap.xml") {
        res.sendFile(__dirname + "/public/sitemap.xml");
        return;
    }
    const d = pager(req.path);
    let htmlTmp = html;
    if (d) {
        htmlTmp = html.replace("<title></title>", "<title>" + resolveTitle(d) + "</title>")
            .replace("<meta name=\"description\" content=\"\"/>", "<meta name=\"description\" content=\"" + (d.description !== '' ? d.description : "22清陵祭公式HP") + "\"/>")
            .replace("<meta property=\"twitter:title\" content=\"\"/>", "<meta property=\"twitter:title\" content=\"" + resolveTitle(d) + "\"/>");
    }
    res.send(htmlTmp);
});

const PORT = parseInt(process.env.PORT) || 8080;

app.listen(PORT, () => console.log('Example app listening on port ' + PORT));


function pager(entry) {
    if (entry.indexOf(".") > -1) {
        return {"title": "Not Found", "description": "お探しのページは見つかりませんでした"};
    }
    return resolveData(entry);
}


function resolveTitle(d) {
    return (d.title !== "" ? d.title + " | 22清陵祭『花笑み』公式HP 横浜国立大学大学祭" : "22清陵祭『花笑み』公式HP 横浜国立大学大学祭")
}


function resolveData(entry) {
    if (entry.indexOf(".") > -1) return;
    if (!entry.endsWith("/")) {
        entry = entry.concat("/");
    }
    console.log("ENTRY: " + entry);
    const specialResult = processSpecial(entry);
    if (specialResult) return specialResult;
    return resolveNormal(entry);
}

function processSpecial(entry) {
    const r = entry.match("^/events/(\\d{4})/?$");
    if (!r) return null;
    console.log(r[1]);
    const r1 = sourceData.find((data) => data.id == r[1]);
    console.log(r1);

    return {
        "title": r1.event_name + "(" + r1.org_name + ")の企画詳細",
        "description": "22清陵祭オンライン企画『" + r1.event_name + "』(" + r1.org_name + ") の企画詳細ページです。" + r1.event_description
    };
}

function resolveNormal(entry) {
    console.log("resolveNormal");
    return desc[entry];
}

function prepareMetadata() {
    try {
        return JSON.parse(fs.readFileSync(__dirname + '/description.json', 'utf8'));
    } catch (err) {
        console.log("error on loading metadata");
        console.log(err);
    }
}

function prepareSourceData() {
    try {
        return JSON.parse(fs.readFileSync(__dirname + "/src/assets/data.json", 'utf8'));
    } catch (err) {
        console.log("file load error");
        console.log(err);
    }
}

// module.exports(app);