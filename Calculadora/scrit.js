const screen = document.querySelector('.screen');
let calculated = false; // Indica si ya se realizó un cálculo


// Añadir números a la interfaz
function addcalculadora(value) {
    if (calculated) {
        // Reinicia la pantalla si ya se calculó algo
        screen.textContent = value;
        calculated = false; // Permite seguir editando
    } else if (screen.textContent === '0') {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}

// Borrar datos
function deletecalculadora() {
    screen.textContent = '0';
    calculated = false; // Permite nuevas operaciones
}

// Calcular
function calcular() {
    try {
        // Reemplaza 'x' por '*' para realizar operaciones
        screen.textContent = eval(screen.textContent.replace('x', '*'));
        calculated = true; // Marca que ya se realizó un cálculo
    } catch {
        screen.textContent = 'ERROR BURRO';
        calculated = false; // Permite reiniciar tras un error
    }
}

// Evento para cada botón
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'DE') {
            deletecalculadora();
        } else if (value === '=') {
            calcular(); // Llama correctamente la función
        } else {
            addcalculadora(value); // Pasa el valor del botón
        }
    });
});

