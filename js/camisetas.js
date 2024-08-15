const camisetas = [
    {
    id: 1,
    año: 2019,
    torneo: "COPA AMERICA BRASIL",
    imagen: "",
    },
    {
        id:2,
        año: 2022,
        torneo: "MUNDIAL QATAR",
        imagen:""
    },
    {
        id:3,
        año: 2024,
        torneo: "COPA AMERIA USA",
        imagen:"",
    },
];

localStorage.setItem(`camisetas`, JSON.stringify(camisetas));

const camisetasenlocal = JSON.parse(localStorage.getItem(`camisetas`));

const container = document.getElementById("container");

function crearCard(camiseta){
const card = document.createElement("div");
card.className = "card";
card.id = `camisetas-${camiseta.id}`

const imagen = document.createElement("img");
imagen.src = camiseta.imagen;
imagen.alt = `camiseta del torneo ${camiseta.torneo}`;
card.appendChild(imagen);

const titulo = document.createElement("h3");
titulo.textContent = camiseta.torneo;
card.appendChild(titulo);

const año = document.createElement("p");
año.textContent = `año: ${camiseta.año}`;
card.appendChild(año);

const boton = document.createElement("button");
boton.textContent = "ver mas";
boton.addEventListener("click", () =>{
    window.open(camiseta.imagen, "_blank");
});
card.appendChild(boton);

container.appendChild(card);
};

camisetasenlocal.forEach(camiseta => crearCard(camiseta));
