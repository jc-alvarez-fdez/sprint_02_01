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

        mensajeHtml  = `Num01= <strong>${num01}</strong>.<br>`;
        mensajeHtml += `Num02= <strong>${num02}</strong>.<br>`;
        mensajeHtml += `<strong>${comparar}</strong>`;

    }

    console.log(mensajeConsola);

    document.getElementById("bloc02Exercici02Sal").innerHTML = mensajeHtml;
}

// Exercici 03 _____________________

function mostrarBloc02Exercici03() {

    let mensajeConsola = "";
    let mensajeHtml = "";

    function comprobarNumero() {

        let numUsuari = Number(prompt("Introdueix un nombre:"));

        let resultatConsola = (numUsuari > 0) ? "positiu" : (numUsuari < 0) ? "negatiu" : "zero";
        let resultatHtml = (numUsuari > 0) ? "<strong>positiu</strong>" : (numUsuari < 0) ? "<strong>negatiu</strong>" : "<strong>zero</strong><br><hr>";
        
        
        mensajeConsola  = `Bloc 02 - Exercici 02\n`;
        mensajeConsola += `El nombre ${numUsuari} es ${resultatConsola}\n`;

        
        mensajeHtml = `<p>El nombre <strong>${numUsuari}</strong> es <strong>${resultatConsola}</strong></p><hr>`

        console.log(mensajeConsola);
        document.getElementById("bloc02Exercici03Sal01").innerHTML = mensajeHtml;
    }

        function trobarMaxim(a, b, c) {

        a = Number(prompt('Introdueix un nombre per al paràmetre "a"'));
        b = Number(prompt('Introdueix un nombre per al paràmetre "b"'));
        c = Number(prompt('Introdueix un nombre per al paràmetre "c"'));

       
        let resultatConsola = (a >= b && a >= c) ? `a (${a}) es el valor màxim` : (b >= a && b >= c) ? `b (${b}) es el valor màxim` : `c (${c}) es el valor màxim`;

        let resultatHtml = (a >= b && a >= c) ? `<strong>a</strong> (${a}) es el <strong>valor màxim</strong>` : (b >= a && b >= c) ? `<strong>b</strong> (${b}) es el <strong>valor màxim</strong>` : `"c" (<strong>${c}</strong>) es el <strong>valor màxim.</strong>`;

        mensajeConsola = `Dels 3 paràmetres introduïts: "a" = ${a}, "b" = ${b} i "c" = ${c},\n`   
        mensajeConsola += resultatConsola;

        mensajeHtml = `Dels 3 paràmetres introduïts: "a" = <strong>${a}</strong>, "b" = <strong>${b}</strong> i "c" = <strong>${c}</strong>,<br>`    
        mensajeHtml += resultatHtml;

        console.log(mensajeConsola);
        document.getElementById("bloc02Exercici03Sal02").innerHTML = mensajeHtml;
    }

    comprobarNumero();
    trobarMaxim();
  
} 

// Exercici 04 _____________________

function mostrarBloc02Exercici04() {

    let nombres  = [];

    // Obtenemos una serie de números separados por guiones
    let numsString = prompt("Introdueix una sèrie de números separats per guió i sense espais\n(Exemple: 2-45-67)");

    // Convertimos el string en un array utilizando el guión como delimitador
    nombres = numsString.split('-');

    // Convertimos los elementos del array a números
    let nombresNumero = nombres.map(function(numero) {
        return parseInt(numero);
      });

    let resultatConsola = "";
    let resultatHtml = "";  

    function parOImpar() {

        for (let i = 0; i < nombresNumero.length; i++){

            resultatConsola += (nombresNumero[i] % 2 == 0) ? `${nombresNumero[i]} és parell\n` : `${nombresNumero[i]} és imparell\n`;
            
            resultatHtml += (nombresNumero[i] % 2 == 0) ? `${nombresNumero[i]} <strong>és parell</strong><br>` : `${nombresNumero[i]} <strong>és imparell</strong><br>`;
        }
            
    }

    parOImpar();
    
    let mensajeConsola = "";
    let mensajeHtml = "";

    mensajeConsola  = `Bloc 02 - Exercici 04\n` 
    mensajeConsola += `Array de nombres introduïts = [ ${nombres} ]\n`
    mensajeConsola += resultatConsola;

    mensajeHtml  = `Array de nombres introduïts = [ ${nombres} ]<br>`
    mensajeHtml += resultatHtml;

    console.log(mensajeConsola);
    document.getElementById("bloc02Exercici04Sal").innerHTML = mensajeHtml;

} 










