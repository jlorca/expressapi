var selector = require('./selector');

async function getAccounts (req, res) {
	var conn = req.jsforceConn,
		accounts;
	try {
		accounts = await selector.getAccounts(conn);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}

async function getAccount (req, res) {
	var conn = req.jsforceConn,
		accounts;
	try {
console.log('id = ' + req.params.id);
		accounts = await selector.getAccount(conn, req.params.id);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}

module.exports = {
    getAccounts,
    getAccount
};