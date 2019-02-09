let options = {

    base: {
        demand: true,
        alias: 'b',
        describe: 'La base de la multiplicacion'
    },
    limite: {
        default: 10,
        alias: 'l'
    }

}

const argv = require('yargs')
    .command('listar', 'Una aplicacion que crea una tabla de multiplicar', options)
    .command('listar', 'Una aplicacion que crea una tabla de multiplicar', options)

.help()
    .argv;

module.exports = {
    argv
}