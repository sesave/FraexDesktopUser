var mysql = require('mysql');

// Add the credentials to access your database
module.exports = function() {

    // Criando objeto de conexão
    var conn = mysql.createConnection({
        host: 'sql10.freemysqlhosting.net',
        user: 'sql10279512',
        password: 'Iu79KRlJqt',
        database: 'sql10279512'
    });
    var query = 'SELECT * FROM `user_tb_register` LIMIT 10';
    conn.query(query, function(err, results) {
        console.log("Select * succesfully executed");
    });
    return conn;
};