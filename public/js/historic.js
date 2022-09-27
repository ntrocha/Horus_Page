var dtnm1
var dtnm2

function save1 () {
        var optdate1;

        optdate1 = (document.getElementById("since").value).toString();
        console.log(optdate1);
        dtnm1 = optdate1.substr(0,4) + optdate1.substr(5,2) + optdate1.substr(8,2) + optdate1.substr(11,2) + optdate1.substr(14,2);
        //dtnm1 = 2;
        console.log(dtnm1);
        
};
function save2 () {
    var optdate2;
    optdate2 = document.getElementById("until").value;
    console.log(optdate2);
    dtnm2 = optdate2.substr(0,4) + optdate2.substr(5,2) + optdate2.substr(8,2) + optdate2.substr(11,2) + optdate2.substr(14,2);
    console.log(dtnm2);
    //dtnm2 = 5;
};

module.exports = require (save1, save2);


