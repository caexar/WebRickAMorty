// Función para cargar los primeros 15 personajes en la lista desplegable
function cargarPersonajes() {
    const select = document.getElementById("selectNombres");
    fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then(response => response.json())
        .then(data => {
            const personajes = data.results.slice(0, 15); // Tomar solo los primeros 15 personajes
            personajes.forEach(personaje => {
                const option = document.createElement("option");
                option.value = personaje.name;
                option.textContent = personaje.name;
                select.appendChild(option);
            });
        })
        .catch(error => console.error("Error al cargar los personajes:", error));
}

// Función para buscar por nombre cuando se selecciona un personaje en la lista desplegable
function buscarPorNombreSelect(nombre) {
    const cards = document.querySelectorAll(".card");
    if (nombre === "todos") {
        // Mostrar todas las tarjetas
        cards.forEach(card => card.style.display = "block");
    } else {
        // Ocultar todas las tarjetas
        cards.forEach(card => card.style.display = "none");
        // Mostrar solo la tarjeta correspondiente al nombre seleccionado
        const cardToShow = document.querySelector(`.card[data-name="${nombre}"]`);
        if (cardToShow) {
            cardToShow.style.display = "block";
        }
    }
}

// Función para cargar los 15 primeros personajes en cards
function cargarPersonajesCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then(response => response.json())
        .then(data => {
            const personajes = data.results.slice(0, 15); // Tomar solo los primeros 15 personajes
            personajes.forEach(personaje => {
                const card = document.createElement("div");
                card.classList.add("card", "col-md-4", "mb-3");
                card.setAttribute("data-name", personaje.name); // Añadir atributo data-name
                card.innerHTML = `
                    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                    </div>`;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error al cargar los personajes:", error));
}

// Llamada a las funciones para cargar los personajes al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    cargarPersonajes();
    cargarPersonajesCards();
});
