var jsforce = require('jsforce');

function ensureAuth(req, res, next) {
	var conn = new jsforce.Connection();

	conn.login(req.headers.sf_user, req.headers.sf_password, (err, sfRes) => {
		if (err) {
			res.status(300).send(err);
		} else {
			req.jsforceConn = conn;
			next();
		}
	});
}

module.exports = {
    ensureAuth
};