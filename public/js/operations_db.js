const mysql = require('mysql');
//const { dtnm1, dtnm2 } = require("./historic").default;
import { dtnm1, dtnm2 }  from "./historic";
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

function save(){
    optdate1 = (document.getElementById("since").value);
    if(optdate1){ 

        function readRange(connection, callback){
            // const a ="202209261730";
            // const b ="202209261732";
            optdate1 = (document.getElementById("since").value).toString();
            dtnm1 = optdate1.substr(0,4) + optdate1.substr(5,2) + optdate1.substr(8,2) + optdate1.substr(11,2) + optdate1.substr(14,2);
    
            optdate2 = (document.getElementById("until").value).toString();
            dtnm2 = optdate2.substr(0,4) + optdate2.substr(5,2) + optdate2.substr(8,2) + optdate2.substr(11,2) + optdate2.substr(14,2);
            const a = dtnm1;
            const b = dtnm2;
            
            
            connection.query(`SELECT * FROM prueba WHERE Time BETWEEN ${a} AND ${b}`, function (err, result){
                if (err) throw err;
                console.log(result);
                callback(result);    
                //connection.end();
            });
        }
    }
}
module.exports = {insert, read, readFinal, readRange};