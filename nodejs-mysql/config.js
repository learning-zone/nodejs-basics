/**
 * CONNECTION POOL
 * 
 */
var mysql = require('mysql');

config = {
    mysql_connect : mysql.createPool({  
        connectionLimit: 10,
        host: "localhost",  
        user: "root",  
        password: "root",
        database: "learning_zone"   
    })
}; 
module.exports = config;
