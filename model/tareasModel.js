const colors = require('colors')
const fs = require('fs')

let listadoTarea = []

const guardar = () => {
    let datos = JSON.stringify(listadoTarea)
    fs.writeFile('db/db.json',datos,(err) => {
        if(!err){
            return console.log(colors.green('Accion Realizada Con Extio'))
        }else{
            return console.log(colors.red(`ERROR: ${err}`))
        }
    })
}

const cargarDB = () => {
    try {
        listadoTarea = require('../db/db.json')
        return listadoTarea
    } catch (error) {
        listadoTarea = []
    }
}

const crear = (nombre,desc,estado = 'pendiente') => {
    cargarDB()

    let tarea = {
        nombre: nombre,
        desc: desc,
        estado: estado
    }

    listadoTarea.push(tarea)
    guardar()
}

const actualizar = (nombre,estado = true) => {
    cargarDB()
    let index = listadoTarea.findIndex(tarea => tarea.nombre === nombre)

    if (index >= 0) {
        listadoTarea[index].estado = estado
        guardar()
        return true
    } else {
        return false
    }
}

const borrar = (nombre) => {
    cargarDB()
    let index = listadoTarea.findIndex(tarea => tarea.nombre === nombre)

    if (index >= 0) {
        listadoTarea.splice(index,1)
        guardar()
        return console.log(listadoTarea[index])
    } else {
        return false
    }
}

module.exports = {
    crear,
    actualizar,
    borrar,
    cargarDB
}