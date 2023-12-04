// Bloc 1.4: Rest & Spread operators

// Exercici 01 _____________________
function mostrarBloc04Exercici01() {

    let infoBase = ["Nombre", "Apellido01", "Apellido02"];
    let infoAmplia = ["NIF", "Dirección", "Población", "Provincia"];

    let infoTotal = [...infoBase, ...infoAmplia];

    console.log("Bloc 04 - Exercici 01\n");
    console.log([infoBase]);
    console.log([infoAmplia]);
    console.log([infoTotal]);

    let mensajeHtml = "";

    mensajeHtml = "Array01: [" + infoBase + "]<br>";
    mensajeHtml += "Array02: [" + infoAmplia + "]<br>";
    mensajeHtml += "<strong>Nou array: </strong>[" + infoTotal + "]";

    document.getElementById("bloc04Exercici01Sal").innerHTML = mensajeHtml;

}

// Exercici 02 _____________________
function mostrarBloc04Exercici02() {

    let sumandos  = [];

    // Obtenemos una serie de números separados por guiones
    let numsString = prompt("Introdueix una sèrie de números separats per guió i sense espais\n(Exemple: 2-45-67)");

    // Convertimos el string en un array utilizando el guión como delimitador
    sumandos = numsString.split('-');

    // Convertimos los elementos del array a números
    let sumandosNumero = sumandos.map(function(numero) {
        return parseInt(numero);
      });

        function suma (...sumandos) {      
        let total = 0;
        for(let sumando of sumandos) {
            total += sumando;
        }
        return total;       
    }

    console.log(`Array sumandos = ${sumandos}`);
    console.log(`Suma ${sumandos} = ${(suma(...sumandosNumero))}`)

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola += "Bloc 04 - Exercici 02\n";
    mensajeConsola += `Números introducidos = ${numsString}\n`;
    mensajeConsola += `Array sumandos = ${sumandos}\n`;
    mensajeConsola += `Suma ${sumandos} = ${(suma(...sumandosNumero))}`;

    mensajeHtml  = `Números introducidos = ${numsString}<br>`;
    mensajeHtml += `Suma ${sumandos} = <strong>${(suma(...sumandosNumero))}</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc04Exercici02Sal").innerHTML = mensajeHtml;
}

// Exercici 03 _____________________
function mostrarBloc04Exercici03() {

    let mensajeConsola = "";
    let mensajeHtml = "";
    
    // Objeto origen
    let objecteOrigen = {

        nom: "Juan Carlos",
        cognom01: "Álvarez",
        cognom02: "Fernández",
        canviar: "Dada a canviar"
    }

    // Creo una copia del objeto origen usando el operador spread
    let objecteCopia = {...objecteOrigen}

    // Objetos antes del cambio
    mensajeConsola  = `Bloc 04 - Exercici 02\n`;
    mensajeConsola += `Objecte origen: ${JSON.stringify(objecteOrigen)}\n`;
    mensajeConsola += `Objecte copia: ${JSON.stringify(objecteCopia)}\n`;

    mensajeHtml += `<p>Objecte <strong>origen</strong>: ${JSON.stringify(objecteOrigen)}<br>`;
    mensajeHtml += `Objecte <strong>copia</strong>:${JSON.stringify(objecteCopia)}</p><hr>`;


    // Cambio en la propiedad del objeto copia
    let propietatCambiar = "";

    propietatCambiar = prompt("Introdueix una nova propietat 'canviar' per al objecteCopia", "Canviar")
    objecteCopia.canviar = propietatCambiar;


    mensajeConsola += `Propietat "canviar" modificada en objecte copia = ${propietatCambiar}\n`;
    mensajeConsola += `Objecte origen desprès de la modificació: ${JSON.stringify(objecteOrigen)}\n`;
    mensajeConsola += `Objecte copia desprès de la modificació: ${JSON.stringify(objecteCopia)}\n`;


    mensajeHtml += `<p>Propietat "canviar" modificada en objecte copia = <strong>${propietatCambiar}</strong></p><hr>`;
    mensajeHtml += `<p>Objecte origen <strong>desprès de la modificació</strong>: ${JSON.stringify(objecteOrigen)}<br>`;
    mensajeHtml += `Objecte copia <strong>desprès de la modificació</strong>: ${JSON.stringify(objecteCopia)}</p>`;

    console.log(mensajeConsola);
    document.getElementById("bloc04Exercici03Sal").innerHTML = mensajeHtml;

}

// Exercici 04 _____________________
function mostrarBloc04Exercici04() {

    let mensajeConsola = "";
    let mensajeHtml = "";
    
    // Array base
    let arrayBase = ["Element01", "Element02", "Element03", "Element04", "Element05"];

    // Asignación de elementos del array a variables
    let [var01, var02, ...var03] = arrayBase;

    mensajeConsola  = `Bloc 04 - Exercici 04\n`;
    mensajeConsola += `Array base: ${arrayBase.join(", ")}\n`;
    mensajeConsola += `var01 =  ${var01}\n`;
    mensajeConsola += `var02 =  ${var02}\n`;
    mensajeConsola += `var03 =  ${var03.join(", ")}\n`;

    mensajeHtml += `<p>Array base: ${arrayBase.join(", ")}</p><hr>`;
    mensajeHtml += `<p>var01 =  <strong>${var01}</strong><br>`;
    mensajeHtml += `var02 =  <strong>${var02}</strong><br>`;
    mensajeHtml += `var03 =  <strong>${var03.join(", ")}</strong></p>`;

    console.log(mensajeConsola);
    document.getElementById("bloc04Exercici04Sal").innerHTML = mensajeHtml;

}

// Exercici 05 _____________________
function mostrarBloc04Exercici05() {

    let mensajeConsola = "";
    let mensajeHtml = "";

    // Creo una función que acepta 3 argumentos y los suma
    function suma(a, b, c) {
        return a + b + c;
    }

    // Pido introducir 3 números y los añado a un array
    let arrayNums = [];
    a = Number(prompt('Introdueix un nombre per al paràmetre "a"'));
    arrayNums.push(a);
    
    b = Number(prompt('Introdueix un nombre per al paràmetre "b"'));
    arrayNums.push(b);

    c = Number(prompt('Introdueix un nombre per al paràmetre "b"'));
    arrayNums.push(c);
    
    // Llamo a la función utilizando el operador spread
    let total = suma(...arrayNums);

    mensajeConsola  = `Bloc 04 - Exercici 05\n`;
    mensajeConsola += `Array de nombres a sumar: ${arrayNums.join(", ")}\n`;
    mensajeConsola += `Resultat de la suma = ${total}\n`;
    

    mensajeHtml  = `Array de nombres a sumar: <strong>${arrayNums.join(", ")}</strong><br>`;
    mensajeHtml += `Resultat de la suma = <strong>${total}<strong>`;


    console.log(mensajeConsola);
    document.getElementById("bloc04Exercici05Sal").innerHTML = mensajeHtml;

}

// Exercici 06 _____________________
function mostrarBloc04Exercici06() {

    let mensajeConsola = "";
    let mensajeHtml = "";

    // Objetos base a fusionar (objecte01 y objecte02)
    let objecte01 = {
        nom: "Juan Carlos",
        cognom01: "Álvarez",
        cognom02: "Fernández",
        edat: 59,
    }  

    let objecte02 = {
        adressa: "Carrer XXX, num YYY",
        poblacio: "Barcelona"
    } 


    // Objeto fusionado mediante operador spread
    let objecteFusionat = { ...objecte01, ...objecte02 }



    mensajeConsola  = `Bloc 04 - Exercici 06\n`;
    mensajeConsola += `Objeto 01 a fusionar: ${JSON.stringify(objecte01)}\n`;
    mensajeConsola += `Objeto 02 a fusionar: ${JSON.stringify(objecte02)}\n`;
    mensajeConsola += `Objeto fusionado: ${JSON.stringify(objecteFusionat)}\n`;
    

    mensajeHtml  = `<p>Objeto 01 a fusionar: ${JSON.stringify(objecte01)}<br>`;
    mensajeHtml  += `<p>Objeto 02 a fusionar: ${JSON.stringify(objecte02)}<p><hr>`;
    mensajeHtml += `<p><strong>Objeto fusionado: </strong>${JSON.stringify(objecteFusionat)}</p>`;


    console.log(mensajeConsola);
    document.getElementById("bloc04Exercici06Sal").innerHTML = mensajeHtml;
}



