// Bloc 01.05: Array transformations

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

// Exercici 05 _____________________
function mostrarBloc05Exercici05() {

    let mensajeConsola = "";
    let mensajeHtml = "";

    let nums = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

    /*
    Filtro los números => 10 con "filter".
    Al resultado aplico "map" para multiplicar cada número filtrado * 2.
    Con la función "reduce" sumo y acumulo el resultado de los números sumando el valor actual (num) al acumulador (acc).
    En la función reduce, hay dos argumentos principales:
    - La función de reducción: (acc, num) => acc + num
    - Valor inicial del acumulador: 0 
    */

    let resultat = nums.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num , 0);

    mensajeConsola = `Bloc 05 - Exercici 05\n`;
    mensajeConsola += `Nombres majors o iguals a 10 = ${[nums.filter(num => num >= 10)]}\n`;
    mensajeConsola += `Resultat de la suma = ${[resultat]}`;

    mensajeHtml = `Nombres majors o iguals a 10 = ${[nums.filter(num => num >= 10)]}<br>`;
    mensajeHtml += `Resultat de la suma = <strong>${[resultat]}</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc05Exercici05Sal").innerHTML = mensajeHtml;
}

// Exercici 06 _____________________
function mostrarBloc05Exercici06() {

    let mensajeConsola = "";
    let mensajeHtml = "";

    let nums = [11, 12, 13, 14];

    /*
    Comprobar si todos o algunos de los números del array son mayores de 10.
    ________________ 
    El método every() ejecuta una función para cada elemento de la matriz.
    Devuelve "true" si todos los elementos cumplen con la función y "false si alguno no lo hace".
     ________________
     El método some() devuelve "true" (y se detiene) si encuentra algún elemento que cumple con la función o "false" si ninguno la cumple
    */

    function comprobarNum(num) {
        return num > 10;
    }

    nums.every(comprobarNum);
    nums.some(comprobarNum);


    mensajeConsola = `Bloc 05 - Exercici 06\n`;
    mensajeConsola += `Array base: ${nums}\n`
    mensajeConsola += `Every(): Tots els nombres son més grans de 10? = ${nums.every(comprobarNum)}\n`;
    mensajeConsola += `Some(): Algun dels nombres és més gran de 10? = ${nums.some(comprobarNum)}\n`;

    mensajeHtml = `Every(): Tots els nombres son més grans de 10? = <strong>${nums.every(comprobarNum)}</strong><br>`;
    mensajeHtml += `Some(): Algun dels nombres és més gran de 10? = <strong>${nums.some(comprobarNum)}</strong>`;

    console.log(mensajeConsola);
    document.getElementById("bloc05Exercici06Sal").innerHTML = mensajeHtml;
} 