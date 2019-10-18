'use strict';
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
// Imports dependencies and set up http server
const
    request = require('request'),
    express = require('express'),
    body_parser = require('body-parser'),
    app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 2337, () => console.log('webhook is listening on port :: 2337 '));

// Accepts POST requests at /webhook endpoint
app.get('/', (req, res) => {
    res.status(200).send('App is Running');
});
app.get('/getName', (req, res) => {
    res.status(200).send('AYUS  this is get');
});

app.post('/getName', (req, res) => {
    let body = req.body.name;
    if (body != null) {
        console.log(body.toString());
        return res.status(200).send('AYUS  this is post');
    }
    res.status(200).send('AYUS  this is post but body is null');
});