function getAccounts(conn) {
    return new Promise((resolve, reject) => {
        conn.query('SELECT Id, Name FROM Account ORDER BY Name ASC', 
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
        conn.query(`SELECT Id, Name, Website, Type, Rating, Acc_Logo__c, Image_URL__c FROM Account WHERE Id = '${accountId}'`,
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

function updateAccounts(conn, accounts) {
console.log('accs = ' + accounts);
    return new Promise((resolve, reject) => {
        conn.sobject("Account").update(accounts, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(getSuccessRecords(res));
            }
        });
    });
}

function getSuccessRecords (records) {
    var successRecords = [], i;
 
    for (i=0; i < records.length; i++) {
        if (records[i].success) {
            successRecords.push(records[i]);
        }
    }

    return successRecords;
}

module.exports = {
    getAccounts,
    getAccount,
    updateAccounts
};