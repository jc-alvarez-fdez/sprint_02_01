// Bloc 1.3: Callbacks
// Exercici 01 _____________________

function mostrarBloc03Exercici01() {

    function processar(num, fnCallback) {

        // processar es la función de orden superior
        let respuestaConsola = "";
        let respuestaHtml = "";

        respuestaConsola += "Bloc 03 - Exercici 01\n"
        respuestaConsola += "El nombre processat es: " + num;
        respuestaHtml = "El nombre processat es: <strong>" + num + "</strong>";


        // llamo a la función de callback con las respuestas (2 argumentos para las dos salidas)
        fnCallback(respuestaConsola, respuestaHtml);

    }

    function imprimir(respuestaConsola, respuestaHtml) {
        console.log(respuestaConsola);
        document.getElementById("bloc03Exercici01Sal").innerHTML = respuestaHtml;
    }

    let numUsuario = Number(prompt("Introdueix un nombre:"));
    processar(numUsuario, imprimir);
}

// Exercici 02 _____________________

function mostrarBloc03Exercici02() {

    function calcular(num01, num02, fnCallback) {

        let suma = num01 + num02;
        fnCallback(num01, num02, suma);
    }

    function imprimir(num01, num02, suma) {

        let respuestaConsola = "";
        let respuestaHtml = "";
        respuestaConsola += "Bloc 03 - Exercici 02\n"
        respuestaConsola += "Num01: " + num01 + "\n";
        respuestaConsola += "Num02: " + num02 + "\n";
        respuestaConsola += "Suma: " + suma + "\n";

        respuestaHtml += `Num01 = <strong>${num01}</strong>; Num02 = <strong>${num02}</strong>;<br>`;
        respuestaHtml += `La suma de tots dos nombres = <strong>${suma}</strong>;`;

        console.log(respuestaConsola);
        document.getElementById("bloc03Exercici02Sal").innerHTML = respuestaHtml;
    }

    let num01 = Number(prompt("Introdueix un nombre Num01:"));
    let num02 = Number(prompt("Introdueix un altre nombre: Num02"));
    calcular(num01, num02, imprimir);
}

// Exercici 03 _____________________

function mostrarBloc03Exercici03() {
    
    nom = prompt("Introdueix un nom:")

    function esperar(nom) {

        let respuestaConsola = "";
        let respuestaHtml = "";

        respuestaConsola  = `Bloc 03 - Exercici 03\n`
        respuestaConsola += `Hola ${nom} !`

        respuestaHtml = `Hola ${nom} !`

        console.log(respuestaConsola);
        document.getElementById("bloc03Exercici03Sal").innerHTML = respuestaHtml;
    }

    // esperarISaludar es la función de orden superior
    function esperarISaludar(nom, fnCallback) {

        setTimeout(function esperar() { // Después de 2 segundos se invoca la función de retorno de llamada
            fnCallback(nom);
        },
            2000);
    }

    esperarISaludar(nom, esperar);
}

// Exercici 04 _____________________

function mostrarBloc03Exercici04() {

    // Variables para almacenar los mensajes
    let respuestaConsola = "";
    let respuestaHtml = "";
    let nomConsola = ""; 
    let nomHtml = ""

    function imprimir() {
        respuestaConsola = `Bloc 04 - Exercici 04\n`;
        respuestaConsola += `Array noms: [${arrayProcessar}]\n`;
        respuestaConsola += nomConsola;

        respuestaHtml = `Array noms: [ ${arrayProcessar} ]<br>`;
        respuestaHtml += nomHtml;

        console.log(respuestaConsola);
        document.getElementById("bloc03Exercici04Sal").innerHTML = respuestaHtml; 
    }

    function processarCallback(element) {

        nomConsola += `Hola ${element}!\n`;
        nomHtml += `Hola <strong>${element}</strong>!<br>`;      
    }    

    // processarElements es la función de orden superior
    function processarElements(array, fnCallback) {

        for (let i = 0; i < array.length; i++) {
            fnCallback(array[i]); // Invocar la función de callback para cada elemento
        }           
    }
    
    let arrayProcessar = ["Nom01", "Nom02", "Nom03", "Nom04"];

    processarElements(arrayProcessar, processarCallback);
    imprimir();
}

// Exercici 05 _____________________

function mostrarBloc03Exercici05() {

    // Variables para almacenar los mensajes
    let respuestaConsola = "";
    let respuestaHtml = "";
    let stringMajuscules = ""; 
    
    function imprimir() {
        respuestaConsola = `Bloc 04 - Exercici 05\n`;
        respuestaConsola += `Cadena de caràcters inicial: [${stringProcessar}]\n`;
        respuestaConsola += stringMajuscules;

        respuestaHtml = `Cadena de caràcters inicial: <strong>${stringProcessar}</strong><br>`;
        respuestaHtml += `<strong>${stringMajuscules}</strong>`;

        console.log(respuestaConsola);
        document.getElementById("bloc03Exercici05Sal").innerHTML = respuestaHtml; 
    }

    function convertirCallback(string) {

        stringMajuscules = string.toUpperCase();    
    }    

    // processarElements es la función de orden superior
    function processarCadena(string, fnCallback) {

        fnCallback(string); // Invocar la función de callback para cada elemento        
    }
    
    let stringProcessar = prompt("Introdueix una cadena de caràcters per transformar-los en majúscules:");

    processarCadena(stringProcessar, convertirCallback);
    imprimir();
}

