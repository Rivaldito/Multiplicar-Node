const { CrearArchivo, crearListar } = require('./multiplicar/multiplicar');

const argv = require('./ff/yargs').argv
    //si no le llegase a colocar el .arg al final tendriea que colocar argv.argv



let command = argv._[0];

switch (command) {

    case 'listar':

        crearListar(argv.base, argv.limite);

        break;

    case 'crear':
        CrearArchivo(argv.base)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log("No se a ejecuatado un comando");



}


//console.log(argv.limite);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];