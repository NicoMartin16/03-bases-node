const fs = require('fs');

let data = '';


let crearArchivo = (base, list) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('El valor introducido no es un numero');
            return;
        }
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ` + base * i+ '\n';
        }

        if(list){
            console.log(data)
        }

        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if(err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });
        
    });
}

module.exports = {
    crearArchivo
}