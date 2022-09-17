const Pool = require('pg').Pool;
const fs = require('fs');

const db_config = fs.readFileSync('../db.json'); 

const db = JSON.parse(db_config);

const pool = new Pool({
    user: {...db}.user,
    password: {...db}.password,
    host: {...db}.host,
    port: {...db}.port,
    database: {...db}.database
})

module.exports = pool