// Bloc 01.01: Arrow functions
// Exercici 01 _____________________

function mostrarBloc01Exercici01() {

    let a = Number(prompt('Introdueix un nombre per al paràmetre "a"'));
    let b = Number(prompt('Introdueix un nombre per al paràmetre "b"'));

    let add = (a, b) => a + b;

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola  = "Bloc 01 - Exercici 01:\n";
    mensajeConsola += "a = " + a + "\n";
    mensajeConsola += "b = " + b + "\n";
    mensajeConsola += "resultado = " + add(a, b);

    mensajeHtml  = "a = " + a + "<br>";
    mensajeHtml += "b = " + b + "<br>";
    mensajeHtml += "resultado = <strong>" + add(a, b) + "</strong>";

    console.log(mensajeConsola);
    document.getElementById("bloc01Exercici01Sal").innerHTML = mensajeHtml;

}

// Exercici 02 _____________________

function mostrarBloc01Exercici02() {

    /*
    Math.random() devuelve un número aleatorio entre 0 (incluido) y 1 (excluido);
    multiplicamos esta función * 101 para que incluya el número 100;
    y redondeamos al número entero inferior mediante la función Math.floor
    */

    let randomNumber = () => Math.floor(Math.random() * 101);
    console.log("Bloc 01 - Exercici 02:\n" + randomNumber());

    document.getElementById("bloc01Exercici02Sal").innerHTML = `Numero aleatorio = <strong>${randomNumber()}</strong>`;
}

// Exercici 03 _____________________

function mostrarBloc01Exercici03() {

    console.log("Bloc 01 - Exercici 03:")

    let yo = new Person("Juan Carlos", "Álvarez", "Fernández");
    console.log(yo)

    yo.greet();

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola  = "Bloc 01 - Exercici 03:\n";

    mensajeHtml += "<strong>Hola, " + yo.name + "</strong><br>";
    mensajeHtml += "Método en la class Person:<br>";
    mensajeHtml += "<code>greet = () => console.log(`Hola, ${this.name}`)</code>";

    document.getElementById("bloc01Exercici03Sal").innerHTML = mensajeHtml;

}

// Exercici 04 _____________________
function mostrarBloc01Exercici04() {
    let nombres = [];

    // Obtenemos una serie de números separados por guiones
    let numsString = prompt("Introdueix una sèrie de números separats per guió i sense espais\n(Exemple: 2-45-67)");

    // Convertimos el string en un array utilizando el guión como delimitador
    nombres = numsString.split('-');

    let nombreImpConsola = "";
    let nombreImpHtml = "";

    function printNumbers() {
        for (let i = 0; i < nombres.length; i++) {
            // Utilizamos una función de flecha para imprimir cada número
            let numImpres = () => {
                nombreImpConsola += nombres[i] + "\n";
                nombreImpHtml += nombres[i] + "<br>";
            };
            numImpres(); // Llamamos a la función flecha
        }
    }

    printNumbers(); // Llamamos a la función printNumbers

    console.log(`Array nombres = ${nombres}`);

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola += "Bloc 01 - Exercici 04\n";
    mensajeConsola += `Array números introducidos = [${nombres}]\n`;
    mensajeConsola += `${nombreImpConsola}`;

    mensajeHtml = `Array números introducidos = [${nombres}]<br>`;
    mensajeHtml += `<strong>${nombreImpHtml}</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc01Exercici04Sal").innerHTML = mensajeHtml;
}


// Exercici 05 _____________________
function mostrarBloc01Exercici05() {  

    let espera = () => setTimeout(escribirMensaje, 3000);
   
    function escribirMensaje() {

        let mensajeConsola = "";
        let mensajeHtml = "";

        mensajeConsola  = `Bloc 01 - Exercici 05\n`;
        mensajeConsola += `Missatge a imprimir després de 3 segons.`

        mensajeHtml = `Missatge a imprimir <strong>després de 3 segons</strong>.`

        console.log(mensajeConsola);
        document.getElementById("bloc01Exercici05Sal").innerHTML = mensajeHtml;
    }

    espera();

}

/* function mostrarBloc01Exercici05() {

    let espera;

    function imprimir() {

        espera = setTimeout (escribirMensaje, 3000);
    }

    function escribirMensaje() {

        let mensajeConsola = "";
        let mensajeHtml = "";

        mensajeConsola  = `Bloc 01 - Exercici 05\n`;
        mensajeConsola += `Missatge a imprimir després de 3 segons.`

        mensajeHtml = `Missatge a imprimir després de 3 segons.`

        console.log(mensajeConsola);
        document.getElementById("bloc01Exercici05Sal").innerHTML = mensajeHtml;
    }

    imprimir();
  
} */