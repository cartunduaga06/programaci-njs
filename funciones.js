// funcion expresada

let sumar =  function(numeroA, numeroB) {
return numeroA+ numeroB;
}

console.log(sumar(7,9)); 

//funcion declarada 

function restar(numeroC, numeroD){
    return numeroC - numeroD;
}
console.log(restar(10,3)); 

// ejemplo de scope 

let mensaje =  ' hola ';

function saludar() {
    let mensaje = 'chau'; 
    return mensaje; 
}

console.log(mensaje)
console.log(saludar());

//ejemplo 

function ejemplo() {
    return 'hola, soy una función';
 }
 
 console.log(ejemplo());

//ejemplo 2

 let ejemplo2 = "hola, soy una función expresada";

function ejemplod(){
    console.log(ejemplo2);
}

ejemplod();

// Ejemplo 3


let ejemplo3 = function (){
    return "hola, soy una función expresada";
} 



console.log(ejemplo3) 

// ejemplo funciones 

function anterior(a) {
    return a-1;
}

function triple (a) {
    return a*3;
}

function anteriorDelTriple (a) {
    return  anterior(triple(a));
}

console.log(anterior(10));
console.log(triple(3));
console.log(anteriorDelTriple(10));