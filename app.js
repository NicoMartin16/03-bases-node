//required
const {crearArchivo} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');


console.log(argv);

console.log('base: 5', argv.base)


// const [, ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');



crearArchivo(argv.b, argv.l)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch((err) => console.log(err));