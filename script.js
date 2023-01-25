/* Hele ordforrådet */

const nouns = ["mannen", "kvinnen", "gutten", "jenta", "trollet", "kongen", "dronningen", "bonden",];
const adjectives = ["den/det store", "den/det lille", "den/det grønne", "den/det sultne", "den/det trøtte", "den/det spreke", "den/det glade", "den/det sure"];
const verbs = ["spiste", "drakk", "hoppet", "løp", "tryllet", "sang", "døde", "jaktet"];

/* Initialisering av variabler */

document.getElementById("txtDiv").innerHTML = "";
let arr = [];

/* Fyll ut array med unike tilfeldige verdier som brukes for å plukke ord */

while (arr.length < 4) {
    var r = Math.floor(Math.random() * 8);
    if (arr.indexOf(r) === -1) arr.push(r);
}

/* Gruppering av knapper */

let adjBtns = ["adj1", "adj2", "adj3", "adj4"];
let nBtns = ["n1", "n2", "n3", "n4"];
let vBtns = ["v1", "v2", "v3", "v4"];

/* Fyll ut knapper etter ordklasse */

for (let i = 0; i < 4; i++) {
    document.getElementById(adjBtns[i]).innerHTML = adjectives[arr[i]];
    document.getElementById(nBtns[i]).innerHTML = nouns[arr[i]];
    document.getElementById(vBtns[i]).innerHTML = verbs[arr[i]];
}

function goAway(btn) {
    document.getElementById("txtDiv").innerHTML += btn.innerHTML + " ";
    btn.style.visibility = "hidden";
}

function addLine() {
    document.getElementById("txtDiv").innerHTML += "<br />";
}