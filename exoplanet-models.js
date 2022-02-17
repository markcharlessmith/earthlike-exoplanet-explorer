const { Pool } = require('pg');
// has my ElephantSQL link
const PG_URI = 'postgres://wvvcdfhn:iGRLlMBdSifD-QQnxQeBNvDbU-8IgggE@salt.db.elephantsql.com/wvvcdfhn';
const pool = new Pool({
    connectionString: PG_URI
})
module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};