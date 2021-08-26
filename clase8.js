let edad = -20; //(el número es a modo de ejemplo, podes cambiarlo o crear otras
// para tener varias pruebas)
if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}

edad = 21; //(el número es a modo de ejemplo, podes cambiarlo o crear otras
// para tener varias pruebas)

if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
  if (edad % 2 == 1) {
    console.log("¿sabias que tu edad es impar");
  }
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
  if (edad % 2 == 1) {
    console.log("¿sabias que tu edad es impar");
  }
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  if (edad % 2 == 1) {
    console.log("¿sabias que tu edad es impar");
  }
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
  if (edad == 21) {
    console.log("Felicitaciones tienes la mayoria de edad");
    if (edad % 2 == 1) {
      console.log("¿sabias que tu edad es impar");
    }
  }
}


console.log('--------------------total a pagar-------');

function totalAPagar(vehiculo, litrosConsumidos) {
  switch (vehiculo) {

    case "coche":
      precio = 86;
      break;
    case "moto":
      return  precio = 70;
      break;
    case "autobus":
      return precio = 55;
      break;

    default:
      break;
  }


  return litrosConsumidos>= 0 && litrosConsumidos<=25 ? `El total es $${litrosConsumidos*precio + 50}`:`El total es $${litrosConsumidos*precio + 50}`;
}
console.log(totalAPagar("coche",30));

function calculadorSandwich (sandwich, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza)
{
    let precioSandwich=0;    
    switch(sandwich)
    {
        case "pollo":
            precioSandwich = 150
            break;
        case "carne":
            precioSandwich = 200
            break;
        case "veggie":
            precioSandwich = 100
            break;
    }
    switch(pan)
    {
        case "blanco":
            precioSandwich += 50
            break;
        case "negro":
            precioSandwich += 60
            break;
        case "s/gluten":
            precioSandwich += 75
            break;
    }

    queso ? precioSandwich += 20 : precioSandwich
    tomate ? precioSandwich += 15 : precioSandwich
    lechuga ? precioSandwich += 10 : precioSandwich
    cebolla ? precioSandwich += 15 : precioSandwich
    mayonesa ? precioSandwich += 5 : precioSandwich
    mostaza ? precioSandwich += 5 : precioSandwich
    return `el precio total del pedido  es $${precioSandwich}`
}

console.log(calculadorSandwich("Pollo","blanco", true, true, true, true, true, true,));

// cual es el numero secreto 

function numeroSecreto(numero) {
  let adivina = Math.trunc(Math.random() *10)
  if (numero == adivina) {
    return "felicitaciones es el numero correcto"
  } else {
    return `el numero correcto es ${adivina}, fallaste intenta de nuevo`
  }
}

console.log(numeroSecreto(6));

// abrir paracaidas

function abrirParacaidas(velocidad, altura) {
  return velocidad < 1000 && (altura >= 2000 && altura<3000) ? "se abre" :"se cierra"
  
}

console.log(abrirParacaidas(999,2500));

// traductor condicional 

function traductor(palabra) {
  switch (palabra) {
    case "casa":
      return "house"
    case "perro":
      return "Dog"
      case "pelota":
      return "Ball"
      case "árbol":
        return "tree"
        case "genio":
          return "smart"
    default:
      return "la palabra ingresada es incorrecta";
  
}}

console.log(traductor("casa"));

// valoracion de peliculas 

function valoracionPelicula(calificacion) {



  switch (calificacion) {
    case "Muy mala":
      return "Me lamento por su calificación"
      case "Mala":
      return "Elegiste mala, Me lamento por su calificación"
      case "Mediocre":
      return "Me lamento por su calificación"
      case "Buena":
      return "Me alegro por su calificación"
      case "Muy Buena":
      return "Me alegro por su calificación"
  
    default:
      return "ingresaste un valor invalido"
  }

  console.log("gracias por visitarnos"); 
 

}
console.log(valoracionPelicula("Muy Buena"));
