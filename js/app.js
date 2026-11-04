/*
 * FUNCIONES INTERACTIVAS DEL SITIO
 * ---------------------------------------------------------
 * Este archivo conecta los datos de products.js con el HTML.
 * Acá están la búsqueda, los filtros, el ordenamiento,
 * el menú para celulares y los enlaces de WhatsApp.
 */

/* IMPORTANTE: cambiá este número por el WhatsApp comercial.
   Escribilo con código de país y área, solo números.
   Argentina suele comenzar con 549; no agregues +, espacios ni guiones. */
const WHATSAPP_NUMBER = "5492646700781";

/* Texto que aparecerá automáticamente cuando alguien consulte un producto. */
const WHATSAPP_MESSAGE = "Hola, quiero consultar por un equipo para mi negocio.";

/* Buscamos los elementos HTML que necesitamos actualizar. */
const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const resultsLabel = document.getElementById("resultsLabel");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");
const sortFilter = document.getElementById("sortFilter");
const categoryChips = document.querySelectorAll(".category-chip");

/* Guarda la categoría elegida desde los botones rápidos. */
let quickCategory = "todos";

/* Crea el enlace de WhatsApp y agrega un mensaje codificado para URL. */
function createWhatsAppLink(message) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/* Convierte un producto en el HTML de una tarjeta. */
function createProductCard(product) {
    const message = `Hola, quiero consultar por ${product.name} (modelo ${product.model}). ¿Me pasan información y opciones de pago?`;
    return `
        <article class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     onerror="this.onerror=null;this.src='https://placehold.co/800x600/f0f3ed/1e6248?text=Imagen+del+producto';">
                <span class="product-tag">${product.tag}</span>
            </div>
            <div class="product-body">
                <div class="product-meta">
                    <span class="product-brand">${product.brand}</span>
                    <span>Modelo ${product.model}</span>
                </div>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <a class="product-contact" href="${createWhatsAppLink(message)}" target="_blank" rel="noopener">
                        Consultar <span>↗</span>
                    </a>
                </div>
            </div>
        </article>
    `;
}

/* Devuelve solo los productos que cumplen con los filtros actuales. */
function getFilteredProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedBrand = brandFilter.value;

    // Primero filtramos según texto, categoría y marca.
    let filtered = products.filter((product) => {
        const searchableText = `${product.name} ${product.model} ${product.brand} ${product.category} ${product.type}`.toLowerCase();
        const matchesSearch = searchableText.includes(searchTerm);
        const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
        const matchesQuickCategory = quickCategory === "todos" || product.category === quickCategory;
        const matchesBrand = selectedBrand === "todas" || product.brand === selectedBrand;

        return matchesSearch && matchesCategory && matchesQuickCategory && matchesBrand;
    });

    // Después ordenamos el resultado según la opción elegida.
    switch (sortFilter.value) {
        case "name":
            filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));
            break;
        default:
            // En el orden recomendado, conservamos el orden del archivo products.js.
            break;
    }

    return filtered;
}

/* Actualiza las tarjetas, el contador y el mensaje de resultados. */
function renderProducts() {
    const filteredProducts = getFilteredProducts();

    // Inserta las tarjetas en el contenedor del catálogo.
    productGrid.innerHTML = filteredProducts.map(createProductCard).join("");

    // Actualiza la cantidad que se ve arriba del catálogo.
    productCount.textContent = filteredProducts.length;

    // Muestra un mensaje si ningún producto coincide con la búsqueda.
    emptyState.hidden = filteredProducts.length !== 0;
    productGrid.hidden = filteredProducts.length === 0;

    // Texto auxiliar para que la persona sepa qué está viendo.
    resultsLabel.textContent = filteredProducts.length === products.length
        ? "Todos los equipos"
        : `Resultados: ${filteredProducts.length}`;
}

/* Actualiza la categoría seleccionada visualmente en los botones rápidos. */
function setQuickCategory(category) {
    quickCategory = category;

    // Mantiene una sola pastilla con apariencia activa.
    categoryChips.forEach((chip) => {
        chip.classList.toggle("active", chip.dataset.category === category);
    });

    // Sincroniza el selector lateral con el botón elegido.
    categoryFilter.value = category;
    renderProducts();
}

/* Cada vez que se escribe, se filtra sin recargar la página. */
searchInput.addEventListener("input", renderProducts);

/* El botón de búsqueda también ejecuta el filtrado. */
document.getElementById("searchButton").addEventListener("click", renderProducts);

/* Los filtros laterales actualizan el catálogo al cambiar. */
categoryFilter.addEventListener("change", () => {
    quickCategory = "todos";
    categoryChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.category === "todos"));
    renderProducts();
});
brandFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);

/* Los botones de categorías rápidas filtran por categoría. */
categoryChips.forEach((chip) => {
    chip.addEventListener("click", () => setQuickCategory(chip.dataset.category));
});

/* Limpia todos los filtros, la búsqueda y vuelve a mostrar el catálogo completo. */
function resetAllFilters() {
    searchInput.value = "";
    categoryFilter.value = "todos";
    brandFilter.value = "todas";
    sortFilter.value = "recommended";
    setQuickCategory("todos");
    renderProducts();
}
document.getElementById("clearFilters").addEventListener("click", resetAllFilters);
document.getElementById("resetSearch").addEventListener("click", resetAllFilters);

/* Configura los botones de WhatsApp del contacto y del pie flotante. */
const defaultWhatsAppLink = createWhatsAppLink(WHATSAPP_MESSAGE);
document.getElementById("mainWhatsapp").href = defaultWhatsAppLink;
document.getElementById("floatingWhatsapp").href = defaultWhatsAppLink;

/* Cambia el año del pie de página automáticamente. */
document.getElementById("currentYear").textContent = new Date().getFullYear();

/* Abre y cierra el menú de navegación en celulares. */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
});

/* Al elegir una sección desde el menú móvil, se cierra el menú. */
mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* Primera carga: dibuja todos los productos de ejemplo. */
renderProducts();
