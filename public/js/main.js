// exo1

// - ## Créer une variable qui recoit un jour de la semaine via un prompt.
// - ## A l'aide d'un switch, affichez ce que vous devez faire pendant le jour que vous avez choisi:

//   - ### Ex: On est lundi. Tu as cours a MG et en soirée tu as sport.


let semaine = prompt("on est en semaine ?");

switch (semaine) {
    case "lundi":
        console.log("'Tu as cours a MG et en soirée tu as sport'");
        
        break;

    default:
        console.log("zzzzzz");
        break;
}

// exo2

// - ## Créer une variable qui recoit ton age via un prompt.
//   - ## A l'aide d'un switch, affichez si vous avez plus ou moins de 18 ans.

let age = Number(prompt("quel age a t-il ?"));
switch (age >= 18) {
    case true:

       console.log("sa va tu est majeure");
        
        break;


    default: console.log('vous etes mineures');
        break;
}

