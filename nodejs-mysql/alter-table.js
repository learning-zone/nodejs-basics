let db_pool = require('./config').mysql_connect; 

let sql = `ALTER TABLE employee ADD COLUMN salary DOUBLE(10, 2)`; 

// connect to the MySQL server
db_pool.getConnection((err) => {  
  if (err) throw err;  
  console.log("Connected!");  
 
  // execute the SQL QUery
  db_pool.query(sql, (err, result) => {  
    if (err) throw err;  
    
    console.log("Table altered!");  
  });  
});  
