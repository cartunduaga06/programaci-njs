// ternario 

let fruta =  'Naranja';

let resultado = fruta == 'Manzana' ? 'Buenisimo, me gustan las manzanas' : 'ufa, quería Manzana';


console.log(resultado);

// swith 

let semaforo = 'Ninguna';

switch(semaforo) {
    case 'Verde':
        console.log('Puedo Cruzar');
        break;
    case 'Amarillo':
        console.log('Precaución');
        break;
        case 'Rojo':
            console.log('No cruzar, hay que esperar');
            break;
            default:
                console.log('No funciona el semáforo');
                break;
}

let a = nuevo;

function  esverdadero(a) {
    if(a){
        return true;
    }
}

console.log(esverdadero(a));