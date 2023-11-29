// Bloc 1.1: Arrow functions
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

//Exercici 02 _____________________

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

//Exercici 03 _____________________

function mostrarBloc01Exercici03() {

    console.log("Bloc 01 - Exercici 03:")

    let yo = new Person("Juan Carlos", "Álvarez", "Fernández");
    console.log(yo)

    yo.greet();

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola  = "Bloc 01 - Exercici 03:\n";


    let salida = "";
    salida += "<strong>Hola, " + yo.name + "</strong><br>";
    salida += "Método en la class Person:<br>";
    salida += "<code>greet = () => console.log(`Hola, ${this.name}`)</code>";

    document.getElementById("bloc01Exercici03Sal").innerHTML = salida;

}


// Bloc 1.2: Operador ternari
// Exercici 01 _____________________

function potConduir() {

    let edat = Number(prompt("Quina edat tens?"));

    let conduir = (edat >= 18) ? "Pots conduir." : "No pots conduir.";


    console.log(`Bloc 02 - Exercici 01\nEdat: ${edat}\n${conduir}`);

    let salida = "";
    salida = `Tens ${edat} anys. <strong>${conduir}<strong>`


    document.getElementById("bloc02Exercici01Sal").innerHTML = salida;
}

// Exercici 02 _____________________

function mostrarBloc02Exercici02() {

    let num01 = Number(prompt("Introdueix un nombre: num01"));
    let num02 = Number(prompt("Introdueix un altre nombre: num02"));

    let comparar;
    let mensajeConsola = "";
    let mensajeHtml = "";
    //const IGUALS = "Tots dos nombres són iguals";

    if (num01 == num02 || isNaN(num01) || isNaN(num02)) {
        mensajeConsola = "Bloc 02 - Exercici 02\nIntrodueix dos nombres diferents.";
        mensajeHtml = "Introdueix dos nombres diferents.";
    }
    else {
        comparar = (num01 >= num02) ? "Num01 és més gran." : "Num02 és més gran.";

        mensajeConsola = "Bloc 02 - Exercici 02\n";
        mensajeConsola += "Num01: " + num01 + "\n";
        mensajeConsola += "Num02: " + num02 + "\n";
        mensajeConsola += comparar;

        mensajeHtml = `Bloc 02 - Exercici 02<br>`;
        mensajeHtml += `Num01= <strong>${num01}</strong>.<br>`;
        mensajeHtml += `Num02= <strong>${num02}</strong>.<br>`;
        mensajeHtml += `<strong>${comparar}</strong>`;

    }

    console.log(mensajeConsola);

    document.getElementById("bloc02Exercici02Sal").innerHTML = mensajeHtml;
}

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

    let sumandos = [];

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

// Bloc 1.5: Array transformations
// Exercici 01 _____________________

function mostrarBloc05Exercici01() {

    let nums = [1, 2, 3, 4];
    let numsCuadrado = nums.map(cuadrado);

    function cuadrado(num){
        return Math.pow(num, 2);
    } 


    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 05 - Exercici 01\n`;
    mensajeConsola += `Array base = ${[nums]}\n`;
    mensajeConsola += `Array nombres al cuadrat ${[numsCuadrado]}`;

    mensajeHtml = `Array base = [ ${[nums]} ]<br>`;
    mensajeHtml += `Array nombres al cuadrat = <strong>[ ${[numsCuadrado]} ]</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc05Exercici01Sal").innerHTML = mensajeHtml;

}

// Exercici 02 _____________________

function mostrarBloc05Exercici02() {

    let nums = [1, 2, 3, 4];
    let numsParells = nums.filter(parells);

    function parells(num){

        return num % 2 == 0;     
    } 

    console.log(numsParells);


    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 05 - Exercici 02\n`;
    mensajeConsola += `Array base = ${[nums]}\n`;
    mensajeConsola += `Array nombres parells ${[numsParells]}`;

    mensajeHtml = `Array base = [ ${[nums]} ]<br>`;
    mensajeHtml += `Array nombres parells = <strong>[ ${[numsParells]} ]</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc05Exercici02Sal").innerHTML = mensajeHtml;

}

// Exercici 03 _____________________

function mostrarBloc05Exercici03() {

    let nums = [1, 10, 8, 11];
    let mayor10 = nums.find(mesGran);

    function mesGran(num){
       
        return num > 10;     
    } 

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 05 - Exercici 03\n`;
    mensajeConsola += `Array base = ${[nums]}\n`;
    mensajeConsola += `Primer nombre més gran de 10 = ${[mayor10]}`;

    mensajeHtml = `Array base = [ ${[nums]} ]<br>`;
    mensajeHtml += `Primer nombre més gran de 10 = <strong>${[mayor10]}</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc05Exercici03Sal").innerHTML = mensajeHtml;

}

// Exercici 04 _____________________

function mostrarBloc05Exercici04() {

    let nums = [13, 7, 8, 21];

    let numsReduce = nums.reduce(reducir);

    function reducir(total, num) {
        return total + num;
    }

 
    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 05 - Exercici 04\n`;
    mensajeConsola += `Array base = ${[nums]}\n`;
    mensajeConsola += `Suma acumulada dels element del array = ${[numsReduce]}`;

    mensajeHtml = `Array base = [ ${[nums]} ]<br>`;
    mensajeHtml += `Suma acumulada dels element del array = <strong>${[numsReduce]}</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc05Exercici04Sal").innerHTML = mensajeHtml;

}


// Bloc 1.6: Array loops
// Exercici 01 _____________________

function mostrarBloc06Exercici01() {

    let noms = ['Anna', 'Bernat', 'Clara'];
    let nomImprimeConsola = "";
    let nomImprimeHtml = "";
    
    noms.forEach(imprimir);

    function imprimir(element) {
        nomImprimeConsola += element + "\n";
        nomImprimeHtml += element + "<br>";  
    }

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 06 - Exercici 01\n`;
    mensajeConsola += `Array base = ${[noms]}\n`;
    mensajeConsola += `${[nomImprimeConsola]}`;

    mensajeHtml = `Array base = ${[noms]}<br>`;
    mensajeHtml += `<strong>${[nomImprimeHtml]}</strong><br>`;

    console.log(mensajeConsola);
    document.getElementById("bloc06Exercici01Sal").innerHTML = mensajeHtml;

}

// Exercici 02 _____________________

function mostrarBloc06Exercici02() {

    let noms = ['Anna', 'Bernat', 'Clara'];
    let nomImprimeConsola = "";
    let nomImprimeHtml = "";
    
    noms.forEach(imprimir);

    function imprimir(element) {
        nomImprimeConsola += element + "\n";
        nomImprimeHtml += element + "<br>";  
    }

    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 06 - Exercici 01\n`;
    mensajeConsola += `Array base = ${[noms]}\n`;
    mensajeConsola += `${[nomImprimeConsola]}`;

    mensajeHtml = `Array base = ${[noms]}<br>`;
    mensajeHtml += `<strong>${[nomImprimeHtml]}</strong><br>`;

    console.log(mensajeConsola);
    document.getElementById("bloc06Exercici02Sal").innerHTML = mensajeHtml;

}

// Exercici 03 _____________________
// No encuentro diferencia con el ejercicio 2 del bloque 1.5: Array transformations
function mostrarBloc06Exercici03() {

    let numeros = [1, 2, 3, 4, 5, 6];
    let numsParells = numeros.filter(parells);

    function parells(num){

        return num % 2 == 0;     
    } 

    console.log(numsParells);

 let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola = `Bloc 06 - Exercici 03\n`;
    mensajeConsola += `Array base = ${[numeros]}\n`;
    mensajeConsola += `Array nombres parells ${[numsParells]}`;

    mensajeHtml = `Array base = [ ${[numeros]} ]<br>`;
    mensajeHtml += `Array nombres parells = <strong>[ ${[numsParells]} ]</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc06Exercici03Sal").innerHTML = mensajeHtml; 
}    


// Bloc 1.7: Promises & Async/Await
// Exercici 01 _____________________

function mostrarBloc07Exercici01() {

    let holaPromise =
        new Promise(function(myResolve, myReject) {
            setTimeout(function(){
            myResolve("Hola, món");}, 2000);
        });

    let mensajeConsola = "";
    let mensajeHtml = "";    

    mensajeConsola  = `Bloc 06 - Exercici 03\n`;
    mensajeConsola += `S'ha creat la promesa "holaPromise"\n`;    
    mensajeConsola += `que tornarà la salutació "Hola, món" al cap de 2 segons`;

    mensajeHtml = `S'ha creat la promesa <strong>
    holaPromise</strong><br>`
    mensajeHtml += `que tornarà la salutació "Hola, món" al cap de 2 segons`

    console.log(mensajeConsola);
    document.getElementById("bloc07Exercici01Sal").innerHTML = mensajeHtml; 

} 


function mostrarBloc07Exercici02() {

    let holaPromise =
        new Promise(function(myResolve, myReject) {
            setTimeout(function(){
            myResolve("Hola, món");}, 2000);
        });

    holaPromise.then(function(value) { 
        console.log(`Bloc 07 - Exercici 02\n${value}`);
        document.getElementById("bloc07Exercici02Sal").innerHTML = value;
    });

} 

function mostrarBloc07Exercici03() {

    function imprimir(some) {
        console.log(`Bloc 07 - Exercici 03\n${some}`);
        document.getElementById("bloc07Exercici03Sal").innerHTML = some;
    }

    let obtenPromise =
        new Promise(function(myResolve, myReject) {

            let obtener = prompt('Accepta el missatge "Hola" o canvia\'l pel que vulguis', 'Hola');

            if (obtener == "Hola") {
                setTimeout(function() 
                    { myResolve("Promesa resolta"); }, 2000);
            }
            else {
                myReject("Promesa rebutgada");
            }
        });

    obtenPromise.then(
        function(value) { imprimir(value); },
        function(error) { imprimir(error); }
    );
} 

function mostrarBloc07Exercici04() {

    async function imprimir() {

        let holaPromise =
        new Promise(function(resolve, reject) {
            setTimeout(function(){
            resolve("Hola, món");}, 2000);
        });

        console.log(`Bloc 07 - Exercici 04\n`);
        console.log(await holaPromise);
        document.getElementById("bloc07Exercici04Sal").innerHTML = await holaPromise;
    }

    imprimir();
}