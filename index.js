var express = require('express'),
    bodyParser = require('body-parser'),
    api = require('./api/router')
    app = express(),
    port = process.env.PORT || 5000,
    cors = require('cors');;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

app.use(cors({ origin: 'http://localhost:8100', credentials: true}));
app.use('/api', api);

app.get('*', function (req, res) {
    res.send('Invalid Endpoint');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))