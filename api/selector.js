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

module.exports = {
    getAccounts
};