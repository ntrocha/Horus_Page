const mysql = require('mysql');
const { dtnm1, dtnm2 } = require("./historic");

function insert(connection, callback){
    let insertQuery = "INSERT INTO co_gps2(Lat,Lng) VALUES('1','1')";
    connection.query(insertQuery, function(err, result){
        if(err) throw err;
        callback(result);
        //connection.end();
    });
};

function read(connection, callback){
    connection.query("SELECT * FROM co_gps2", function (err, result){
        if (err) throw err;
        callback(result);
        //connection.end();
    });
};

function readFinal(connection, callback){
    connection.query("SELECT * FROM co_gps2 order by id DESC LIMIT 1", function (err, result){
        if (err) throw err;
        console.log(result[(Object.keys(result).length)-1])
        callback(result[(Object.keys(result).length)-1]);
        //connection.end();
    });
};

function readRange(connection, callback){
    //  var a = dtnm1.toString();
    //  var b = dtnm2.toString();
    var a = '2022-09-26T13:21';
    var b = '2022-09-26T13:25';
    // var a = '1.664209075422E12';
    // var b = '1.664210299422E12';
    //const a =2;
    //const b =5;
    connection.query(`SELECT * FROM prueba WHERE Time BETWEEN ${a} AND ${b}`, function (err, result){
        if (err) throw err;
        console.log(result);
        callback(result);    
        //connection.end();
    });
}

module.exports = {insert, read, readFinal, readRange};