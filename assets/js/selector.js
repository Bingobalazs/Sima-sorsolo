var random = 0
var osszesely =0
    osztaly.forEach(element => {
       osszesely+=element.esely 
    });

var nevek = []
var felelesek = []
var tetelnev
var felelnev
var tetel=0
function Sorsol(params) {
    tetel =document.getElementById("tetel").value
    if (tetel=="RND") {
        tetel = Math.floor(Math.random() * tetelek.length)
        tetelnev = tetelek[tetel] 
    } else {
         tetelnev = tetelek[tetel-1]
    }
    osztaly.forEach(element => {
        if (true) {
            for (let i = 0; i < element.esely; i++) {
            nevek.push(element.nev)
            
            }    
        }

        
    });
    random = Math.floor(Math.random() * nevek.length)
     felelnev= nevek[random-1]
    felelesek.push( {nev:felelnev, huzott:tetelnev})
Kiir()

}
function Tablazat(params) {
    felelesek.forEach(element => {
        
    });
}
function Kiir(params) {
    document.getElementById("sorsNev").innerHTML= felelnev
    document.getElementById("sorsTetel").innerHTML= tetelnev
}