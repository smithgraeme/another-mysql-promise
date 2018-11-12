# another-mysql-promise
A very lightweight Node.js mysql driver wrapper that adds promises so you can use nice tidy async/await style code. Works great if you're writing Node.js based AWS Lambdas with a MySQL backend.

Example usage:

```
const dbLib = require('mysqlPromise');

db = new dbLib({
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: "cryptocurrencyData",
});

//no more callbacks!
await db.query("INSERT INTO `coin` (`identifier`) VALUES(?);", [coin.id]);
```
