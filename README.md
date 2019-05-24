# another-mysql-promise
A very lightweight Node.js mysql driver wrapper that adds promises so you can use nice tidy async/await style code. Works great if you're writing Node.js based AWS Lambdas with a MySQL backend.

Requires the Node.js mysql package to be installed (https://www.npmjs.com/package/mysql) with "npm i mysql"

Example usage from a Lambda (see my cryptocurrency projects!):

```
const dbLib = require('mysqlPromise');

db = new dbLib({
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: "cryptocurrencyData",
});

//no more callbacks! yay!
await db.query("INSERT INTO `coin` (`identifier`) VALUES(?);", [coin.id]);

//run more queries or other code or whatever immediately after the query finishes
console.log("Gonna do some stuff");
```
