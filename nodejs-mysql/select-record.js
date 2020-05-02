let db_pool = require('./config').mysql_connect;


let stmt = `SELECT * FROM employee`;
db_pool.getConnection((error) => {  
    if (error) { 
        return console.error('Connection Error: '+error.message);
    } 

  // execute the SELECT Statment
  db_pool.query(stmt, (err, result) => {  
    if (err) {
        return console.error('Table Error: '+err.message);
    } 
      
    // Display records
    console.log(result);  
  }); 
});  
