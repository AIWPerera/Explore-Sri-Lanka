
/* EXPLORE SRI LANKA - HOTELS DIRECTORY */

const hotels = [
    {
        name: "Shangri-La Colombo",
        district: "Colombo",
        type: "Luxury Hotel",
        description: "A luxury city hotel overlooking the Indian Ocean in central Colombo.",
        image: "",
        location: "Shangri-La Colombo Sri Lanka",
        website: "https://www.shangri-la.com/colombo/shangrila/"
    },
    {
        name: "Cinnamon Grand Colombo",
        district: "Colombo",
        type: "Luxury Hotel",
        description: "An established upscale hotel in Colombo with restaurants and leisure facilities.",
        image: "",
        location: "Cinnamon Grand Colombo",
        website: "https://www.cinnamonhotels.com/"
    },
    {
        name: "Jetwing Blue",
        district: "Gampaha",
        type: "Beach Resort",
        description: "A beachside resort in Negombo, convenient for coastal holidays.",
        image: "",
        location: "Jetwing Blue Negombo",
        website: "https://www.jetwinghotels.com/"
    },
    {
        name: "Heritance Kandalama",
        district: "Matale",
        type: "Nature Resort",
        description: "An iconic hotel set within a dramatic natural landscape near Dambulla.",
        image: "",
        location: "Heritance Kandalama Dambulla",
        website: "https://www.heritancehotels.com/"
    },
    {
        name: "98 Acres Resort & Spa",
        district: "Badulla",
        type: "Nature Resort",
        description: "A scenic hill-country resort near Ella, surrounded by lush landscapes.",
        image: "",
        location: "98 Acres Resort Ella",
        website: "https://www.resort98acres.com/"
    },
    {
        name: "Galle Face Hotel",
        district: "Colombo",
        type: "Heritage Hotel",
        description: "A historic seafront hotel in Colombo with a long hospitality heritage.",
        image: "",
        location: "Galle Face Hotel Colombo",
        website: "https://gallefacehotel.com/"
    },
    {
        name: "Cinnamon Wild Yala",
        district: "Hambantota",
        type: "Wildlife Resort",
        description: "A nature-focused resort near Yala National Park.",
        image: "",
        location: "Cinnamon Wild Yala",
        website: "https://www.cinnamonhotels.com/"
    },
    {
        name: "Anantara Peace Haven Tangalle Resort",
        district: "Hambantota",
        type: "Beach Resort",
        description: "A coastal luxury resort near Tangalle on Sri Lanka's southern coastline.",
        image: "",
        location: "Anantara Peace Haven Tangalle Resort",
        website: "https://www.anantara.com/"
    }
];

const hotelGrid = document.getElementById("hotelGrid");
const hotelSearch = document.getElementById("hotelSearch");
const hotelDistrict = document.getElementById("hotelDistrict");
const hotelType = document.getElementById("hotelType");
const hotelReset = document.getElementById("hotelReset");
const hotelCount = document.getElementById("hotelCount");
const hotelEmpty = document.getElementById("hotelEmpty");

/* Populate dropdowns */

function addHotelOptions(select, values) {
    [...new Set(values)].sort().forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

addHotelOptions(hotelDistrict, hotels.map(hotel => hotel.district));
addHotelOptions(hotelType, hotels.map(hotel => hotel.type));

/* Render hotels */

function renderHotels() {
    const keyword = hotelSearch.value.trim().toLowerCase();
    const district = hotelDistrict.value;
    const type = hotelType.value;

    const filtered = hotels.filter(hotel => {
        const searchable = [
            hotel.name,
            hotel.district,
            hotel.type,
            hotel.description
        ].join(" ").toLowerCase();

        return searchable.includes(keyword) &&
            (district === "all" || hotel.district === district) &&
            (type === "all" || hotel.type === type);
    });

    hotelGrid.innerHTML = "";

    filtered.forEach(hotel => {
        const card = document.createElement("article");
        card.className = "hotel-card";

        const imageBox = document.createElement("div");
        imageBox.className = "hotel-image";

        if (hotel.image) {
            const img = document.createElement("img");
            img.src = hotel.image;
            img.alt = hotel.name;
            img.loading = "lazy";
            img.onerror = () => {
                imageBox.textContent = "🏨 " + hotel.name;
            };
            imageBox.appendChild(img);
        } else {
            imageBox.textContent = "🏨 " + hotel.name;
        }

        const content = document.createElement("div");
        content.className = "hotel-content";

        const badge = document.createElement("span");
        badge.className = "hotel-badge";
        badge.textContent = hotel.type;

        const title = document.createElement("h3");
        title.textContent = hotel.name;

        const location = document.createElement("p");
        location.className = "hotel-location";
        location.textContent = "📍 " + hotel.district + " District";

        const description = document.createElement("p");
        description.textContent = hotel.description;

        const links = document.createElement("div");
        links.className = "hotel-links";

        const map = document.createElement("a");
        map.href = "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(hotel.location + " Sri Lanka");
        map.target = "_blank";
        map.rel = "noopener noreferrer";
        map.textContent = "Google Maps ↗";

        const website = document.createElement("a");
        website.href = hotel.website;
        website.target = "_blank";
        website.rel = "noopener noreferrer";
        website.textContent = "Official Website ↗";

        links.append(map, website);
        content.append(badge, title, location, description, links);
        card.append(imageBox, content);
        hotelGrid.appendChild(card);
    });

    hotelCount.textContent = filtered.length + " stays found";
    hotelEmpty.hidden = filtered.length !== 0;
}

/* Events */

hotelSearch.addEventListener("input", renderHotels);
hotelDistrict.addEventListener("change", renderHotels);
hotelType.addEventListener("change", renderHotels);

hotelReset.addEventListener("click", () => {
    hotelSearch.value = "";
    hotelDistrict.value = "all";
    hotelType.value = "all";
    renderHotels();
});

renderHotels();
