// myfirstapp.js (First Service)
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

const secondServiceHost = process.env.MYSECONDAPP_SERVICE_HOST;
const secondServicePort = process.env.MYSECONDAPP_SERVICE_PORT;

app.get('/', function (req, res) {
    res.send('Hello from the first service');
});

app.get('/call-second-service', function (req, res) {

    if (!secondServiceHost || !secondServicePort) {
        return res.status(500).send("Second service environment variables not set.");
    }

    const secondServiceUrl = `http://${secondServiceHost}:${secondServicePort}`;

    require('http').get(secondServiceUrl, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            res.send(`Hello from Service 1. Also, ${data}`);
        });

    }).on("error", (err) => {
        res.send("Error: " + err.message);
    });
});


app.listen(port, () => {
    console.log(`First service listening on port ${port}`);
});

