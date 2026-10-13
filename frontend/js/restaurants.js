
/* =========================================
   EXPLORE SRI LANKA - RESTAURANTS DIRECTORY
========================================= */

const restaurants = [
    {
        name: "Ministry of Crab",
        district: "Colombo",
        cuisine: "Seafood",
        description: "A well-known Colombo restaurant specialising in Sri Lankan crab and seafood.",
        location: "Ministry of Crab Colombo Sri Lanka",
        image: ""
    },
    {
        name: "Upali's by Nawaloka",
        district: "Colombo",
        cuisine: "Sri Lankan",
        description: "A restaurant known for traditional Sri Lankan rice and curry and local dishes.",
        location: "Upalis by Nawaloka Colombo",
        image: ""
    },
    {
        name: "Nuga Gama",
        district: "Colombo",
        cuisine: "Sri Lankan",
        description: "A village-inspired dining experience featuring traditional Sri Lankan cuisine.",
        location: "Nuga Gama Colombo",
        image: ""
    },
    {
        name: "The Gallery Café",
        district: "Colombo",
        cuisine: "International",
        description: "A stylish Colombo dining spot in a distinctive architectural setting.",
        location: "The Gallery Cafe Colombo",
        image: ""
    },
    {
        name: "Cafe Chill",
        district: "Badulla",
        cuisine: "Café",
        description: "A popular Ella café serving a variety of local and international meals.",
        location: "Cafe Chill Ella Sri Lanka",
        image: ""
    },
    {
        name: "The Empire Café",
        district: "Kandy",
        cuisine: "Café",
        description: "A café in central Kandy offering a relaxed place to eat and take a break.",
        location: "The Empire Cafe Kandy Sri Lanka",
        image: ""
    },
    {
        name: "A Minute by Tuk Tuk",
        district: "Matara",
        cuisine: "International",
        description: "A coastal dining spot in Mirissa offering meals and ocean views.",
        location: "A Minute by Tuk Tuk Mirissa",
        image: ""
    },
    {
        name: "Lucky Fort Restaurant",
        district: "Galle",
        cuisine: "Sri Lankan",
        description: "A Galle Fort restaurant associated with Sri Lankan rice and curry meals.",
        location: "Lucky Fort Restaurant Galle",
        image: ""
    }
];

const restaurantGrid = document.getElementById("restaurantGrid");
const restaurantSearch = document.getElementById("restaurantSearch");
const restaurantDistrict = document.getElementById("restaurantDistrict");
const restaurantCuisine = document.getElementById("restaurantCuisine");
const restaurantReset = document.getElementById("restaurantReset");
const restaurantCount = document.getElementById("restaurantCount");
const restaurantEmpty = document.getElementById("restaurantEmpty");

function populateRestaurantOptions(select, values) {
    [...new Set(values)].sort().forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

populateRestaurantOptions(
    restaurantDistrict,
    restaurants.map(restaurant => restaurant.district)
);

populateRestaurantOptions(
    restaurantCuisine,
    restaurants.map(restaurant => restaurant.cuisine)
);

function renderRestaurants() {
    const keyword = restaurantSearch.value.trim().toLowerCase();
    const district = restaurantDistrict.value;
    const cuisine = restaurantCuisine.value;

    const filtered = restaurants.filter(restaurant => {
        const text = [
            restaurant.name,
            restaurant.district,
            restaurant.cuisine,
            restaurant.description
        ].join(" ").toLowerCase();

        return text.includes(keyword) &&
            (district === "all" || restaurant.district === district) &&
            (cuisine === "all" || restaurant.cuisine === cuisine);
    });

    restaurantGrid.innerHTML = "";

    filtered.forEach(restaurant => {
        const card = document.createElement("article");
        card.className = "restaurant-card";

        const photo = document.createElement("div");
        photo.className = "restaurant-photo";

        if (restaurant.image) {
            const img = document.createElement("img");
            img.src = restaurant.image;
            img.alt = restaurant.name;
            img.loading = "lazy";

            img.onerror = () => {
                photo.replaceChildren(
                    document.createTextNode("🍽️ " + restaurant.name)
                );
            };

            photo.appendChild(img);
        } else {
            photo.textContent = "🍽️ " + restaurant.name;
        }

        const content = document.createElement("div");
        content.className = "restaurant-content";

        const badge = document.createElement("span");
        badge.className = "restaurant-badge";
        badge.textContent = restaurant.cuisine;

        const title = document.createElement("h3");
        title.textContent = restaurant.name;

        const location = document.createElement("p");
        location.className = "restaurant-location";
        location.textContent = "📍 " + restaurant.district + " District";

        const description = document.createElement("p");
        description.textContent = restaurant.description;

        const mapLink = document.createElement("a");
        mapLink.href =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(restaurant.location);
        mapLink.target = "_blank";
        mapLink.rel = "noopener noreferrer";
        mapLink.textContent = "Find on Google Maps ↗";

        content.append(badge, title, location, description, mapLink);
        card.append(photo, content);
        restaurantGrid.appendChild(card);
    });

    restaurantCount.textContent =
        filtered.length + " restaurants found";

    restaurantEmpty.hidden = filtered.length !== 0;
}

restaurantSearch.addEventListener("input", renderRestaurants);
restaurantDistrict.addEventListener("change", renderRestaurants);
restaurantCuisine.addEventListener("change", renderRestaurants);

restaurantReset.addEventListener("click", () => {
    restaurantSearch.value = "";
    restaurantDistrict.value = "all";
    restaurantCuisine.value = "all";
    renderRestaurants();
});

renderRestaurants();
