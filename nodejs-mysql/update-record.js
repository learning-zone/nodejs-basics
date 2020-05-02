let db_pool = require('./config').mysql_connect; 
 
let sql = "UPDATE employee SET city = 'Ranchi' WHERE id = 1"; 

// connect to the MySQL server
db_pool.getConnection((err) => {  
  if (err) throw err;  
   
  db_pool.query(sql, (err, result) => {  
    if (err) throw err;  

    console.log(result.affectedRows + " record(s) updated");  
  });  
});  
