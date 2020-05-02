let db_pool = require('./config').mysql_connect; 

// Avoid SQL injection
let sql = `DELETE FROM employee WHERE id = ?`;  

// connect to the MySQL server
db_pool.getConnection((err) => {  
  if (err) throw err;  
  
  // execute the SQL QUery
  db_pool.query(sql, [20], (err, result) => {  
    if (err) throw err; 

    console.log("Number of records deleted: " + result.affectedRows);  
  });  
}); 
