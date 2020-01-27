const argv = require('yargs')
.command('crear','Crea una tarea',{
    nombre:{
        demand: true,
        alias: 'n'
    },
    descripcion:{
        demand: true,
        alias: 'd'
    }
})
.command('borrar','borra una tarea',{
    nombre:{
        demand: true,
        alias: 'n'
    }
})
.command('actualizar','Actualiza una tarea',{
    estado:{
        alias: 'e',
        default: 'Completo'
    }
})
.help()
.argv

module.exports = {
    argv
}