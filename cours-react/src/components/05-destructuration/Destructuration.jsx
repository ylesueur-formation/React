export function Desctructuration(props) {
    // const { useState } = require("react");
    let prenoms = ["Hochet", "Rick", "Stick", "Ella"];

    let prenom1 = prenoms[0];
    let prenom2 = prenoms[1];
    let prenom3 = prenoms[2];

    prenom1, prenom2, prenom3 = prenoms;
    // prenom1, prenom2, prenom3 = ["Hochet", "Rick", "Stick", "Ella"];
    console.log(prenom1);
    console.log(prenom2);
    console.log(prenom3);

    // let a = prenoms[0];
    // let b = prenoms[1];
    // let c = prenoms[2];
    let [a, b, c] = prenoms;

    // useState renvoie un tableaux, que l'on decompose/extrait en 2 variables 
    // counter = 0
    // setCounter = function() {...} 
    // let [conter, setCounter] = useState(0);


    let tableau = prenoms;
    tableau.push("Salut");
    console.log("Prenom: ", prenoms);

    // Copier un tableau
    // Extraire les valeurs de prenoms, une par une et on les ajoute dans un nouveau tableaux
    // tableau = [prenoms[0], prenoms[1], prenoms[2], prenoms[3]]
    tableau = [...prenoms];
    tableau = Array.from(tableau);
    console.log(tableau)

    // console.log(prenoms[0], prenoms[1], prenoms[2], prenoms[3])
    console.log(prenoms);
    console.log(...prenoms);

    let voiture = {
        couleur: "bleu",
        vitesse: 14
    }

    // On copie l'objet 
    // On Extrait les clefs/valeur une par une.
    let voiture2 = {...voiture};
    

    return (
        <h2>F12 pour ouvrir la console</h2>
    )
}