
/* ==========================================
   EXPLORE SRI LANKA - ACTIVITIES
========================================== */

const activities = [
    {
        name: "Surfing in Arugam Bay",
        category: "Water Sports",
        district: "Ampara",
        description: "Enjoy world-famous surfing spots along Sri Lanka's eastern coast.",
        location: "Arugam Bay Sri Lanka",
        icon: "🏄",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PFLU6XwKQBd9YBq38plN_W0snXwREdWcySl1dI00hw&s=10"
    },
    {
        name: "Surfing in Weligama",
        category: "Water Sports",
        district: "Matara",
        description: "Discover a popular surfing destination with waves suitable for many beginners.",
        location: "Weligama Sri Lanka",
        icon: "🏄",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdqN0KeS9aiXraUcGgHM827U4FTS-fiFr2rnCbr3R8Q&s=10"
    },
    {
        name: "Snorkeling at Pigeon Island",
        category: "Water Sports",
        district: "Trincomalee",
        description: "Explore colourful marine life in the waters around Pigeon Island.",
        location: "Pigeon Island National Park Sri Lanka",
        icon: "🤿",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82_MrxSpeXPa92EJqU3ob6CWeLKy7RnwioU08UEW38A&s=10"
    },
    {
        name: "Scuba Diving in Hikkaduwa",
        category: "Water Sports",
        district: "Galle",
        description: "Discover underwater marine life with a qualified diving operator.",
        location: "Hikkaduwa Sri Lanka",
        icon: "🤿",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXLmURdZ7aoa9s93jD9NhL9FcQpdNR3NgGLSfFH_0Ew&s=10"
    },
    {
        name: "Whale Watching in Mirissa",
        category: "Marine Wildlife",
        district: "Matara",
        description: "Join a responsible whale-watching excursion when seasonal conditions permit.",
        location: "Mirissa Sri Lanka",
        icon: "🐋",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLLWR_nekoC0a5BMobiRCgmp2nX5aHo1ui1HFazM7FA&s=10"
    },
    {
        name: "Dolphin Watching in Kalpitiya",
        category: "Marine Wildlife",
        district: "Puttalam",
        description: "Discover marine wildlife off the coast of Kalpitiya on a guided boat trip.",
        location: "Kalpitiya Sri Lanka",
        icon: "🐬",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGv5KcrLcS1695Jen4J_JQ8D6nWKoSgd9RB3jzgKgaaA&s=10"
    },
    {
        name: "Yala National Park Safari",
        category: "Wildlife Safari",
        district: "Hambantota",
        description: "Explore Yala's diverse wildlife habitats on a guided jeep safari.",
        location: "Yala National Park Sri Lanka",
        icon: "🐆",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FNJ1sB3YCemWpUhvRsUawBgSYSOlpHjZmE40fxucng&s=10"
    },
    {
        name: "Udawalawe Safari",
        category: "Wildlife Safari",
        district: "Ratnapura",
        description: "Visit Udawalawe National Park, especially known for wild elephants.",
        location: "Udawalawe National Park Sri Lanka",
        icon: "🐘",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0NFSUQBf6Nm8p2mJSUlShbkPRskskBzIGkiwRhek5Q&s=10"
    },
    {
        name: "Wilpattu National Park Safari",
        category: "Wildlife Safari",
        district: "Puttalam",
        description: "Discover forest landscapes, natural lakes and wildlife.",
        location: "Wilpattu National Park Sri Lanka",
        icon: "🦌",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLwOVL6aQv6CvK-pTGvIuUWmsecIXRN-4dc8Yj3eM-w&s=10"
    },
    {
        name: "Minneriya Elephant Safari",
        category: "Wildlife Safari",
        district: "Polonnaruwa",
        description: "Observe elephants in their natural habitat with responsible safari guides.",
        location: "Minneriya National Park Sri Lanka",
        icon: "🐘",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-_TehqOfDSxGCDtjbIkzMiNW_DLNDnbe10sEqp3NAA&s=10"
    },
    {
        name: "Hiking Little Adam's Peak",
        category: "Hiking & Trekking",
        district: "Badulla",
        description: "Enjoy a scenic hike with panoramic views of Ella's green hills.",
        location: "Little Adams Peak Ella Sri Lanka",
        icon: "🥾",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHkwrl1qWAja7HkBYevycrK-aAAo2Vq15Io8ZxMCNgA&s=10"
    },
    {
        name: "Climbing Adam's Peak",
        category: "Hiking & Trekking",
        district: "Ratnapura",
        description: "Experience a significant pilgrimage mountain and a challenging climb.",
        location: "Sri Pada Adams Peak Sri Lanka",
        icon: "⛰️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55poETLn98DBNDlmYYEnkmTv72MwxVB4nVY5ogEKvBA&s=10"
    },
    {
        name: "Horton Plains Hiking",
        category: "Hiking & Trekking",
        district: "Nuwara Eliya",
        description: "Walk through highland grasslands and visit the famous World's End viewpoint.",
        location: "Horton Plains National Park Sri Lanka",
        icon: "🥾",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUvAjlGDUESjrB6_pvxccWJIcFDdcsOR_o_WtqqpDdQ&s=10"
    },
    {
        name: "Knuckles Mountain Trekking",
        category: "Hiking & Trekking",
        district: "Matale",
        description: "Explore beautiful mountain landscapes and biodiversity with a local guide.",
        location: "Knuckles Mountain Range Sri Lanka",
        icon: "⛰️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncip_4k6lZBxI2Az9d3a-vPsI83_2C0AykTVMz_Q_fQ&s=10"
    },
    {
        name: "Ella Scenic Train Journey",
        category: "Scenic Experiences",
        district: "Badulla",
        description: "Experience Sri Lanka's beautiful hill-country railway scenery.",
        location: "Ella Railway Station Sri Lanka",
        icon: "🚂",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzYbRQzPA_RW9cqe6yldrRj22UH40HdC7beI6Ivvvwg&s=10"
    },
    {
        name: "Nine Arch Bridge Visit",
        category: "Scenic Experiences",
        district: "Badulla",
        description: "Admire the famous railway bridge surrounded by lush greenery.",
        location: "Nine Arch Bridge Ella Sri Lanka",
        icon: "🌉",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyw6vL_SgoSzo1-k-q9OtWj3HqoBI3vLZuAwRM0JANA&s=10"
    },
    {
        name: "Sigiriya Rock Climbing",
        category: "Cultural Experiences",
        district: "Matale",
        description: "Climb the historic Sigiriya rock fortress and enjoy remarkable views.",
        location: "Sigiriya Rock Fortress Sri Lanka",
        icon: "🏰",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ya1vkbJiTQTQE7ITkeKYirOEQ8IQRJWLkk22cwf3AQ&s=10"
    },
    {
        name: "Temple of the Tooth Visit",
        category: "Cultural Experiences",
        district: "Kandy",
        description: "Discover one of Sri Lanka's most important Buddhist heritage sites.",
        location: "Temple of the Tooth Kandy Sri Lanka",
        icon: "🏛️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7JxwlovXbF90_itJMSXHP5bHyBClJZYK1Xd-vU_g5A&s=10"
    },
    {
        name: "Galle Fort Walking Tour",
        category: "Cultural Experiences",
        district: "Galle",
        description: "Walk through the historic streets and colonial-era architecture of Galle Fort.",
        location: "Galle Fort Sri Lanka",
        icon: "🏘️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHJYmGi2zAV8QSksniU0_KU3Z7sMY9RNIRxMNAuGpkw&s=10"
    },
    {
        name: "Anuradhapura Heritage Tour",
        category: "Cultural Experiences",
        district: "Anuradhapura",
        description: "Explore ancient stupas, archaeological sites and sacred landmarks.",
        location: "Anuradhapura Sacred City Sri Lanka",
        icon: "🏛️",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9lVcsEf-e7Hl3307AKjWK7_Dpff0mUjqQjNtpbC3cw&s=10"
    },
    {
        name: "Nuwara Eliya Tea Experience",
        category: "Scenic Experiences",
        district: "Nuwara Eliya",
        description: "Learn about Ceylon tea and explore the island's beautiful tea-growing region.",
        location: "Nuwara Eliya Tea Factory Sri Lanka",
        icon: "🍃",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYAbGdKvNwkb08M_KwQf4bjKbGrRwC2aj9j9jKbX8BQ&s=10"
    },
    {
        name: "Bentota River Boat Safari",
        category: "Nature Experiences",
        district: "Galle",
        description: "Explore mangrove habitats and river scenery on a guided boat trip.",
        location: "Bentota River Sri Lanka",
        icon: "🚤",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0VSB9oCDHvb_kK3kBTfxEojoQbC88umt7i_HNdbbGw&s=10"
    },
    {
        name: "Sinharaja Rainforest Trek",
        category: "Nature Experiences",
        district: "Ratnapura",
        description: "Discover rich biodiversity and rainforest trails with a qualified guide.",
        location: "Sinharaja Forest Reserve Sri Lanka",
        icon: "🌳",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnDuS4eYlMICQwPVtpkSbunaV239j90rsOlY2Ew-3Og&s=10"
    },
    {
        name: "Ravana Falls Visit",
        category: "Nature Experiences",
        district: "Badulla",
        description: "Admire a scenic waterfall near Ella from safe designated viewing areas.",
        location: "Ravana Falls Ella Sri Lanka",
        icon: "💦",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuJQGzqgssRk8KItrPeFPjlVMQXQN9XZEZOqlV1a8pA&s=10"
    }
];

/* ELEMENTS */

const activityGrid = document.getElementById("activityGrid");
const activitySearch = document.getElementById("activitySearch");
const activityCategory = document.getElementById("activityCategory");
const activityDistrict = document.getElementById("activityDistrict");
const activityReset = document.getElementById("activityReset");
const activityCount = document.getElementById("activityCount");
const activityEmpty = document.getElementById("activityEmpty");

/* DROPDOWN OPTIONS */

function populateSelect(select, values) {
    values.sort().forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
}

populateSelect(
    activityCategory,
    [...new Set(activities.map(item => item.category))]
);

populateSelect(
    activityDistrict,
    [...new Set(activities.map(item => item.district))]
);

/* RENDER ACTIVITIES */

function renderActivities() {

    const keyword = activitySearch.value.trim().toLowerCase();
    const category = activityCategory.value;
    const district = activityDistrict.value;

    const filtered = activities.filter(activity => {

        const searchable = [
            activity.name,
            activity.description,
            activity.category,
            activity.district
        ].join(" ").toLowerCase();

        return searchable.includes(keyword) &&
            (category === "all" || activity.category === category) &&
            (district === "all" || activity.district === district);
    });

    activityGrid.replaceChildren();

    filtered.forEach(activity => {

        const card = document.createElement("article");
        card.className = "activity-card";

        const photo = document.createElement("div");
        photo.className = "activity-photo";

        if (activity.image) {
            const img = document.createElement("img");
            img.src = activity.image;
            img.alt = activity.name;
            img.loading = "lazy";

            img.onerror = () => {
                photo.textContent = activity.icon + " " + activity.name;
            };

            photo.appendChild(img);
        } else {
            photo.textContent = activity.icon + " " + activity.name;
        }

        const content = document.createElement("div");
        content.className = "activity-content";

        const badge = document.createElement("span");
        badge.className = "activity-badge";
        badge.textContent = activity.category;

        const title = document.createElement("h3");
        title.textContent = activity.name;

        const district = document.createElement("p");
        district.className = "activity-location";
        district.textContent = "📍 " + activity.district + " District";

        const description = document.createElement("p");
        description.textContent = activity.description;

        const mapLink = document.createElement("a");
        mapLink.className = "activity-map";
        mapLink.textContent = "View on Google Maps →";
        mapLink.href =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(activity.location);

        mapLink.target = "_blank";
        mapLink.rel = "noopener noreferrer";

        content.append(badge, title, district, description, mapLink);
        card.append(photo, content);
        activityGrid.appendChild(card);
    });

    activityCount.textContent =
        `Showing ${filtered.length} of ${activities.length} activities`;

    activityEmpty.hidden = filtered.length !== 0;
}

/* EVENTS */

activitySearch.addEventListener("input", renderActivities);
activityCategory.addEventListener("change", renderActivities);
activityDistrict.addEventListener("change", renderActivities);

activityReset.addEventListener("click", () => {
    activitySearch.value = "";
    activityCategory.value = "all";
    activityDistrict.value = "all";
    renderActivities();
});

renderActivities();
