
var marker = L.marker([51.5, -0.09]);
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);

marker.addTo(map);
var url = "/readFinal"
var aplicacion = new function(){
    this.tparameters = document.getElementById("tparameters");
    var plyln = [];
    //EDITAR EN UNA FUNCION LOOP ETERNO
    this.Leer = async function(){

        var datos="";
        
        const response  = await fetch(url)
        const json = await response.json();

        console.log(json);
        (json).map(
            function (parameter,index, array){
                datos+="<tr>";
                datos+="<td>"+parameter.ID+"</td>";
                datos+="<td>"+parameter.Lat+"</td>";
                datos+="<td>"+parameter.Lng+"</td>";
                datos+="<td>"+new Date(parameter.Time)+"</td>";
                datos+="</tr>";
                var latlong = [Number(parameter.Lat), Number(parameter.Lng)]
                marker.setLatLng(latlong);
                map.setView(latlong);
            //Polilinea:
                        
                plyln.push(latlong);
                lineField = L.polyline(plyln, {color: 'blue'}).addTo(map);
            }
        );
        
        return this.tparameters.innerHTML=datos;
    //HASTA AQUI...    
    };
    setInterval(this.Leer, 1000)



}
aplicacion.Leer();