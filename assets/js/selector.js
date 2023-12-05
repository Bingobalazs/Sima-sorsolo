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
var tetelek=[]
function TacMode(params) {
    tacBool = true
    document.getElementById("adat1Inp").value=null

    if (tacBool) {
        osztaly.forEach(element => {
        document.getElementById("adat1Inp").value+=element.nev+"\n"
        console.log("nev be");
    });
    }else{
        document.getElementById("adat1Inp").value=null
    }
    adatChange('adat1Inp')



   
    
}

function ToriMode(params) {
    document.getElementById("adat2Inp").value=null
    console.log(document.getElementById("adat2Inp").value)
        ToriTetelek.forEach(element => {
        document.getElementById("adat2Inp").value+=element+"\n"
        console.log("tetel be");
    });

    adatChange2('adat2Inp')
}

function Sorsol(params) {
tetel =document.getElementById("tetel").value
if (tetel=="RND") {

    tetel = Math.floor(Math.random() * tetelek.length)
    tetelnev = tetelek[tetel] 
} else {
     tetelnev = tetel
}



//nevek v sajata1 sorsolása
if (document.getElementById("nev").value=="RND"){
    if (tacBool) {
        nevek = []
        osztaly.forEach(element => {
            if (sajat_adatok1.includes(element.nev)) {
                for (let i = 0; i < element.esely; i++) {
                    if (element.nev!="Gál Balázs") {
                        nevek.push(element.nev)
                    }
                }    
            }
        });
        random = Math.floor(Math.random() * nevek.length)
         felelnev= nevek[random]
        //felelesek.push( {nev:felelnev, huzott:tetelnev})
    } 
    else {
        console.log("sorsolva saját adatokkal")
         felelnev= sajat_adatok1[ Math.floor(Math.random() * sajat_adatok1.length)]
        }
}
else felelnev=document.getElementById("nev").value

if (felelnev=="Gál Balázs") window.alert("NEEEEEE :(((((")

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