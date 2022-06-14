// Estadisticas en distintas formas
// Media, Mediana y Moda

// Variables
var mediaArray = [];
var medianaArray = [];
var modaArray = [];

// CALCULOS
// Calcular Media
function calcularMedia(mediaArray) {
    // var sumaMediaArray = mediaArray.reduce((a, b) => a + b, 0);
    var sumaMediaArray = 0;
    for (let i = 0; i < mediaArray.length; i++) {
        var elementoActual = Number(mediaArray[i]);
        var sumaMediaArray = Number(sumaMediaArray)+Number(elementoActual);
    }
    var elementosMediaArray = mediaArray.length;
    var mediaTotal = sumaMediaArray/elementosMediaArray;
    console.log("sumaMediaArray: "+sumaMediaArray);
    console.log("elementosMediaArray: "+elementosMediaArray);
    console.log("mediaTotal: "+mediaTotal);
    return mediaTotal;
}

// Calcular Mediana
function calcularMediana(medianaArray) {
    var sortMedianaArray = medianaArray.sort((a, b) => a - b);
    console.log("ordenar numeros; "+sortMedianaArray)

    if(sortMedianaArray.length % 2 == 0) {
        // PAR
        var parUno = sortMedianaArray[(sortMedianaArray.length/2)-1];
        var parDos = sortMedianaArray[(sortMedianaArray.length/2)];
        var resultado = (parUno+parDos)/2;
        // console.log("par");
        // console.log("Valores; "+parUno+" "+parDos);
        return resultado;
    }
    else {
        // IMPAR
        var resultado = sortMedianaArray[(sortMedianaArray.length/2)-0.5];
        // console.log("Valor; "+value);
        // console.log("impar");
        return resultado;
    }
}

// Calculo de Moda
function calcularModa(modaArray) {
    var repetidos = {}
    var max = -Infinity; 
    var maxVar = null;;

    modaArray.forEach(function(numero){
        repetidos[numero] = (repetidos[numero] || 0) + 1;
    });

    for (var key in repetidos) {
        var num = repetidos[key];

        if (num > max) {
            max = num;
            maxVar = key;
        }
        max = (num > max && num) || max;
    }
    // console.log(modaArray);
    // console.log(repetidos);
    // console.log("maxVar "+maxVar);
    return maxVar;
}

// INPUTS

// Media
function addMedia() {
    var input = document.getElementById("mediaInput");
    var value = input.value;
    mediaArray.push(value);
    var outputlista = document.getElementById("listaMedia");
    console.log(mediaArray)
    return outputlista.innerText=mediaArray;
}

function inputMedia() {
    var calcular = calcularMedia(mediaArray);
    var output = document.getElementById("resultadoMedia")
    var resultado = output.innerText = calcular;
    return resultado;
}

// Mediana
function addMediana() {
    var input = document.getElementById("medianaInput");
    var value = input.value;
    medianaArray.push(value);

    var output = document.getElementById("medianaOutput");
    var resultado = output.innerText = medianaArray;

    return resultado;
}

function inputMediana() {
    var calcular = calcularMediana(medianaArray);
    console.log(calcular);   
    var output = document.getElementById("medianaResultado");
    var resultado = output.innerText = calcular;
    
    return resultado;
}

// Moda

function addModa() {
    var input = document.getElementById("modaInput");
    var value = input.value;
    modaArray.push(value);

    var output = document.getElementById("listaModa");
    var resultado = output.innerText = modaArray;

    return resultado;
}

function inputModa() {
    var calcular = calcularModa(modaArray);
    var output = document.getElementById("resultadoModa");
    var resultado = output.innerText = calcular;

    return resultado;
}