// main.js

// Cargar el header
fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

// Cargar el footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

// Base de datos de libros
const books = [
    { id: 1, title: "Ausländer", author: "Paul Dowswell", category: "historia", image: "Imagenes/libro1.jpg", summary: "La vida de Piotr, un joven polaco con ascendencia alemana, cambia radicalmente cuando es adoptado por una familia nazi durante la Segunda Guerra Mundial. Mientras intenta adaptarse a su nueva vida, se enfrenta a la ideología de sus adoptantes y las terribles verdades del régimen nazi. Su viaje está lleno de dilemas éticos y luchas internas, mientras decide si seguir las reglas o tomar un camino más arriesgado para mantener su integridad. La historia destaca la importancia de la resistencia frente al mal y el valor de la humanidad en tiempos de oscuridad." },
    { id: 2, title: "Satanás", author: "Mario Mendoza", category: "ficcion", image: "Imagenes/libro2.jpg", summary: "En Bogotá, las vidas de tres personajes convergen en una tragedia que pone en evidencia los límites de la moral humana. Un sacerdote que sucumbe al deseo, una mujer que usa su belleza para sobrevivir y un pintor obsesionado con el mal forman parte de esta narrativa intensa. La historia culmina con un acto violento basado en hechos reales, explorando temas como la culpa, la violencia y el impacto de las decisiones. La obra es un retrato crudo y realista de las sombras que habitan en la sociedad y en el alma humana." },
    { id: 3, title: "El Mensajero de Agartha", author: "Daniel Estulin", category: "ficcion", image: "Imagenes/libro3.jpg", summary: "Un periodista es arrastrado a un misterio que conecta el mundo moderno con una antigua civilización subterránea conocida como Agartha. A medida que profundiza en sus investigaciones, descubre una conspiración que involucra gobiernos y sociedades secretas. La novela mezcla acción, intriga y elementos de ciencia ficción para explorar los secretos del pasado y su influencia en el presente. Es una invitación a cuestionar la realidad que conocemos y buscar la verdad más allá de las apariencias." },
    { id: 4, title: "El Código Da Vinci", author: "Dan Brown", category: "accion", image: "Imagenes/libro4.jpg", summary: "Cuando un asesinato ocurre en el Museo del Louvre, el profesor Robert Langdon y la criptóloga Sophie Neveu se ven envueltos en un misterio que podría cambiar la historia de la humanidad. Descifran pistas ocultas en obras de arte y textos religiosos, enfrentándose a una sociedad secreta que intenta proteger un secreto milenario. La trama está llena de giros inesperados, explorando temas como la religión, el poder y el conocimiento prohibido. Una novela apasionante que mezcla historia, arte y acción." },
    { id: 5, title: "1984", author: "George Orwell", category: "ficcion", image: "Imagenes/libro5.jpg", summary: "En una sociedad distópica, Winston Smith trabaja para un gobierno totalitario que vigila cada aspecto de la vida. Manipulado por el Partido, Winston comienza a cuestionar la propaganda y busca la verdad en un mundo donde el pasado se reescribe constantemente. Su relación con Julia lo lleva a rebelarse, pero pronto descubre el alto costo de la libertad. La novela es una crítica al autoritarismo y un recordatorio inquietante sobre los peligros de la vigilancia extrema y la manipulación de la información." },
    { id: 6, title: "El Alquimista", author: "Paulo Coelho", category: "ficcion", image: "Imagenes/libro6.jpg", summary: "Santiago, un joven pastor andaluz, deja su vida cómoda para buscar un tesoro en Egipto tras tener un sueño recurrente. Durante su viaje, conoce a personajes que lo guían, como un rey, un comerciante y un alquimista, quienes le enseñan sobre el destino y los sueños. A través de desafíos y aprendizajes, descubre que el verdadero tesoro está en la experiencia y el conocimiento adquirido en el camino. Una novela inspiradora que invita a seguir los sueños y escuchar al corazón." },
    { id: 7, title: "Los Pilares de la Tierra", author: "Ken Follett", category: "historia", image: "Imagenes/libro7.jpg", summary: "En la Inglaterra medieval, la construcción de una catedral une las vidas de varios personajes, desde un humilde constructor hasta un poderoso obispo. La novela explora temas de poder, amor y traición, mientras los personajes luchan contra las adversidades y sus propios conflictos internos. Con una trama rica en detalles históricos, la obra retrata la lucha entre la ambición personal y el bien común, mostrando la resiliencia del espíritu humano." },
    { id: 8, title: "Sherlock Holmes", author: "Arthur Conan Doyle", category: "accion", image: "Imagenes/libro8.jpg", summary: "El detective más famoso del mundo, junto a su fiel compañero Watson, resuelve los casos más complicados de Londres. Desde asesinatos misteriosos hasta robos imposibles, Holmes utiliza su intelecto y habilidades deductivas para encontrar la verdad. La obra no solo presenta intriga y acción, sino también un análisis profundo de la psicología humana. Con un estilo narrativo envolvente, es una joya de la literatura policial." },
    { id: 9, title: "Juego de Tronos", author: "George R.R. Martin", category: "ficcion", image: "Imagenes/libro9.jpg", summary: "En el continente ficticio de Westeros, varias familias nobles luchan por el control del Trono de Hierro. La trama está llena de intriga política, traiciones y batallas épicas, mientras los personajes buscan poder y supervivencia. Martin crea un mundo complejo con personajes moralmente ambiguos y giros inesperados. Es una obra que mezcla fantasía y realismo, mostrando el costo de la ambición en un mundo donde la lealtad es efímera." },
    { id: 10, title: "El Señor de los Anillos", author: "J.R.R. Tolkien", category: "ficcion", image: "Imagenes/libro10.jpg", summary: "Frodo Bolsón, un hobbit de la Comarca, emprende un peligroso viaje para destruir el Anillo Único, un objeto con un poder inmenso que amenaza la paz de la Tierra Media. Acompañado por amigos y aliados, enfrenta a fuerzas oscuras lideradas por Sauron. La novela es un relato épico sobre la lucha entre el bien y el mal, la amistad y el sacrificio. Con un mundo detallado y personajes inolvidables, es un clásico de la literatura fantástica." },
    { id: 11, title: "La Grecia Antigua Contra La Violencia", author: "Jacqueline De Romilly", category: "historia", image: "Imagenes/libro11.jpg", summary: "En un pequeño pueblo, Santiago Nasar es asesinado por los hermanos Vicario para vengar el honor de su hermana. Lo más inquietante es que todos sabían del crimen, pero nadie hizo nada para evitarlo. La novela narra los eventos desde múltiples perspectivas, exponiendo la pasividad colectiva y las tensiones sociales. Con un estilo único, García Márquez explora temas como la culpa, el destino y la complicidad de una comunidad." },
    { id: 12, title: "La Historia Secreta Del Mundo", author: "Jonathan Black", category: "historia", image: "Imagenes/libro12.jpg", summary: "La saga de la familia Buendía en el pueblo ficticio de Macondo cuenta una historia de amor, tragedia y repetición de los errores del pasado. A través de generaciones, los Buendía enfrentan el progreso, la guerra y el aislamiento, mientras luchan contra la maldición de su linaje. La obra combina realismo mágico con simbolismo, capturando la esencia de la cultura latinoamericana y los ciclos de la vida humana." },
    { id: 13, title: "Hidalgo", author: "Eugenio Aguirre", category: "historia", image: "Imagenes/libro13.jpg", summary: "Daniel Sempere descubre un misterioso libro en el Cementerio de los Libros Olvidados que lo lleva a investigar la vida de su autor, Julián Carax. En su búsqueda, se enfrenta a secretos familiares, pasiones prohibidas y un enemigo implacable. Ambientada en una Barcelona llena de misterio, la novela entrelaza amor, traición y literatura, destacando el poder transformador de los libros en la vida de las personas." },
    { id: 14, title: "El Libro De Las Puertas", author: "Gareth Brown", category: "ficcion", image: "Imagenes/libro14.jpg", summary: "Alonso Quijano, inspirado por las novelas de caballería, se convierte en Don Quijote y emprende aventuras junto a su fiel escudero, Sancho Panza. Aunque sus acciones parecen locuras, representan ideales de justicia y bondad en un mundo pragmático. La obra es una sátira de los libros de caballería, pero también un profundo análisis de la humanidad y la lucha por los sueños frente a la realidad." },
    { id: 15, title: "Proyecto Karon", author: "Ana B. Nieto", category: "ficcion", image: "Imagenes/libro15.jpg", summary: "Un piloto varado en el desierto encuentra a un niño que dice venir de otro planeta. A través de sus historias, el Principito explora temas como el amor, la amistad y la pérdida. Con una narrativa simple pero profunda, la obra invita a reflexionar sobre las cosas importantes de la vida, a menudo olvidadas en la adultez. Es un cuento universal que trasciende generaciones." },
    { id: 16, title: "2012", author: "Brian D'Amato", category: "ficcion", image: "Imagenes/libro16.jpg", summary: "La epopeya narra el regreso de Ulises a Ítaca tras la guerra de Troya, enfrentando pruebas como el canto de las sirenas, el cíclope Polifemo y la hechicera Circe. Mientras tanto, en Ítaca, su esposa Penélope y su hijo Telémaco luchan contra los pretendientes que buscan ocupar su lugar. La historia es un homenaje a la astucia, la perseverancia y la fuerza del amor familiar, con un trasfondo mitológico fascinante." },
    { id: 17, title: "El Temor De Un Hombre Sabio", author: "Patrick Rothfuss", category: "ficcion", image: "Imagenes/libro17.jpg", summary: "El testimonio de Ana Frank, una niña judía que se esconde con su familia durante la ocupación nazi, ofrece una visión íntima de la vida en confinamiento. Sus pensamientos sobre la guerra, el amor y la esperanza destacan su valentía frente a la adversidad. La obra es un recordatorio conmovedor de los horrores del Holocausto y el poder de la resistencia humana en tiempos oscuros." },
    { id: 18, title: "La Trilogia De La Niebla", author: "Carlos Ruiz Zafon", category: "accion", image: "Imagenes/libro18.jpg", summary: "Gregor Samsa, un joven comerciante, despierta una mañana convertido en un insecto gigante, lo que desata el rechazo de su familia y su aislamiento. A través de esta transformación, Kafka reflexiona sobre la alienación, la incomunicación y el sacrificio. La novela corta es una crítica a las relaciones humanas y las presiones sociales, presentando una narrativa inquietante y profunda." },
    { id: 19, title: "El Juego De La Serpiente", author: "Javier L. Ibarz", category: "accion", image: "Imagenes/libro19.jpg", summary: "La novela sigue a Horacio Oliveira y su búsqueda de significado en París y Buenos Aires, navegando entre el amor, la filosofía y la bohemia. Con una estructura narrativa única que permite leerla en diferentes órdenes, la obra invita a cuestionar la realidad y experimentar la literatura de forma no lineal. Es un viaje existencial que mezcla humor, poesía y reflexión." },
    { id: 20, title: "La Isla De La Mujer Dormida", author: "Arturo Pérez Reverte", category: "accion", image: "Imagenes/libro20.jpg", summary: "Una extraña epidemia de ceguera se propaga rápidamente, sumiendo a la sociedad en el caos. En medio de la anarquía, un grupo de personas liderado por una mujer inmune lucha por sobrevivir. La novela explora temas como la fragilidad de la civilización, la pérdida de humanidad y el instinto de supervivencia. Es una alegoría poderosa sobre la naturaleza humana y el impacto de la deshumanización." },
    // Añadir más libros aquí hasta 20
];

// Función para renderizar libros
const renderBooks = (filter = "all", searchTerm = "") => {
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = ""; // Limpiar contenido previo

    const filteredBooks = books.filter(book => {
        const matchesCategory = filter === "all" || book.category === filter;
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredBooks.length === 0) {
        bookContainer.innerHTML = `<p class="text-center text-muted">No se encontraron libros.</p>`;
        return;
    }

    filteredBooks.forEach(book => {
        const bookCard = `
            <div class="col-md-3">
                <div class="card shadow-sm">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text text-muted">${book.author}</p>
                        <p class="badge bg-secondary">${book.category}</p>
                        <button class="btn btn-outline-primary btn-sm" onclick="showBookModal(${book.id})">Ver más</button>
                    </div>
                </div>
            </div>
        `;
        bookContainer.insertAdjacentHTML("beforeend", bookCard);
    });
};

// Función para mostrar el modal con la información del libro
const showBookModal = (bookId) => {
    const book = books.find(b => b.id === bookId);
    if (book) {
        document.getElementById("bookModalLabel").textContent = book.title;
        document.getElementById("bookDescription").textContent = book.summary;
        const modal = new bootstrap.Modal(document.getElementById("bookModal"));
        modal.show();
    }
};

// Aplicar filtros
document.getElementById("apply-filters").addEventListener("click", () => {
    const category = document.getElementById("category-filter").value;
    const searchTerm = document.getElementById("search-input").value;
    renderBooks(category, searchTerm);
});

// Renderizar libros al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderBooks();
});

// Este script permitirá que el menú aparezca al hacer clic en el botón hamburguesa
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar-nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});