let db_pool = require('./config').mysql_connect; 
 
let sql = `UPDATE employee 
           SET city = ? 
           WHERE id = ?`; 

let data = ['Bangalore', 5];

// connect to the MySQL server
db_pool.getConnection((err) => {  
  if (err) throw err;  
   
  // execute the UPDATE statement
  db_pool.query(sql, data, (error, result) => {  
    if (error){
        return console.error(error.message);
    } 

    console.log(result.affectedRows + " record(s) updated");  
  });  
});  
