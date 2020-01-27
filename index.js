const argv = require('./config/yargs').argv
const tarea = require('./model/tareasModel')
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'crear':
            tarea.crear(argv.nombre,argv.descripcion);
        break;
    case 'actualizar':
            let actualizar = tarea.actualizar(argv.n,argv.estado)
        break
    case 'listar':
            let lista = tarea.cargarDB()
            if (lista != '' && lista != undefined) {
                for (const element of lista) {
                    console.log(`
                        ======= Tarea =======
                        Nombre: ${element.nombre}
                        Descipcion: ${element.desc}
                        Estado: ${element.estado}
                    `)
                }
            }else{
                console.log(`${colors.yellow('No se encontraron datos')}`)
            }
        break
    case 'borrar':
            tarea.borrar(argv.n)
        break
    default:
        console.log(`No se reconoce el comando "${colors.red(comando)}"`)
        break;
}