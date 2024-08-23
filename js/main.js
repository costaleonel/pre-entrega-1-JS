

///// inicio es el formulario de nombre (ser si puedo achicar codigo me quedo gigante)//////////
const app = document.getElementById('app');

const form = document.createElement('form');
form.id = 'formulario';

const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.placeholder = 'Nombre';
inputNombre.id = 'nombre';
inputNombre.required = true;

const inputApellido = document.createElement('input');
inputApellido.type = 'text';
inputApellido.placeholder = 'Apellido';
inputApellido.id = 'apellido';
inputApellido.required = true;

const labelArgentino = document.createElement('label');
labelArgentino.textContent = '¿Eres argentino?';
labelArgentino.style.color = '#ffffff';
labelArgentino.style.fontSize = '18px';
labelArgentino.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
labelArgentino.style.padding = '5px 10px';
labelArgentino.style.border = '1px solid #007bff';
labelArgentino.style.borderRadius = '5px';


const selectArgentino = document.createElement('select');
selectArgentino.id = 'argentino';
selectArgentino.required = true;

const optionSi = document.createElement('option');
optionSi.value = 'si';
optionSi.textContent = 'Sí';

const optionNo = document.createElement('option');
optionNo.value = 'no';
optionNo.textContent = 'No';


selectArgentino.appendChild(optionSi);
selectArgentino.appendChild(optionNo);

form.appendChild(inputNombre);
form.appendChild(document.createElement('br'));
form.appendChild(inputApellido);
form.appendChild(document.createElement('br'));
form.appendChild(labelArgentino);
form.appendChild(selectArgentino);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';

form.appendChild(submitButton);

app.appendChild(form);


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const esArgentino = selectArgentino.value;
    
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        argentino: esArgentino
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    
    let mensajeFinal = `Bienvenido, ${usuarioGuardado.nombre} ${usuarioGuardado.apellido}. `;
    
    if (usuarioGuardado.argentino === 'si') {
        mensajeFinal += "¡Vamos campeón mundial!";
    } else {
        mensajeFinal += "Lástima, Argentina es el país de la pasión.";
    }
    Swal.fire({
        title: '¡Éxito!',
        text: mensajeFinal,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        location.reload();
    });

    form.reset();
});



const arqueros = [
    "EMILIANO MARTINEZ n°23 actual Aston Villa alias: El Dibu",
    "Franco Armani n°1 actual River Plate",
    "Gerónimo Rulli n°12 actual Ajax"
];

const defensores = [
    "Gonzalo Montiel n°4 actual Nottingham Forest F. C",
    "Nahuel Molina n°26 actual Atlético de Madrid",
    "Cristian Romero n°13 actual Tottenham Hotspur F. C",
    "Germán Pezzella n°6 actual Real Betis Balompié",
    "Lucas Martínez Quarta n°2 actual ACF Fiorentina",
    "Nicolás Otamendi n°19 actual SL Benfica",
    "Lisandro Martínez n°25 actual Manchester United F. C",
    "Marcos Acuña n°8 actual Sevilla FC",
    "Nicolás Tagliafico n°3 actual Olympique de Lyon"
];

const mediocampistas = [
    "Guido Rodríguez n°18 actual Real Betis Balompié",
    "Leandro Paredes n°5 actual AS Roma",
    "Alexis Mac Allister n°20 actual Real Madrid CF",
    "Rodrigo De Paul n°7 actual Atlético de Madrid",
    "Exequiel Palacios n°14 actual Bayer 04 Leverkusen",
    "Enzo Fernández n°24 actual Chelsea F. C",
    "Giovani Lo Celso n°16 actual Villarreal CF"
];

const delanteros = [
    "Lionel Messi n°10 actual Inter Miami",
    "Ángel Di María n°11 actual Libre",
    "Valentín Carboni n°21 actual AC Monza",
    "Alejandro Garnacho n°17 actual Manchester United F. C",
    "Nicolás González n°15 actual ACF Fiorentina",
    "Lautaro Martínez n°22 actual Inter de Milán",
    "Julián Álvarez n°9 actual Manchester City"
];


function mostrarInformacion(titulo, contenido) {
    Swal.fire({
        title: titulo,
        text: contenido.join("\n"),
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}


document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const option = parseInt(document.getElementById('option').value);
    
    switch (option) {
        case 0:
            Swal.fire({
                title: 'Salida',
                text: 'Anda pa’ allá bobo',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                setTimeout(() => {
                    console.log("Terminó el bucle");
                }, 1000);
            });
            break;
        case 1:
            mostrarInformacion('Arqueros', arqueros);
            break;
        case 2:
            mostrarInformacion('Defensores', defensores);
            break;
        case 3:
            mostrarInformacion('Mediocampistas', mediocampistas);
            break;
        case 4:
            mostrarInformacion('Delanteros', delanteros);
            break;
        default:
            Swal.fire({
                title: 'Error',
                text: 'Opción no válida',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            break;
    }
});



const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));


const jugadores = [
    { nombre: "Lionel Messi", goles: 1 },
    { nombre: "Lautaro Martínez", goles: 5 },
    { nombre: "Lisandro Martinez", goles: 1 },
    { nombre: "Julián Álvarez", goles: 2 }
];

function mostrarGoleadores() {
    jugadores.forEach((jugador, index) => {
        setTimeout(() => {
            Swal.fire({
                title: `${jugador.nombre}`,
                text: `Hizo ${jugador.goles} goles en la Copa América 2024.`,
                icon: 'info',
                confirmButtonText: 'Siguiente'
            });
        }, index * 1000); 
    });
}

document.getElementById('Bienvenido').textContent = `Hola, ${usuarioGuardado.nombre}. ¿Quieres saber qué jugadores argentinos hicieron goles en la Copa América 2024?`;

document.getElementById('ver-goleadores').addEventListener('click', mostrarGoleadores);






/////////////////copas////////////
const arraytrofeos = ["2021 copa america Brasil","2022 Finalissima Italia", "2022 Mundial qatar", "2024 copa america USA",];

function buscarCopaPorAno(ano) {
    const resultado = arraytrofeos.filter(trofeo => trofeo.startsWith(ano));
    return resultado.length > 0 ? resultado[0] : "No se encontró ninguna copa para ese año.";
}

function buscarCopa() {
    const anoIngresado = document.getElementById("anoInput").value;
    const copaGanada = buscarCopaPorAno(anoIngresado);
    document.getElementById("resultado").textContent = copaGanada;
}







//form footer
const nombreu = document.getElementById("nombreu");
const edad = document.getElementById("edad");

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const objeto = {
        nombreu: nombreu.value,
        edad: edad.value,
    }
    console.log("Enviado", objeto);

    nombreu.value = "";
    edad.value = "";
});