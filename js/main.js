function campeones(){
    alert("hola campeon")
    alert("estamos armando un sitio dedicado a la scaloneta")
}
campeones()



let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let nombreCompleto = nombre + " " + apellido;
let mensajefinal = "Bienvenido, " + nombreCompleto;
alert(mensajefinal);
console.log("BienVenido a nuestra pagina de la scaloneta")

let nacion = prompt("eres argentino?")
if(nacion == "si"){
    alert("Vamos campeon mundial")
} else if(nacion == "no"){
    alert("bueno no tuviste la suerte de nacer en la tierra del asado, el fernet, el futbol, MESSI Y MARADONA")
}

let condicion
do{
    condicion = parseInt(prompt("Quieres saber de los jugadores? \n1 Arqueros \n2 Defensores  \n3 Mediocampistas \n4 Delanteros \n5 quieres conocer los campeonatos ganados  \n0 para salir "))
    switch (condicion) {
        case 0:
            alert("anda pa alla bobo")
            break;
        case 1:
            const arrayarqueros = ["\n EMILIANO MARTINEZ n°23 actual Aston Villa alias:El dibu \nFranco armani n°1 actual Riber Plate  \nGeronimo Rulli n°12 actual Ajax"];
            let mensajearqueros = arrayarqueros.join("\n");
            alert(mensajearqueros);
            break;
        case 2:
            let Defensores= "\n Gonzalo Montiel n°4 actual  Nottingham Forest F. C \n Nahuel Molina n°26 actual Atlético de Madrid  \n Cristian Romero n°13 actual Tottenham Hotspur F. C \n Germán Pezzella n°6 actual Real Betis Balompié \n Lucas Martínez Quarta n°2 actual ACF Fiorentina \n Nicolás Otamendi n°19 actual S. L. Benfica \n Lisandro Martínez n°25 actual Manchester United F. C \n Marcos Acuña n°8 actual Sevilla F.C \n Nicolás Tagliafico n°3 actual Olympique de Lyon"
            alert(Defensores)
            break;

        case 3:
            let Mediocampistas = "\n Guido Rodríguez n°18 actual Real Betis Balompié \n Leandro Paredes n°5 actual A. S. Roma \n Alexis Mac Allister n°20 actual  Real Madrid C. F. \n Rodrigo De Paul n°7 actual Atlético de Madrid \n Exequiel Palacios n°14 actual Bayer 04 Leverkusen \n Enzo Fernández n°24 actual Chelsea F. C n/ Giovani Lo Celso n°16 actual Villarreal C. F."
            alert(Mediocampistas)
            break;
        case 4:
            let Delanteros = "\n Lionel Messi n°10 actual Inter Miami \n Ángel Di María n°11 actual Libre \n Valentín Carboni n°21 actual A. C. Monza \n Alejandro Garnacho n°17 actual Manchester United F. C \n Nicolás González n°15 actual ACF Fiorentina \n Lautaro Martínez n°22 actual Inter de Milán \n Julián Álvarez n°9 actual Manchester City"
            alert(Delanteros)
            break;
        case 5:
                const arraytrofeos = ["2021 copa america", "2022 mundial qatar", "2024 copa america"];
                let mensajetrofeos = arraytrofeos.join("\n");
                alert(mensajetrofeos);
        default:
            alert("opcion invalida")
            break;
    }
} while (condicion !== 0 );
console.log("termino el bucle do while")

alert("PARA PARA PARAAA, NO TE PODES IR SIN CONOCER NUESTRO CUERPO TECNICO");

const cuerpotec = [
    {
        id: 1,
        nombre: "Lionel Scaloni",
        puesto: "Director Tecnico",
    },
    {
        id:2,
        nombre: "Pablo Aimar",
        puesto: "Ayudante de campo"
    },
    {
        id:3,
        nombre: "Walter Samuel",
        puesto: "Ayudante de campo"
    },
    {
        id:4,
        nombre: "Roberto Ayala",
        puesto: "Ayudante de campo"
    },
    {
        id:5,
        nombre: "Mario De Stefano alias MARITOO!!",
        puesto: "Senior Utilero todo un Crack de la AFA"
    }
];
for(let i = 0; i < cuerpotec.length; i++){
    alert(cuerpotec[i].id + "- " + cuerpotec[i].nombre + "=" + cuerpotec[i].puesto)
};