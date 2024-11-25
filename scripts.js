// Función para abrir el modal con la información del producto
function openModal(product) {
    const modal = document.getElementById('product-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const grainDetails = document.getElementById('modal-grain-details');
    const roast = document.getElementById('modal-roast');
    const rating = document.getElementById('modal-rating');
    const image = document.getElementById('modal-image');

    // Cambiar contenido según el producto
    if (product === 'product1') {
        title.innerText = 'Café Brasil 250g';
        description.innerText = 'Café de tueste medio con notas de cacao y nuez.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Medio';
        rating.innerText = 'Puntaje: ★★★★☆';
        image.src = 'cafe prueba.svg';
    } else if (product === 'product2') {
        title.innerText = 'Café Brasil 500g';
        description.innerText = 'Café 100% orgánico, ideal para los paladares más exigentes.';
        grainDetails.innerText = 'Grano: Arábica';
        roast.innerText = 'Tueste: Oscuro';
        rating.innerText = 'Puntaje: ★★★★★';
        image.src = 'cafe prueba.svg';
    }

    // Mostrar el modal
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = 1, 10); // Retardo para que la animación se vea bien
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = 'none', 300); // Desaparece después de la animación
}

// Función para abrir la tienda en una nueva ventana
function openStore() {
    const tiendaHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tienda - Beta Café</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@300;400&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    padding: 2rem;
                    background-color: #f8f8f8;
                }
                h1 {
                    text-align: center;
                    color: var(--marron-oscuro);
                }
                .product-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.5rem;
                    justify-content: center;
                }
                .product-item {
                    width: 200px;
                    background-color: white;
                    padding: 1rem;
                    text-align: center;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .product-item img {
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <h1>Tienda de Beta Café</h1>
            <div class="product-list">
                <div class="product-item">
                    <img src="cafe prueba.svg" alt="Producto 1">
                    <h3>Café Premium</h3>
                    <p>€8.99</p>
                </div>
                <div class="product-item">
                    <img src="cafe prueba.svg" alt="Producto 2">
                    <h3>Café Orgánico</h3>
                    <p>€12.50</p>
                </div>
            </div>
        </body>
        </html>
    `;
    const tiendaVentana = window.open("", "_blank", "width=800,height=600");
    tiendaVentana.document.write(tiendaHTML);
    tiendaVentana.document.close();
}
