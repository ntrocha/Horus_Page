function historical(){

    optdate1 = (document.getElementById("since").value);
    //if (optdate1){

        var marker = L.marker([51.5, -0.09]);
        var marker2 = L.marker([51.5, -0.09]);
        var map = L.map('map2').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
        }).addTo(map);

        marker.addTo(map);
        var url = "/readRange"
        var aplicacion = new function(){
            this.tparameters = document.getElementById("tparameters");
            var plyln = [];
            //EDITAR EN UNA FUNCION LOOP ETERNO
            this.Leer = async function(){

                var datos="";
                
                const response  = await fetch(url)
                const json = await response.json();
                var j1;
                var j2;
                var latlong = []
                var latlong1 =[];
                var latlong2 =[];
                var len = Object.keys(json).length;
                console.log(len);
                j1 = json[0];
                j2 = json.pop();
                    
                latlong1 = [Number(j1.Lat), Number(j1.Lng)]
                latlong2 = [Number(j2.Lat), Number(j2.Lng)]
                console.log(latlong1);
                console.log(latlong2);
                marker.setLatLng(latlong1);
                marker2.setLatLng(latlong2);
                map.setView(latlong1);
            
                console.log(json);
                //Polilinea:
                for (i=0; i < len-1; i++){
                    latlong = [Number(json[i].Lat), Number(json[i].Lng)]
                    plyln.push(latlong);
                }       
                lineField = L.polyline(plyln, {color: 'blue'}).addTo(map);
                
            //HASTA AQUI...    
            };
        }
        aplicacion.Leer();
    //}
}