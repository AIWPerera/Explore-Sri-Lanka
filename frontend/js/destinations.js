
const searchInput = document.getElementById("destinationSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const destinationCards = document.querySelectorAll(".destination-card");
const noResults = document.getElementById("noResults");

let activeCategory = "all";

function filterDestinations() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    destinationCards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = name.includes(searchText);
        const matchesCategory =
            activeCategory === "all" || category === activeCategory;

        const shouldShow = matchesSearch && matchesCategory;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", filterDestinations);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
        activeCategory = button.dataset.filter;

        filterDestinations();
    });
});
