var con = require('./config').mysql_connect; 

// connect to the MySQL server
con.connect(function(err) {  
  if (err) throw err;  
    console.log("Connected!"); 

  let statement = `create table if not exists employee(
                       id int primary key auto_increment,
                       name varchar(255) not null,
                       age INT(3),
                       city VARCHAR(255),
                       active tinyint(1) not null default 0
                   )`;


  con.query(statement, function (err, result) {  
  if (err) throw err;  
    console.log("Table created!");  
  });
});  
