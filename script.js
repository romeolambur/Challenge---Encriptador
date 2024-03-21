document.addEventListener("DOMContentLoaded", function() {
    // Función para encriptar el texto
    function encriptarTexto(texto) {
        // Objeto con las llaves de desencriptación
        const llavesEncriptacion = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };

        texto = texto.toLowerCase();

        let textoEncriptado = '';
        for (let letra of texto) {
            if (letra in llavesEncriptacion) {
                textoEncriptado += llavesEncriptacion[letra];
            } else {
                textoEncriptado += letra;
            }
        }

        return textoEncriptado;
    }

    // Función para desencriptar el texto
    function desencriptarTexto(textoEncriptado) {
    // Objeto con las llaves de desencriptación
    const llavesDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Iterar sobre cada llave de desencriptación
    for (let llave in llavesDesencriptacion) {
        // Crear una expresión regular para encontrar cada palabra encriptada
        const regex = new RegExp(llave, 'g');
        // Reemplazar cada palabra encriptada con su contraparte desencriptada
        textoEncriptado = textoEncriptado.replace(regex, llavesDesencriptacion[llave]);
    }

    return textoEncriptado;
}

    
    // Acceder a los elementos del DOM
    const textArea = document.querySelector('.text-area');
    const mensajeTextArea = document.querySelector('.mensaje');
    const mensajeSinTexto = document.querySelector('.mensaje-sin-texto');
    const imagenMensaje = document.querySelector('.mensaje');
    const btnCopiar = document.querySelector('.btn-copiar');

    // Agregar evento de clic al botón de encriptar
    document.querySelector('.btn-encriptar').addEventListener('click', function() {
        const textoOriginal = textArea.value;
        const textoEncriptado = encriptarTexto(textoOriginal);
        mensajeTextArea.value = textoEncriptado;

        // Mostrar el botón de copiar
        btnCopiar.style.display = 'block';

        // Ocultar el mensaje sin texto
        mensajeSinTexto.classList.add('ocultar');

        // Ocultar la imagen de fondo en la caja .mensaje
        imagenMensaje.style.backgroundImage = 'none';
    });

    // Agregar evento de clic al botón de desencriptar
    document.querySelector('.btn-desencriptar').addEventListener('click', function() {
        const textoEncriptado = textArea.value;
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        console.log(textArea.value);
        mensajeTextArea.value = textoDesencriptado;
        console.log(mensajeTextArea.value);

        // Mostrar el botón de copiar
        btnCopiar.style.display = 'block';

        // Ocultar el mensaje sin texto
        mensajeSinTexto.classList.add('ocultar');

        // Ocultar la imagen de fondo en la caja .mensaje
        imagenMensaje.style.backgroundImage = 'none';
    });

    // Agregar evento de clic al botón de copiar
    document.querySelector('.btn-copiar').addEventListener('click', function() {
        mensajeTextArea.select(); // Seleccionar texto para copiar
        document.execCommand('copy'); // Copiar texto al portapapeles
        mensajeTextArea.value = ''; // Borrar el texto en la caja mensaje
    });
});




