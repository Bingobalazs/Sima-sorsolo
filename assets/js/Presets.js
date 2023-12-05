function PresetLoad(params) {
    document.getElementById("adat2Inp").value=null
    console.log(document.getElementById("adat2Inp").value)
    eval(params).forEach(element => {
        document.getElementById("adat2Inp").value+=element+"\n"
        console.log("tetel be");
    });

    adatChange2('adat2Inp')
}
function nevPresetLoad(params) {
    if (params=="12tac"){
        TacMode()
        tacBool=true
    }
    else{
    document.getElementById("adat1Inp").value=null
    console.log(document.getElementById("adat1Inp").value)
    eval(params).forEach(element => {
        document.getElementById("adat1Inp").value+=element+"\n"

    });
        console.log(tacBool)
        tacBool=false
    adatChange('adat1Inp')
    }
}

//PRESETS
const NullObj=[]
const Hittanfakt= ["Kutya", "Eb", "19", "20", "Szende", "Hapci", "Kuka", "Előd", "Tas", "Huba"  ]
const ToriTetelek = [
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
