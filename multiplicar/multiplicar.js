const fs = require('fs');

let crearListar = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Un dato introducido no es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base}*${i}=${base*i}`);
        }
    })
}

let CrearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`La base ingresada ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/TablaDeMultiplicar${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla${base}.txt`);
            }

        });


    })
}

module.exports = {

    CrearArchivo,
    crearListar
}