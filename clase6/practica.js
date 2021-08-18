let uno = 1;
let dos = uno; 

console.log(dos);
//ejercitacion 

let temperatura = 25;
let estaLloviendo = false;
let pisoDelAsensor = 10;
let horaActual = 21;
let horaApertura = 8;
let horaCierre = 18;

console.log(temperatura, estaLloviendo, pisoDelAsensor, horaActual, horaApertura, horaCierre);

//comprar una prenda 

let tipoDePrenda =  "Pantalon";
let talleDePrenda = 32;
let colorDePrenda = "rojo";
let precioDePrenda = 1500;
let stockDePrenda = true;
let formaDePago = "efectivo";

console.log(tipoDePrenda, talleDePrenda, colorDePrenda, precioDePrenda, stockDePrenda, formaDePago);

// mensaje con variables 

let nombre =  "carlos";
let edad =  33;
let cumpleaños = "06-06";
let ciudad =  "florencia";
let ocupación =  "software developer";
let hobbie = "programar";

console.log("yo me llamo" + " " + nombre + " " + "tengo " + " " + edad.toString());

// calculadora edad 

let edad2 = 33;
let mensaje2 ="tu edad en dias es "; 

function dias(){
    
    return mensaje2 + edad2 *365;
}

console.log(dias());


/* const input = document.querySelector('input');
const log = document.getElementById('valores');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}
 */

// suma de valores 

let num1 = 12;
let num2 = 20;
let resultado = num1 + num2;
console.log(resultado);

// calculador de abastecimiento de por vida

let miedad = 37;
let otroedad = miedad;
let snack =  "pizza";
let estimaciondia =  1;
let cuantossnack = estimaciondia* 365 * miedad;
let salida = ` Vas a necesitar  ${cuantossnack}  snacks para que te alcancen hasta los ${miedad} años. ` ;

console.log(salida);

// ejercicio 2 

let diasDeViaje = 4;
let presupuesto = 1500000;
let comida = 12;
let gasto = presupuesto/comida;
let resultado2 = `Podés gastar ${gasto} en cada comida
para que te alcance la plata durante los ${diasDeViaje} días de viaje".`
console.log(resultado2);

// CALCULADORA IMC 

let nombre2 = "carlos";
let edad4 = 37;
let peso = 74;
let altura = 1.73;
let tienePrepagada = true;
let imc = peso / (altura*altura)
let mensaje =  `${nombre2}  tiene ${edad4} años y su índice de masa corporal es de ${imc} ”.`
console.log(mensaje);