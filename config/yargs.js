const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: 'Es la base de table de multiplciar'
    },
    l: {
      alias: "list",
      type: "boolean",
      demandOption: false,
      default: false,
      describe: 'Muestra la tabla en consola'
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;


module.exports = argv;