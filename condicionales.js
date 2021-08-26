let clima = 'soleado';
let dia =  'martes';

if (clima == 'soleado' && dia == 'domingo') {
    console.log('lindo dia para pasear');
    } else if (clima ==  'soleado' && dia == 'lunes') {

        console.log('podria salir igual ');
    } else  {
        console.log('mejor me quedo en casa practicando js');
    }



    function puedePasar(nombre) {
        if (nombre == "Cosme Fulanito"){
            console.log(false);
        } else { console.log(true);}
    }

    puedePasar("Juan Perez")