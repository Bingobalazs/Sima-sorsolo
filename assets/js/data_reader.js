var osztaly = [
    {
        nev: "Ádám Norbert",
        esely: 1
    },
    {
        nev: "Kovács Csaba",
        esely: 1
    },
    {
        nev: "Egyedi Róbert",
        esely: 1
    },
    {
        nev: "Kozma Máté",
        esely: 1
    },
    {
        nev: "Puzsoma Sándor",
        esely: 1
    },
    {
        nev: "Nagy Péter",
        esely: 1
    },
    {
        nev: "Monoki Gábor",
        esely: 1
    },
    {
        nev: "Nagy Attila",
        esely: 1
    },
    {
        nev: "Mészáros István",
        esely: 1
    },
    {
        nev: "Bere Nándor",
        esely: 1
    },
    {
        nev: "Gál Balázs",
        esely: 1
    },
    {
        nev: "Szatmári Ádám",
        esely: 1
    },
    {
        nev: "Beke Roland",
        esely: 1
    },
    {
        nev: "Tatár Andor",
        esely: 1
    },
    {
        nev: "Deme Ákos",
        esely: 1
    },
    {
        nev: "Kulcsár Nándor",
        esely: 1
    },
    {
        nev: "Balogh László Levente",
        esely: 1
    },
    {
        nev: "Illés Csaba",
        esely: 1
    },
    {
        nev: "Perecz István",
        esely: 1
    },
    {
        nev: "Papp Eszter",
        esely: 1
    },
    {
        nev: "Vitális Zsuzsanna",
        esely: 1
    },
    {
        nev: "Süveges-Szabó Zita",
        esely: 1
    },
    {
        nev: "Maróti Gábor",
        esely: 1
    },
    {
        nev: "M. Tóth Milán",
        esely: 1
    },

]


var sajat_adatok1 = []
var sajat_adatok2 = []
function adatChange(from) {
    sajat_adatok1=((document.getElementById(from).value).replace(/\n+$/, '')).split("\n")
    document.getElementById("nev").innerHTML=null
    document.getElementById("nev").innerHTML+='<option value="RND"  style="font-weight: bold; background-color: darkgrey; color: white;">NÉV VÉLETLENSZERŰ VÁLASZTÁSA</option>'
    sajat_adatok1.forEach(element => {
        if (element[0]=="*") {
            document.getElementById("nev").innerHTML+='<option value="0" disabled style="font-weight: bold; background-color: darkgrey; color: white;">'+element+'</option>'

        } else {
            document.getElementById("nev").innerHTML+='<option value="'+element+'">'+element+'</option>'
        }
    });

}
function adatChange2(from) {
    sajat_adatok2=((document.getElementById(from).value).replace(/\n+$/, '')).split("\n")
    sajat_adatok2=sajat_adatok2
    document.getElementById("tetel").innerHTML=null
    document.getElementById("tetel").innerHTML+='<option value="RND"  style="font-weight: bold; background-color: darkgrey; color: white;">TÉTEL VÉLETLENSZERŰ VÁLASZTÁSA</option>'
    sajat_adatok2.forEach(element => {
        if (element[0]=="*") {

            document.getElementById("tetel").innerHTML+='<option value="0" disabled style="font-weight: bold; background-color: darkgrey; color: white;">'+element.slice(1)+'</option>'

        } else {
            document.getElementById("tetel").innerHTML+='<option value="'+element+'">'+element+'</option>'
        }
    });
    sajat_adatok2.forEach(element => {
        if (!(element[0]=="*")){

            tetelek.push(element)
        }
    });
    document.getElementById("tori_mode_tggl").checked=false

}
function LoadFromCookie(cookie, target){
    target.value=null
    console.log(cookie);
    var adatok= cookie.split(',')
    adatok.forEach(element => {
        target.value+=element+"\n"
    });
    target.value = target.value.replace(/\n+$/, '');
    adatChange2('adat2Inp')
    adatChange('adat1Inp')
}