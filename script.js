document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pedidoEmpanadas");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const cantidad = parseFloat(document.getElementById("cantidad").value);
        const nombre = document.getElementById("nombre").value;
        const direccion = document.getElementById("direccion").value;

        // Validar que la cantidad sea un número positivo
        if (isNaN(cantidad) || cantidad <= 0) {
            resultadoDiv.innerHTML = "<p>La cantidad debe ser un número positivo.</p>";
            return;
        }

        // Precio por docena de empanadas
        const precioPorDocena = 3000;
        
        // Calcular el precio total
        const precioTotal = cantidad * precioPorDocena;

        // Mostrar el resultado
        resultadoDiv.innerHTML = `
            <p>¡Pedido para ${nombre}!</p>
            <p>Cantidad de docenas: ${cantidad}</p>
            <p>Precio total: $${precioTotal.toFixed(2)}</p>
            <p>Dirección de entrega: ${direccion}</p>
        `;
    });
});
// JavaScript para activar el modo de alto contraste
document.addEventListener('DOMContentLoaded', function() {
    const botonAccesibilidad = document.getElementById('botonAccesibilidad');
    const body = document.body;

    botonAccesibilidad.addEventListener('click', function() {
        if (body.classList.contains('alto-contraste')) {
            body.classList.remove('alto-contraste');
        } else {
            body.classList.add('alto-contraste');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const botonCreador = document.getElementById('botonCreador');

    botonCreador.addEventListener('click', function() {
        alert('Sitio creado por [Nombre del Creador]');
    });
});

