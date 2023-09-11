// ----------Ejercicio 1-----------
    const cuadrado = document.getElementById('cuadrado')
    const cambiarBoton = document.getElementById('cambiarBoton')
    let colorActual = 0
    const colores = ['#ccc', 'lightblue', 'red']
    const nombresColores = ['Gris', 'Celeste', 'Rojo']

    function cambiarColor() {
        colorActual = (colorActual + 1) % colores.length
        cuadrado.style.backgroundColor = colores[colorActual]
        cuadrado.textContent = nombresColores[colorActual]
    }

    cambiarBoton.addEventListener('click', cambiarColor)


// ----------Ejercicio 2-------------
    const cuadrad = document.getElementById('cuadrado_input_cuadrado')
    const textoInput = document.getElementById('texto_input_cuadrado')
    const borrarBoton = document.getElementById('borrar_boton_input_cuadrado')

    textoInput.addEventListener('input', function() {
        cuadrad.textContent = this.value
    });

    borrarBoton.addEventListener('click', function() {
        cuadrad.textContent = ''
        textoInput.value = ''
    })


// ----------Ejercicio 3---------

    const calcularBoton = document.getElementById('calcular')
    const pesoInput = document.getElementById('peso')
    const alturaInput = document.getElementById('altura')
    const resultadoInput = document.getElementById('resultado')

    calcularBoton.addEventListener('click', function() {
        const peso = parseFloat(pesoInput.value)
        const altura = parseFloat(alturaInput.value)

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoInput.value = 'Por favor, ingresa valores válidos.'
        } else {
            const imc = peso / (altura * altura)
            resultadoInput.value = imc.toFixed(2)
        }
    });

    // ----------Ejericicio 4--------------

    
        const dolarInput = document.getElementById('dolar')
        const pesosInput = document.getElementById('pesos')
        const resultadoInpu = document.getElementById('resultado')
    
        dolarInput.addEventListener('input', function() {
            const dolarValue = parseFloat(this.value)
            const pesosValue = dolarValue * 500
            pesosInput.value = pesosValue.toFixed(2)
        });
    
        pesosInput.addEventListener('input', function() {
            const pesosValue = parseFloat(this.value)
            const dolarValue = pesosValue / 500
            dolarInput.value = dolarValue.toFixed(2)
        });
    
    
