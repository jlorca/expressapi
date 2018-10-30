var express = require('express'),
    router = express.Router(),
    controller = require('./controller'),
    md_auth = require('./auth_middleware');

router.get('/accounts', md_auth.ensureAuth, controller.getAccounts)

module.exports = router