// ---------Ejercicio 1--------------

function imprimirMensaje(mensaje){
    console.log(mensaje)
}

const imprimirMensajes = mensaje => {
    console.log(mensaje)
}

// -----------Ejercicio 2--------------


function crearMultiplicacion(numero1, numero2){
    let resultado = numero1 * numero2
    return resultado
}

const crearMultiplicacio = (numero1, numero2) => numero1 * numero2

// ---------Ejercicio 3-------------

const array = [1,2,3,4,5,6,7,8,9]
let Resultado = array.map(crearMultiplicacio)
console.log(Resultado)
crearMultiplicacio()

// -----------Ejercicio 4------------

function obtenerCervezasMasAlcoholicas(cervezas) {
    const cervezasOrdenadas = cervezas.slice().sort((a, b) => b.alcohol - a.alcohol)

    return cervezasOrdenadas.slice(0, 10)
}

// ---------Ejercicio 5---------

function obtenerCervezasMenosAmargas(cervezas) {
    if (cervezas.length <= 10) {
        return cervezas.slice() 
    }

    const menosAmargas = cervezas.slice().sort((a, b) => a.amargor - b.amargor).slice(0, 10)

    return menosAmargas
}

// ----Ejercicio 6-----

function buscarCervezaPorNombre(cervezas, nombre) {
    for (const cerveza of cervezas) {
        if (cerveza.nombre === nombre) {
            return cerveza;
        }
    }
    return null; // Devolvemos null si no se encuentra la cerveza
}
const cervezas = [
    { nombre: 'Cerveza A' },
    { nombre: 'Cerveza B'},
    { nombre: 'Cerveza C' }
]

const cervezaBuscada = buscarCervezaPorNombre(cervezas, 'Cerveza B');

if (cervezaBuscada) {
    console.log(cervezaBuscada) // Imprime el objeto de la cerveza encontrada
} else {
    console.log('Cerveza no encontrada') // Imprime si la cerveza no se encuentra
}

// -------Ejercicio 7----------

function buscarCervezaPorIBU(cervezas, valor) {
    for (const cerveza of cervezas) {
        if (cerveza.ibu === valor) {
            return cerveza
        }
    }
    console.log(`No existe cerveza con un IBU de ${valor}`)
    return null
}
const cerveza = [
    { nombre: 'Cerveza A', ibu: 20 },
    { nombre: 'Cerveza B', ibu: 30 },
    { nombre: 'Cerveza C', ibu: 40 },
    
]

const cervezaBus = buscarCervezaPorIBU(cervezas, 40)

if (cervezaBus) {
    console.log(cervezaBus)
}

// ------------Ejercicio 8------------

function buscarPosicionCervezaPorNombre(cervezas, nombre) {
    for (let i = 0; i < cervezas.length; i++) {
        if (cervezas[i].nombre === nombre) {
            return i
        }
    }
    console.log(`${nombre} no existe`);
    return -1
}
const cerve = [
    { nombre: 'Cerveza A', ibu: 20 },
    { nombre: 'Cerveza B', ibu: 30 },
    { nombre: 'Cerveza C', ibu: 40 },
]

const posicion = buscarPosicionCervezaPorNombre(cerve, 'Cerveza B');

if (posicion !== -1) {
    console.log(`La cerveza se encuentra en la posición ${posicion}`);
}

// -----------Ejercicio 9----------

function obtenerCervezasPorAlcohol(cervezas, maxAlcohol) {
    const cervezasFiltradas = []

    for (const cerveza of cervezas) {
        if (cerveza.alcohol <= maxAlcohol) {
            const cervezaFiltrada = {
                nombre: cerveza.nombre,
                alcohol: cerveza.alcohol,
                ibu: cerveza.ibu
            };
            cervezasFiltradas.push(cervezaFiltrada)
        }
    }

    return cervezasFiltradas
}

const cervez = [
    { nombre: 'Cerveza A', alcohol: 5.0, ibu: 20 },
    { nombre: 'Cerveza B', alcohol: 6.2, ibu: 30 },
    { nombre: 'Cerveza C', alcohol: 4.8, ibu: 25 },
    // ... Agrega más cervezas con sus respectivos nombres, alcohol e ibu
];

const cervezasFiltradas = obtenerCervezasPorAlcohol(cervez, 5.5);

console.log(cervezasFiltradas);


// ------------Ejercicio 10-------------

function ordenarCervezas(cervezas, propiedad, ascendente) {
    const cervezasOrdenadas = cervezas.slice().sort((a, b) => {
        if (ascendente) {
            return a[propiedad] - b[propiedad]
        } else {
            return b[propiedad] - a[propiedad]
        }
    });

    return cervezasOrdenadas.slice(0, 10)
}
const cer = [
    { nombre: 'Cerveza A', alcohol: 5.0, ibu: 20 },
    { nombre: 'Cerveza B', alcohol: 6.2, ibu: 30 },
    { nombre: 'Cerveza C', alcohol: 4.8, ibu: 25 },
    { nombre: 'Cerveza D', alcohol: 7.4, ibu: 22 },
    { nombre: 'Cerveza E', alcohol: 11.5, ibu: 26 },
    { nombre: 'Cerveza F', alcohol: 3.2, ibu: 22 },
    { nombre: 'Cerveza G', alcohol: 4.5, ibu: 12 },
    { nombre: 'Cerveza H', alcohol: 2.4, ibu: 40 },
    { nombre: 'Cerveza I', alcohol: 7.3, ibu: 33 },
    { nombre: 'Cerveza J', alcohol: 4.8, ibu: 26 },
    { nombre: 'Cerveza K', alcohol: 9.3, ibu: 28 },
    { nombre: 'Cerveza L', alcohol: 1.2, ibu: 12 },
    { nombre: 'Cerveza M', alcohol: 0.6, ibu: 23 },
    { nombre: 'Cerveza N', alcohol: 4.9, ibu: 29 },

];

const cervezasOrdenadas = ordenarCervezas(cer, 'ibu', false)

console.log(cervezasOrdenadas)

// ------------Ejercicio 11--------------

function renderizarTabla(cervezas, id) {
    let contenido = `
        <h2>Tabla de Cervezas</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>ABV</th>
                <th>IBU</th>
            </tr>
    `;

    for (const cerveza of cervezas) {
        contenido += `
            <tr>
                <td>${cerveza.nombre}</td>
                <td>${cerveza.alcohol}</td>
                <td>${cerveza.ibu}</td>
            </tr>
        `;
    }

    contenido += `</table>`;

    document.getElementById('contenedorTabla').innerHTML = contenido;
}

// Ejemplo de uso
const cerv = [
    { nombre: 'Cerveza A', alcohol: 5.0, ibu: 20 },
    { nombre: 'Cerveza B', alcohol: 6.2, ibu: 30 },
    { nombre: 'Cerveza C', alcohol: 4.8, ibu: 25 }
];

renderizarTabla(cerv, 123);
