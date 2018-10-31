function getAccounts(conn) {
    return new Promise((resolve, reject) => {
        conn.query('SELECT Id, Name FROM Account', 
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.records);
                }
            }
        );
    });
}

function getAccount(conn, accountId) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT Id, Name FROM Account WHERE Id = '${accountId}'`,
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.records);
                }
            }
        );
    });
}

module.exports = {
    getAccounts,
    getAccount
};