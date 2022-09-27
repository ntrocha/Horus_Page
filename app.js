const express = require('express')
const app = express()
const port = 8080;
const mysql = require("mysql");
require("dotenv").config();

const {insert, read, readFinal, readRange} = require("./public/js/operations_db");

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
//DATA BASE MYSQL 
var datos;

const connection = mysql.createConnection({
    host: process.env.Host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
})

app.get("/insert", (req, res) =>{
    insert(connection, result => {
        res.json(result);
    });
});

app.get("/read", (req, res) =>{
    read(connection, result => {
        res.json(result);
        datos = result;
        console.log(datos[0]);
    });
});

app.get("/readFinal", (req, res) =>{
    readFinal(connection, result => {
        res.json([result]);
        //datos = result;
        //console.log(datos[0].Lat);
    });
});

function readR () {
    app.get("/readRange", (req, res) =>{
        readRange(connection, result => {
            res.json(result);
            // datos = result;
            // console.log(datos);
        }, setInterval(readRange, 1000)
        );
    });
};
readR();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

