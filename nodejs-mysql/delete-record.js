let db_pool = require('./config').mysql_connect; 


let sql = `DELETE FROM employee WHERE id = 21`;  

// connect to the MySQL server
db_pool.getConnection((err) => {  
  if (err) throw err;  
  
  // execute the SQL QUery
  db_pool.query(sql, (err, result) => {  
    if (err) throw err; 

    console.log("Number of records deleted: " + result.affectedRows);  
  });  
}); 
