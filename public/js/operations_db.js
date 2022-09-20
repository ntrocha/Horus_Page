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
        callback(result);
        //connection.end();
    });
};

function readRange(connection, callback){
    var a = dtnm1;
    var b = dtnm2;
    //const a =2;
    //const b =5;
    connection.query(`SELECT * FROM co_gps2 WHERE Time BETWEEN ${a} AND ${b}`, function (err, result){
        if (err) throw err;
        callback(result);
        //connection.end();
    });
}

module.exports = {insert, read, readFinal, readRange};