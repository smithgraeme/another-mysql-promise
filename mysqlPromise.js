const mysql = require('mysql');

class mysqlPromise {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    query(query, queryArguments) {

        return new Promise((resolve, reject) => {

            this.connection.query(query, queryArguments, (err, result) => {

                if (err) {
                    return reject(err);
                }

                resolve(result);
            });
        });
    }

    close() {

        return new Promise((resolve, reject) => {

            this.connection.end(err => {

                if (err) {
                    return reject(err);
                }

                resolve();
            });
        });
    }
}

module.exports = mysqlPromise;
