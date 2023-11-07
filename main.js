

let numCelle = 100;
let grid = document.getElementById("grid");
const btnPlay = document.getElementById("btnPlay");


btnPlay.addEventListener("click", function () {
    for (let i = 1; i <= numCelle; i++) {
        let cella = creaQuadrato(i);
        grid.appendChild(cella);
    }
});

function creaQuadrato(numero) {
    const cella = document.createElement("div");
    cella.classList.add("squareLow");

    const numeroQuatro = document.createElement("p")
    cella.appendChild(numeroQuatro);

    numeroQuatro.textContent = numero;

    cella.addEventListener("click", function() {
        cella.classList.add("bAzurro");
    });

    return cella;
}