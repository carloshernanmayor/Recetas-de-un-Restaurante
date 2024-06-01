document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");
    let origenAbierto = null;

    function cargarRecetas() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(recetasColombianas);
            }, 1000);
        });
    }

    function mostrarReceta(receta) {
        content.innerHTML = "";

        const recetaElement = document.createElement("div");
        recetaElement.classList.add("receta");

        const recetaInfo = document.createElement("div");
        recetaInfo.classList.add("receta-info");
        recetaInfo.innerHTML = `
            <h2>${receta.nombre}</h2>
            <p>Tiempo de preparación: ${receta.tiempoPreparacion}</p>
            <p>Dificultad: ${receta.dificultad}</p>
            <h3>Ingredientes:</h3>
            <ul>
                ${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}
            </ul>
        `;

        const recetaImagen = document.createElement("img");
        recetaImagen.classList.add("receta-imagen");
        recetaImagen.src = receta.imagen;

        recetaElement.appendChild(recetaInfo);
        recetaElement.appendChild(recetaImagen);

        content.appendChild(recetaElement);
    }

    function generarMenu(recetas) {
        const origenes = [...new Set(recetas.map(receta => receta.origen))];
        origenes.forEach(origen => {
            const origenItem = document.createElement("li");
            origenItem.classList.add("menu-item");
            origenItem.textContent = origen;

            const recetasList = document.createElement("ul");
            recetasList.classList.add("recetas-list"); 
            recetasList.style.display = "none";

            const recetasPorOrigen = recetas.filter(receta => receta.origen === origen);
            recetasPorOrigen.forEach(receta => {
                const recetaItem = document.createElement("li");
                recetaItem.textContent = receta.nombre;
                recetaItem.addEventListener("click", () => mostrarReceta(receta));
                recetasList.appendChild(recetaItem);
            });

            origenItem.appendChild(recetasList);
            origenItem.addEventListener("click", (event) => {
                if (event.target === origenItem) {
                    if (origenAbierto && origenAbierto !== recetasList) {
                        origenAbierto.style.display = "none";
                    }

                    const isVisible = recetasList.style.display === "block";
                    recetasList.style.display = isVisible ? "none" : "block";
                    origenAbierto = isVisible ? null : recetasList;
                }
            });

            menu.appendChild(origenItem);
        });
    }

    cargarRecetas().then(recetas => {
        generarMenu(recetas);
    });
});
