
/* ===================================
   EXPLORE SRI LANKA - HOME SEARCH
=================================== */

const homeSearchForm = document.getElementById("homeSearchForm");
const homeSearchInput = document.getElementById("homeSearch");
const searchFeedback = document.getElementById("searchFeedback");

if (homeSearchForm && homeSearchInput) {

    homeSearchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const searchTerm = homeSearchInput.value
            .trim()
            .toLowerCase();

        if (!searchTerm) {
            searchFeedback.textContent =
                "Please enter a destination name.";
            return;
        }

        const cards = document.querySelectorAll(".destination-card");
        let matchingCard = null;

        cards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            if (!matchingCard && cardText.includes(searchTerm)) {
                matchingCard = card;
            }
        });

        if (matchingCard) {
            searchFeedback.textContent =
                "Destination found! Scroll down to explore.";

            matchingCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            matchingCard.classList.add("search-highlight");

            setTimeout(function () {
                matchingCard.classList.remove("search-highlight");
            }, 2500);

        } else {
            searchFeedback.innerHTML = "";

            const message = document.createElement("span");
            message.textContent =
                "Not on the Home Page. Try our full Destinations Page. ";

            const link = document.createElement("a");
            link.href = "pages/destinations.html";
            link.textContent = "View destinations →";

            searchFeedback.appendChild(message);
            searchFeedback.appendChild(link);
        }
    });
}
