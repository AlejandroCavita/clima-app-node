//Obtenemos las funciones que viven el js 
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(-12.420000, -66.300003)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)