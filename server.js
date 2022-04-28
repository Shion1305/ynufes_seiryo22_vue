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


const express = require('express')
const app = express()
const fs = require('fs');
let sourceData;
let desc;

fs.readFile(__dirname + '/description.json', 'utf8', (err, data) => {
    console.log(data);
    desc = JSON.parse(data);
});
fs.readFile(__dirname + "/src/assets/data.json", 'utf8', (err, data) => {
    console.log(data);
    sourceData = JSON.parse(data);
});
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
    if (req.path === "/robots.txt") {
        res.sendFile(__dirname + "/public/robots.txt");
        return;
    }
    if (req.path === "/sitemap.xml") {
        res.sendFile(__dirname + "/public/sitemap.xml");
        return;
    }
    if (req.path.indexOf(".") > -1) return;
    const d = resolveData(req.path);
    console.log(d);
    let htmlTmp = html;
    if (d) {
        htmlTmp = html.replace("<title></title>", "<title>" + resolveTitle(d) + "</title>")
            .replace("<meta name=\"description\" content=\"\"/>", "<meta name=\"description\" content=\"" + (d.description !== '' ? d.description : "22清陵祭公式HP") + "\"/>")
            .replace("<meta property=\"twitter:title\" content=\"\"/>", "<meta property=\"twitter:title\" content=\"" + resolveTitle(d) + "\"/>");
    }
    console.log(htmlTmp);
    console.log(d.title);
    res.send(htmlTmp);
});

const PORT = parseInt(process.env.PORT) || 8080;

app.listen(PORT, () => console.log('Example app listening on port ' + PORT));

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
    console.log(desc);
    console.log("resolveNormal");
    console.log(desc[entry])
    return desc[entry];
}