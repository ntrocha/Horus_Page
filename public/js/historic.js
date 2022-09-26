
var dtnm1
var dtnm2
//var boton = document.getElementById("btnH");

    function save() {
        var optdate1;
        var optdate2;
        optdate1 = document.getElementById("since").value;
        console.log(optdate1);
        dtnm1= Date.UTC(optdate1);
        console.log(dtnm1);
        //dtnm1 = 2;

        optdate2 = document.getElementById("until").value;
        console.log(optdate2);
        dtnm2= Date.UTC(optdate2);
        console.log(dtnm2);
        //dtnm2 = 5;
    }//,

//module.exports = {dtnm1, dtnm2};
