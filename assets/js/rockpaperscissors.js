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
    
    
    cokdo.innerHTML = `Počítač zahrál ${nazvyTlacitek[computer]} a vy jste zahráli ${nazvyTlacitek[player]}.`;

    if(computer == player){
        result.innerHTML = "Remíza."
    }
    else {
        if(computer == "papir") {
            if(player == "kamen") {
                result.innerHTML = "Prohráli jste.";
            }
            else if(player == "nuzky") {
                result.innerHTML = "Vyhráli jste, gratuluji.";
            }
        } else if(computer == "kamen") {
            if(player == "papir") {
                result.innerHTML = "Vyhráli jste, gratuluji.";
            }
            else if(player == "nuzky") {
                result.innerHTML = "Prohráli jste.";
            }
        } else if(computer == "nuzky") {
            if(player == "kamen") {
                result.innerHTML = "Vyhráli jste, gratuluji.";
            }
            else if(player == "papir") {
                result.innerHTML = "Prohráli jste.";
            }
        }
        else {
            result.innerHTML = "Chyba.";
        }
    }
    

}




