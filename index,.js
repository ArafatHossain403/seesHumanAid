var mysql= require('mysql');


var dataBaseConnection= {
    host: "localhost",
    user:"user",
    password:"",
    database:"seeshumanaid"
}
var connection= mysql.createConnection(dataBaseConnection);

connection.connect(function(error){
    if(error){
        console.log("connection fail")
    }
    else{
        console.log("connection Success")
    }

});