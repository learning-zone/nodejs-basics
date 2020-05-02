let db_pool = require('./config').mysql_connect;


// connect to the MySQL server
db_pool.getConnection(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  

  // insert statment
  let stmt = "INSERT INTO employee (name, age, city) VALUES ?";  
  let values = [  
                  ['Bharat Kumar', '25', 'Mumbai'],  
                  ['John Cena', '35', 'Las Vegas'],  
                  ['Ryan Cook', '15', 'CA']  
              ];  

  // execute the insert statment
  db_pool.query(stmt, [values], function (err, result) {  
    if (err) {
      return console.error(err.message);
    } 

    // get total records
    console.log("Number of records inserted: " + result.affectedRows);  
  });
}); 



