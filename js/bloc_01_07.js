// Bloc 01.07: Promises & Async/Await

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

// Exercici 02 _____________________
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

// Exercici 03 _____________________
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

// Exercici 04 _____________________
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

// Exercici 05 _____________________
function mostrarBloc07Exercici05() {

    async function imprimir() {

        // La declaración "try" define un bloque de código para ejecutar
        try {
            let holaPromise =
            new Promise(function(resolve, reject) {
                setTimeout(function(){

                // Simulando un error
                reject("¡Error al resolver la promesa!");

                resolve("Hola, món");
            }, 2000);
            });

            console.log(`Bloc 07 - Exercici 05\n`);
            console.log(await holaPromise);
            document.getElementById("bloc07Exercici05Sal").innerHTML = await holaPromise;
        }
        // La declaración "catch" define un bloque de código para manejar cualquier error.
        catch (error) {
            
            // Captura cualquier error que pueda ocurrir durante la ejecución de la promesa
            console.error("Error:", error);
            document.getElementById("bloc07Exercici05Sal").innerHTML = `<strong>Error: </strong>${error}`;
        }
      
    }

    imprimir();
}

// Exercici 06 _____________________
function mostrarBloc07Exercici06() {

    let promise01 = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Missatge després de 2 segons");
        }, 2000);
    });

    let promise02 = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve("Missatge després de 3 segons");
        }, 3000);
    });  
    
    console.log(`Bloc 07 - Exercici 06\n`);
    Promise.all([promise01, promise02])
        .then((values) => {console.log(values);})

        Promise.all([promise01, promise02])
        .then((values) => {document.getElementById("bloc07Exercici06Sal").innerHTML = values.join("<br>")});    
}

