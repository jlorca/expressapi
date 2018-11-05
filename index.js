var express = require('express'),
    bodyParser = require('body-parser'),
    api = require('./api/router')
    app = express(),
    port = process.env.PORT || 5000,
    cors = require('cors');;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({ origin: '*', allowedHeaders : ['Content-Type', 'sf_user', 'sf_password'] }));
app.use('/api', api);

app.get('*', function (req, res) {
    res.send('Invalid Endpoint');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))