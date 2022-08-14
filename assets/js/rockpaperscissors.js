let player = "";
const tlacitka = ["kamen", "nuzky", "papir"];
const nazvyTlacitek = {
    "kamen": "kámen",
    "nuzky": "nůžky",
    "papir": "papír",
};

let reset = function() {
    
    for(id in tlacitka) {
        let butt = document.querySelector(`#${tlacitka[id]}`);
        butt.className = "button";
    }
}


let clickChoice  = function(choice) {
    reset();
    let tlacitko = document.querySelector(`#${choice}`);
    if(tlacitko.className == "button") {
        tlacitko.className = "button primary";
    }
    else {
        tlacitko.className = "button";
    }
    player = choice;
}


let play = function() {
    let cokdo = document.querySelector(`#cokdo`);
    let result = document.querySelector(`#result`);

    computer = tlacitka[Math.floor(Math.random() * 3)];
    
    
    cokdo.innerHTML = `Zahráli jste <b>${nazvyTlacitek[player]}</b> a počítač zahrál <b>${nazvyTlacitek[computer]}</b>.`;

    if(computer == player){
        result.innerHTML = "<b>Remíza.</b>"
    }
    else {
        if(computer == "papir") {
            if(player == "kamen") {
                result.innerHTML = "<b>Prohráli jste.</b>";
            }
            else if(player == "nuzky") {
                result.innerHTML = "<b>Vyhráli jste, gratuluji.</b>";
            }
        } else if(computer == "kamen") {
            if(player == "papir") {
                result.innerHTML = "<b>Vyhráli jste, gratuluji.</b>";
            }
            else if(player == "nuzky") {
                result.innerHTML = "<b>Prohráli jste.</b>";
            }
        } else if(computer == "nuzky") {
            if(player == "kamen") {
                result.innerHTML = "<b>Vyhráli jste, gratuluji.</b>";
            }
            else if(player == "papir") {
                result.innerHTML = "<b>Prohráli jste.</b>";
            }
        }
        else {
            result.innerHTML = "Chyba.";
        }
    }
    

}




