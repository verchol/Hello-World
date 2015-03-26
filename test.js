var cassandra = require('cassandra-driver');
var assert = 	require('assert');
console.log("testing cassandra");
var client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'demo'});

client.execute("INSERT INTO users  (lastname , age) VALUES ('Jones', 36)", function (err, result) {
           // Run next function in series
           if (err)
           	console.log("error:" + err);
           else 
            console.log("everething is ok");
});


 

client.execute("SELECT * FROM users WHERE lastname='Jones'", function (err, result) {
           if ( result.rows.length > 0 ) {
               var user = result.rows[0];
               console.log("name = %s, age = %d", user.firstname, user.age);
           } else {
               console.log("No records");
           }
 
           // Run next function in series
 
       });
 