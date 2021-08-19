Math.random()

console.log(Math.random());

// función que convierta pulgadas en centímetros 

function pulgadas(a) {
    return a*2.54;
}

console.log(pulgadas(5));

// función que recibe un string y devuelve la misma frase pero con admiración.

function frase(a) {
    return "!"+a;

}

console.log(frase("hola"));

//Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

function edadPerro(a) {

    return a*7
}

console.log(edadPerro(5));

// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.

function valorHoraTrabajo (a, b) {
    return a/b
}

console.log(valorHoraTrabajo(4000000, 40));

// Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores.

function  imc(a, b){
    return  b/(a*a)
}

console.log(imc(1.73,74));

// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 

function minuscula(a){
    return a.toUpperCase();
}

console.log(minuscula("hola"));

// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 

function tipoDato(a){
    return  typeof a;
}

console.log(tipoDato(5));

// Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia. 

function circunferencia(a) {
    let dos=2; 
    return  (dos*Math.PI*a);
} 

console.log(circunferencia(5));
