const mysql = require('mysql');
import {save1, save2} from './historic'
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
    const a ="202209261730";
    const b ="202209261732";
    // const a = 1;
    // const b = 5;
    connection.query(`SELECT * FROM prueba WHERE Time BETWEEN ${a} AND ${b}`, function (err, result){
        if (err) throw err;
        console.log(result);
        callback(result);    
        //connection.end();
    });
}

module.exports = {insert, read, readFinal, readRange};