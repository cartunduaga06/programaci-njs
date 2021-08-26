function sumar (a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}
function multiplicar(a,b) {
    return a*b;
}
function dividir(a,b) {
    return a/b;
}

function cuadradoDeUnNumero(a) {
    

   return multiplicar(a,a)
}

function promedioDeTresNumeros(a,b,c){
    let resultado = sumar(a,b) ;
    let total = resultado +c;
    return dividir(total,3);

}

function calcularProcentaje(a,b) {
    let numero = dividir(b,100);
    return multiplicar(numero,a);
}

function generadorDePorcentaje(a,b) {
    let num1 = dividir(a,b);
    return multiplicar(num1,100);
}


console.log("----Testeo de Operaciones / Calculadora");
// 
console.log(sumar(5,5), restar(5,5));
console.log(multiplicar(5,5));
console.log(dividir(5,5));
console.log(multiplicar(5,0));
console.log(cuadradoDeUnNumero(3));
console.log(promedioDeTresNumeros(3,3,3));
console.log(calcularProcentaje(300,15));
console.log(generadorDePorcentaje(2,200));

console.log();


/* let es_mayoy= false;
console.log(es_mayoy ||tiene_altura); */

console.log(!0);

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)


let str = ""
let msj = "jaja!"
let esGracioso = "false"
!((str || msj) && esGracioso)
