var mysql = require('mysql');

config = {
    mysql_connect : mysql.createConnection({  
        host: "localhost",  
        user: "root",  
        password: "root",
        database: "learning_zone"   
    })
}; 
module.exports = config;


