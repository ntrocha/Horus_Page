
var dtnm1
var dtnm2
//var boton = document.getElementById("btnH");

    function save() {
        var optdate1;
        var optdate2;
        optdate1 = (document.getElementById("since").value).toString();
        console.log(optdate1);
        dtnm1 = optdate1.substr(0,4) + optdate1.substr(5,2) + optdate1.substr(8,2) + optdate1.substr(11,2) + optdate1.substr(14,2);
        //dtnm1 = 2;
        console.log(dtnm1);

        optdate2 = document.getElementById("until").value;
        console.log(optdate2);
        dtnm2 = optdate2.substr(0,4) + optdate2.substr(5,2) + optdate2.substr(8,2) + optdate2.substr(11,2) + optdate2.substr(14,2);
        console.log(dtnm2);

        function readRange(connection, callback){
            // const a ="202209261730";
            // const b ="202209261732";
            const a = dtnm1;
            const b = dtnm2;
            connection.query(`SELECT * FROM prueba WHERE Time BETWEEN ${a} AND ${b}`, function (err, result){
                if (err) throw err;
                console.log(result);
                callback(result);    
                //connection.end();
            });
        };

        app.get("/readRange", (req, res) =>{
            readRange(connection, result => {
                res.json(result);
                // datos = result;
                // console.log(datos);
            });
        });
    };


//(moment().utc().format('YMDHHmmss'))
