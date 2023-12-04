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

// Exercici 04 _____________________
function mostrarBloc06Exercici04() {

    let mensajeConsola = "";
    let mensajeHtml = "";
    let resultatConsola = "";
    let resultatHtml = "";

    let persona = {
        nom: "Ona",
        edat: 25,
        ciutat: "Barcelona"
    };

    for (let propiedad in persona) {
        
        resultatConsola += `${propiedad}: ${persona[propiedad]}\n`;
        resultatHtml += `<strong>${propiedad}:</strong> ${persona[propiedad]}<br>`;       
    }

    mensajeConsola = `Bloc 06 - Exercici 04\n`;
    mensajeConsola += resultatConsola;

    mensajeHtml += resultatHtml;

    console.log(mensajeConsola);
    document.getElementById("bloc06Exercici04Sal").innerHTML = mensajeHtml;
}   

// Exercici 05 _____________________
function mostrarBloc06Exercici05() {

    let mensajeConsola = "";
    let mensajeHtml = "";
    let resultatConsola = "";
    let resultatHtml = "";


    let nombres = [1, 2, 3, 4, 5, 6];

    for (let num of nombres) {
        
        if (num === 5) { break; }

        resultatConsola += `${num}\n`;
        resultatHtml += `<strong>${num}</strong><br>`       
    }

    mensajeConsola = `Bloc 06 - Exercici 05\n`;
    mensajeConsola += resultatConsola;

    mensajeHtml += resultatHtml;

    console.log(mensajeConsola);
    document.getElementById("bloc06Exercici05Sal").innerHTML = mensajeHtml;
}   

// Exercici 06 _____________________
function mostrarBloc06Exercici06() {

    let mensajeConsola = "";
    let mensajeHtml = "";
    let resultatConsola = "";
    let resultatHtml = "";


    // El método de array entries() devuelve un objeto Array Iterator con pares clave/valor

    let noms = ['Anna', 'Bernat', 'Clara'];

    for (let [index, nom] of noms.entries()) {
        
        resultatConsola += `${index}: ${nom}\n`;
        resultatHtml += `${index}: <strong>${nom}</strong><br>`       
    }

    mensajeConsola = `Bloc 06 - Exercici 06\n`;
    mensajeConsola += resultatConsola;

    mensajeHtml += resultatHtml;

    console.log(mensajeConsola);
    document.getElementById("bloc06Exercici06Sal").innerHTML = mensajeHtml;
}   