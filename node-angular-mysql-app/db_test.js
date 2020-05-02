var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodejs"
});

con.connect(function(err) {
  if (err){
    throw err;
  } else {
    console.log(" Connected!");
    con.query("SELECT * FROM customer", function (err, result, fields) {
      if (err) throw err;
        console.log(result);
        result.forEach(function(element) {
          console.log(element.id+' '+element.name+' '+element.email+' '+element.phone);
        }, this);
    });
  }
  
});


