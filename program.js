let miTexto = document.getElementById("text1");
let miBoton = document.getElementById("boton1");
let salidaTotalLetras = document.getElementById("text2");
let salidaConteoLetras = document.getElementById("text3");

// Manejador de eventos
miBoton.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar recarga del formulario
    miBoton.style.backgroundColor = "purple"; // Cambiar color del botón al hacer clic

    const textoIngresado = miTexto.value;
    const cantidadLetras = contarLetras(textoIngresado); // Cantidad total de letras
    const resultadoConteo = contarCadaLetra(textoIngresado); // Conteo detallado

    // Mostrar resultados en las casillas correspondientes
    salidaTotalLetras.value = `${cantidadLetras}`;
    salidaConteoLetras.value = resultadoConteo;
});

// Función para contar el total de letras
function contarLetras(texto) {
    const textoSinEspacios = texto.replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/g, '');
    return textoSinEspacios.length;
}

// Función para contar cuántas veces aparece cada letra
function contarCadaLetra(texto) {
    const textoFiltrado = texto.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
    const contador = {};

    // Contar cada letra
    for (let letra of textoFiltrado) {
        contador[letra] = (contador[letra] || 0) + 1;
    }

    // Construir el resultado en el formato deseado
    let resultado = "";
    for (let [letra, cantidad] of Object.entries(contador)) {
        const veces = cantidad === 1 ? "una" : cantidad === 2 ? "dos" : `${cantidad}`;
        resultado += `${veces} ${cantidad > 1 ? 'veces' : 'vez'} la letra "${letra}"\n`;
    }

    return resultado.trim();
}
