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
var tacBool=true
function TacMode(params) {
    tacBool = document.getElementById("tac_mode_tggl").checked
    if (tacBool) {
        osztaly.forEach(element => {
        document.getElementById("adat1Inp").innerHTML+=element.nev+"\n"
    });
    }else{
        document.getElementById("adat1Inp").innerHTML=null
    }
    adatChange('adat1Inp')
    
}
function Sorsol(params) {
    tetel =document.getElementById("tetel").value
        if (tetel=="RND") {
            tetel = Math.floor(Math.random() * tetelek.length)
            tetelnev = tetelek[tetel] 
        } else {
             tetelnev = tetelek[tetel-1]
        }
    if (tacBool) {
        
        
    
        nevek = []
        osztaly.forEach(element => {
            if (sajat_adatok1.includes(element.nev)) {
                for (let i = 0; i < element.esely; i++) {
                    
                    nevek.push(element.nev) 
                    
                    
                }    
            }
            
            
        });
        console.log(nevek);
        random = Math.floor(Math.random() * nevek.length)
         felelnev= nevek[random]
        //felelesek.push( {nev:felelnev, huzott:tetelnev})





    } else {
        
        random = Math.floor(Math.random() * sajat_adatok1.length)
         felelnev= sajat_adatok1[random]

    }
  
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
function Modosito(tggl) {
    if (tggl) {
        document.getElementById("modify").style="display: block;"
        document.getElementById("main").style="display: none;"
    }else {
        document.getElementById("modify").style="display: none;"
        document.getElementById("main").style="display: block;"
    }
}