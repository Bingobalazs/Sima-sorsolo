var osztaly = [
    {
        nev: "Ádám Norbert",
        esely: 10 
    },
    {
        nev: "Kovács Csaba",
        esely: 7 
    },
    {
        nev: "Egyedi Róbert",
        esely: 7 
    },
    {
        nev: "Kozma Máté",
        esely: 7 
    },
    {
        nev: "Puzsoma Sándor",
        esely: 10 
    },
    {
        nev: "Nagy Péter",
        esely: 7 
    },
    {
        nev: "Monoki Gábor",
        esely: 10 
    },
    {
        nev: "Nagy Attila",
        esely: 6 
    },
    {
        nev: "Mészáros István",
        esely: 10 
    },
    {
        nev: "Bere Nándor",
        esely: 10 
    },
    {
        nev: "Gál Balázs",
        esely: 4 
    },
    {
        nev: "Szatmári Ádám",
        esely: 10 
    },
    {
        nev: "Beke Roland",
        esely: 10 
    },
    {
        nev: "Tatár Andor",
        esely: 10 
    },
    {
        nev: "Deme Ákos",
        esely: 10 
    },
    {
        nev: "Kulcsár Nándor",
        esely: 10 
    },
    {
        nev: "Balogh László Levente",
        esely: 10 
    },
    {
        nev: "Illés Csaba",
        esely: 10 
    },
    {
        nev: "Perecz István",
        esely: 10 
    },
    {
        nev: "Papp Eszter",
        esely: 10 
    },
    {
        nev: "Vitális Zsuzsanna",
        esely: 10 
    },
    {
        nev: "Süveges-Szabó Zita",
        esely: 10 
    },
    {
        nev: "Maróti Gábor",
        esely: 10 
    },
    {
        nev: "M. Tóth Milán",
        esely: 10 
    },

]
var ToriTetelek = [
    "1. A középkori város kialakulása és jellemzői",
    "2. Károly Róbert és az Anjouk kora",
    "3. A nagy földrajzi felfedezések és következményei",
    "4. Az első és második ipari forradalom és következményei",
    "5. A XVIII. századi magyar társadalom",
    "6. A magyar polgárosodás társadalmi jellegzetességei és sajátosságai",
    "7. Életmód és mindennapok a Kádár-korszakban",
    "8. A középkori magyar királyság megteremtése",
    "9. A központosított rendi monarchia a Hunyadiak korában",
    "10. A reformmozgalom kibontakozása",
    "11. Az Egyesült Nemzetek Szervezete",
    "12. A Horthy-korszak politikai berendezkedése (Bethlen, Teleki)",
    "13. A dualizmus kora",
    "14. A reformáció",
    "15. Mária Terézia és II. József reformjai",
    "16. A kommunista Szovjetunió",
    "17. Az első világháború lezárása",
    "18. A várháborúk időszaka (1526-1568)",
    "19. Magyarország hadba sodródásának folyamata",
    "20. A hidegháború kialakulása",


]

var sajat_adatok1 = []
var sajat_adatok2 = []
function adatChange(from) {
    sajat_adatok1=(document.getElementById(from).value).split("\n")
    document.getElementById("nev").innerHTML=null
    document.getElementById("nev").innerHTML+='<option value="RND"  style="font-weight: bold; background-color: black; color: white;">NÉV VÉLETLENSZERŰ VÁLASZTÁSA</option>'
    sajat_adatok1.forEach(element => {
        if (element[0]=="*") {
            document.getElementById("nev").innerHTML+='<option value="0" disabled style="font-weight: bold; background-color: black; color: white;">'+element+'</option>'

        } else {
            document.getElementById("nev").innerHTML+='<option value="'+element+'">'+element+'</option>'
        }
    });

}
function adatChange2(from) {
    sajat_adatok2=(document.getElementById(from).value).split("\n")
    document.getElementById("tetel").innerHTML=null
    document.getElementById("tetel").innerHTML+='<option value="RND"  style="font-weight: bold; background-color: black; color: white;">TÉTEL VÉLETLENSZERŰ VÁLASZTÁSA</option>'
    sajat_adatok2.forEach(element => {
        if (element[0]=="*") {
            document.getElementById("tetel").innerHTML+='<option value="0" disabled style="font-weight: bold; background-color: black; color: white;">'+element+'</option>'

        } else {
            document.getElementById("tetel").innerHTML+='<option value="'+element+'">'+element+'</option>'
        }
    });
}
function LoadFromCookie(cookie, target){
    console.log(target);
    console.log(target.value);
    console.log(cookie);
    var adatok= cookie.split(',')
    adatok.forEach(element => {
        target.value+=element+"\n"
    });
    target.value = target.value.replace(/\n+$/, '');
    adatChange2('adat2Inp')
    adatChange('adat1Inp')
}