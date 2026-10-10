
const destinations = {
    sigiriya: {
        name: "Sigiriya Rock Fortress",
        location: "Sigiriya, Central Province",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak3SGTJ-QHvnAZxIzgpxM38rJ9kq1AeqWWb2b4A1HPj_b3HsKVldBhXKo&s=10",
        description: "Sigiriya is one of Sri Lanka's most famous historical landmarks. This ancient rock fortress is known for its impressive architecture, beautiful frescoes, landscaped gardens and breathtaking views.",
        bestTime: "January to April",
        duration: "Half Day",
        highlights: [
            {
                title: "Lion Rock",
                description: "Climb the ancient rock fortress and enjoy panoramic views."
            },
            {
                title: "Water Gardens",
                description: "Explore the beautifully designed royal gardens."
            },
            {
                title: "Ancient Frescoes",
                description: "Discover the historic paintings of Sigiriya."
            }
        ]
    },

    ella: {
        name: "Ella",
        location: "Badulla District, Uva Province",
        image: "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg",
        description: "Ella is a beautiful mountain town surrounded by tea plantations, waterfalls and green hills. It is popular for hiking, scenic train journeys and peaceful natural landscapes.",
        bestTime: "January to March",
        duration: "2–3 Days",
        highlights: [
            {
                title: "Nine Arch Bridge",
                description: "Visit the famous railway bridge surrounded by greenery."
            },
            {
                title: "Little Adam's Peak",
                description: "Enjoy a scenic hike with beautiful mountain views."
            },
            {
                title: "Ravana Falls",
                description: "Explore one of the region's popular waterfalls."
            }
        ]
    },

    galle: {
        name: "Galle Fort",
        location: "Galle, Southern Province",
        image: "https://d2r2v0jxjsbm0p.cloudfront.net/2019/03/Galle-fort-02-1.jpg",
        description: "Galle Fort is a historic coastal fortress famous for its colonial architecture, charming streets, museums and ocean views.",
        bestTime: "December to April",
        duration: "1 Day",
        highlights: [
            {
                title: "Galle Lighthouse",
                description: "Visit the iconic lighthouse overlooking the Indian Ocean."
            },
            {
                title: "Fort Ramparts",
                description: "Walk along the historic walls and enjoy coastal scenery."
            },
            {
                title: "Old Town",
                description: "Explore historic streets, shops and architecture."
            }
        ]
    },

    "nuwara-eliya": {
        name: "Nuwara Eliya",
        location: "Nuwara Eliya, Central Province",
        image: "https://cdn.audleytravel.com/3601/2573/79/15979547-female-worker-at-tea-plantation-nuwara-eliya.jpg",
        description: "Nuwara Eliya is a charming hill-country destination known for its cool climate, tea estates, beautiful gardens and scenic landscapes.",
        bestTime: "February to April",
        duration: "2 Days",
        highlights: [
            {
                title: "Gregory Lake",
                description: "Relax beside the beautiful lake."
            },
            {
                title: "Tea Plantations",
                description: "Discover Sri Lanka's famous tea-growing region."
            },
            {
                title: "Hakgala Gardens",
                description: "Explore colorful flowers and peaceful gardens."
            }
        ]
    },

    mirissa: {
        name: "Mirissa",
        location: "Mirissa, Southern Province",
        image: "https://thirdeyetraveller.com/wp-content/uploads/COCONUTHILL-7-of-12-2-scaled-scaled.jpg",
        description: "Mirissa is a tropical beach destination famous for golden sands, palm trees, ocean views and relaxing coastal experiences.",
        bestTime: "November to April",
        duration: "2 Days",
        highlights: [
            {
                title: "Mirissa Beach",
                description: "Relax on the beautiful sandy coastline."
            },
            {
                title: "Coconut Tree Hill",
                description: "Enjoy panoramic views from a palm-covered headland."
            },
            {
                title: "Whale Watching",
                description: "Explore seasonal marine wildlife experiences."
            }
        ]
    },

    kandy: {
        name: "Kandy",
        location: "Kandy, Central Province",
        image: "https://cdn.tatlerasia.com/tatlerasia/i/2025/01/22093254-yashowdays-1707021173-3295054881364627685-63061201054_cover_1280x1600.jpg",
        description: "Kandy is a cultural city surrounded by green hills. It is famous for the Temple of the Sacred Tooth Relic, historic traditions and scenic lake.",
        bestTime: "January to April",
        duration: "1–2 Days",
        highlights: [
            {
                title: "Temple of the Tooth",
                description: "Visit one of Sri Lanka's most important cultural landmarks."
            },
            {
                title: "Kandy Lake",
                description: "Enjoy a peaceful walk beside the lake."
            },
            {
                title: "Royal Botanical Gardens",
                description: "Explore the famous gardens in nearby Peradeniya."
            }
        ]
    }
};

// Read destination ID from URL
const params = new URLSearchParams(window.location.search);
const destinationId = params.get("id");
const destination = destinations[destinationId];

if (destination) {
    document.title = destination.name + " | Explore Sri Lanka";

    document.getElementById("destinationTitle").textContent = destination.name;
    document.getElementById("destinationHeading").textContent = destination.name;
    document.getElementById("destinationLocation").textContent = destination.location;
    document.getElementById("destinationDescription").textContent = destination.description;

    const destinationImage = document.getElementById("destinationImage");
    destinationImage.src = destination.image;
    destinationImage.alt = destination.name;

    document.getElementById("detailsHero").style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${destination.image}")`;

    document.getElementById("bestTime").textContent = destination.bestTime;
    document.getElementById("duration").textContent = destination.duration;
    document.getElementById("travelLocation").textContent = destination.location;

    const highlightsGrid = document.getElementById("highlightsGrid");

    highlightsGrid.innerHTML = "";

    destination.highlights.forEach(highlight => {
        const card = document.createElement("div");
        card.className = "highlight-card";

        const heading = document.createElement("h3");
        heading.textContent = highlight.title;

        const paragraph = document.createElement("p");
        paragraph.textContent = highlight.description;

        card.appendChild(heading);
        card.appendChild(paragraph);
        highlightsGrid.appendChild(card);
    });

} else {
    document.getElementById("destinationTitle").textContent = "Destination Not Found";
    document.getElementById("destinationHeading").textContent = "Destination Not Found";
    document.getElementById("destinationDescription").textContent =
        "Sorry, this destination is not available. Please return to the destinations page.";

    document.querySelector(".details-highlights").hidden = true;
    document.querySelector(".travel-info").hidden = true;
    document.querySelector(".details-image").hidden = true;
}
