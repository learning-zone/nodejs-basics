let db_pool = require('./config').mysql_connect; 
 
let sql = `UPDATE employee SET city = 'Ranchi' WHERE id = ?`; 

// connect to the MySQL server
db_pool.getConnection((err) => {  
  if (err) throw err;  
   
  // execute the SQL QUery
  db_pool.query(sql, [10], (err, result) => {  
    if (err) throw err;  

    console.log(result.affectedRows + " record(s) updated");  
  });  
});  
