
const galleryItems = [
    // BEACHES
    { title: "Mirissa Beach", location: "Mirissa", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTn1l3mHnd-4lDgoe1uWGwq8bfBdiTeB49xFujlWJOg&s=10" },
    { title: "Unawatuna Beach", location: "Galle", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbS2e-jTLP2U6nc1FPmc0DoUQsigKuA6WuVaHg-ttxvw&s=10" },
    { title: "Arugam Bay", location: "Ampara", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhS54sa9gyCKRKk88ZTC0XSXlYvkOn-rJzJWgcI-tsQ&s=10" },
    { title: "Nilaveli Beach", location: "Trincomalee", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1GTwFAkD2wcg5ExGOpC5GXe00jm-Vl2XmsKJ4UhKig&s=10" },
    { title: "Hikkaduwa Beach", location: "Hikkaduwa", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT881JWh3qtNn0meZ5Rs92kel69WyoOw8tCNu41mzO5IQ&s=10" },
    { title: "Pasikudah Beach", location: "Batticaloa", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmg8Bw0R9_9UlIVB_uFDnAHBCuPOXXtaqG0zL5AKfsA&s=10" },
    { title: "Bentota Beach", location: "Bentota", category: "beaches", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPolk0eR-BqfueSao6SVRD4OcHKfg49g5_4aWttZRHg&s=10" },

    // MOUNTAINS
    { title: "Ella Rock", location: "Ella", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqUFWTsk59PNjnjRKroONR5XLmm5Wri9yuVFY_aTFqkQ&s=10" },
    { title: "Little Adam's Peak", location: "Ella", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBPomrYyaHrLKB4yCZ4PBP20Atz52Nmk5yq-0h-ThuQ&s=10" },
    { title: "Pidurangala Rock", location: "Sigiriya", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCCwbamYNw_YQsyyF7b_QzMmmWVKZgzwPOw2nGLdkFw&s=10" },
    { title: "Horton Plains", location: "Nuwara Eliya", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAWvOZ1sZDBdkdT1SNAemoG5xENyyk-JoDI0jWw_mvHw&s=10" },
    { title: "Knuckles Mountain Range", location: "Central Highlands", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDFW2aRIkawk4dJICoCFUGcDxXczPA6XB1dvCq13Tew&s=10" },
    { title: "Adam's Peak", location: "Sri Pada", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4aUNyzqCCEzwmonw4ZPYSSZKGeKux1qtvho0uRYZ8A&s=10" },
    { title: "Lipton's Seat", location: "Haputale", category: "mountains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiygqrhFS4rGPAqtcJvnQM0L_De5aQ2XU8IALTA0f-Bg&s=10" },

    // WATERFALLS
    { title: "Diyaluma Falls", location: "Koslanda", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOf9Y8BhCYz07PdY0HlAxcHMKcuI_BpJdvgzCaPLrUw&s=10" },
    { title: "Ravana Falls", location: "Ella", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzM1A1Qb64CVNCmHKGbZ2yhIN0Gt1ts9rx6PNvzRA_kw&s=10" },
    { title: "Bambarakanda Falls", location: "Kalupahana", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIo2fTWj4EAYDNvSFaWxwl450gzdRguC_TkkcVXiWPA&s=10" },
    { title: "Dunhinda Falls", location: "Badulla", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGag-CA0fS3u0N0rolk1AmEGto5Y7VFx4CQ6vsacot3Q&s=10" },
    { title: "Devon Falls", location: "Talawakelle", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1h2jkulhudAeaCkmVdGP3Vw6wzDsyIQT-C1aJxWdbg&s=10" },
    { title: "St. Clair's Falls", location: "Talawakelle", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCi9fWues2xZmeeZ52x522bhV5h6soLpAswfdoY1Y_A&s=10" },
    { title: "Laxapana Falls", location: "Maskeliya", category: "waterfalls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFBdKODK1pD-_MmPIhxrzdQ8rr_H6pRm1GbQ2RKycdQ&s" },

    // WILDLIFE
    { title: "Yala Leopards", location: "Yala National Park", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOTlreYC9sse3m8dVEi8XiywzIQ4cu0cZHGzrsB_bCA&s=10" },
    { title: "Elephant Gathering", location: "Minneriya", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10lQh6bqkQi5g463qx63HW6m2Vcjuap9Vvq86Il0vUA&s=10" },
    { title: "Sri Lankan Elehpants", location: "Udawalawe", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6mVLnfXuiePbyFVrnYAR2ebFd3BGoTBIR7yV07WOhw&s=10" },
    { title: "Bird Watching", location: "Bundala", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaD31EUvgUifREZSZwfkbeAxVGVeVhfu-VnKOQZhYJw&s=10" },
    { title: "Blue Whales", location: "Mirissa", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReuyV8K3qCBkSkjjcGcGg1fzjm4zcWIV_QLS9XwjUlyA&s=10" },
    { title: "Sea Turtles", location: "Southern Coast", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqiXkLawn5crfxEZdTn90Kx3NAbG2UfGZyQ78U4vkYw&s=10" },
    { title: "Sloth Bears", location: "Wilpattu", category: "wildlife", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MbyOhKH2y3I2bfnWS7QMQwGGmVS3cW1-PaT24XspJg&s=10" },

    // HERITAGE
    { title: "Sigiriya Rock Fortress", location: "Sigiriya", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgV1RL1d414gm0ZvZ3OwPsCJyo9SYFfaMgTEhApefBPA&s=10" },
    { title: "Temple of the Tooth", location: "Kandy", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShll5U3CNYZTwmVNNY1400f20vHqlioI959uzFtGCZAg&s=10" },
    { title: "Galle Dutch Fort", location: "Galle", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjThibinv8cqHTzr0vO0gfzKQ3dCiulrBB_In5CejNw&s=10" },
    { title: "Ruwanwelisaya", location: "Anuradhapura", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-D_7BAahzgrN4UmJkpV_Us9olK9Wro9oHKlAsQpoYg&s=10" },
    { title: "Polonnaruwa Ruins", location: "Polonnaruwa", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnqS7_UVpDJ9jozWl1JgGOk0fMFROFgX6rhqsUCm9fA&s=10" },
    { title: "Dambulla Cave Temple", location: "Dambulla", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg92Oxi5pLMSXTj9cKCljv3lcfOX-mg2pjbQuEn3wzNA&s=10" },
    { title: "Nine Arch Bridge", location: "Ella", category: "heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2I9N5qPpG_YHu70rcHupSrVob1fOCzBjbcvk-5qsx1g&s=10" },

    // CULTURE
    { title: "Kandyan Dancing", location: "Kandy", category: "culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRGkr1wf03zPjFF0GoBOis9_-ZiS30xpf0su65WKK3A&s=10" },
    { title: "Kandy Esala Perahera", location: "Kandy", category: "culture", image: "https://ik.imagekit.io/TBR/Island%20Events/Kandy%20Esala%20Perahera%20(Festival%20of%20the%20Tooth)%20Sri%20lanka.webp" },
    { title: "Vesak Lanterns", location: "Sri Lanka", category: "culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPz1vzmaFNdlHGJK7I7bQnGZUkzo6bb4cDQAHXRzFaOA&s=10" },
    { title: "Traditional Drumming", location: "Sri Lanka", category: "culture", image: "https://i.ytimg.com/vi/vYZ-YTKezWQ/maxresdefault.jpg" },
    { title: "Sinhala & Tamil New Year", location: "Sri Lanka", category: "culture", image: "https://blog.cinnamonhotels.com/wp-content/uploads/2022/04/D3R5942-1.jpg" },
    { title: "Traditional Masks", location: "Ambalangoda", category: "culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMIsGbt_nFftLT4DgyG_JtjzvFNor49cQWKUlmCbhwg&s=10" },
    { title: "Tea Plucking", location: "Hill Country", category: "culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzI2lZ8dXIEmLg1lOr0c6W1CL8C_SAAY05j0b-dXC2g&s=10" }
];

const galleryGrid = document.getElementById("galleryGrid");
const gallerySearch = document.getElementById("gallerySearch");
const galleryCount = document.getElementById("galleryCount");
const galleryEmpty = document.getElementById("galleryEmpty");
const galleryFilters = document.querySelectorAll(".gallery-filter");

const lightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxLocation = document.getElementById("lightboxLocation");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let activeCategory = "all";
let visibleItems = [];
let currentIndex = 0;
let previousFocus = null;

function renderGallery() {
    const searchText = gallerySearch.value.trim().toLowerCase();

    visibleItems = galleryItems.filter(item => {
        const categoryMatch =
            activeCategory === "all" || item.category === activeCategory;

        const searchMatch =
            item.title.toLowerCase().includes(searchText) ||
            item.location.toLowerCase().includes(searchText);

        return categoryMatch && searchMatch;
    });

    galleryGrid.innerHTML = "";

    visibleItems.forEach((item, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "gallery-card";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        image.loading = "lazy";

        const overlay = document.createElement("div");
        overlay.className = "gallery-card-overlay";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const location = document.createElement("p");
        location.textContent = item.location;

        overlay.append(title, location);
        card.append(image, overlay);

        card.addEventListener("click", () => openLightbox(index));
        galleryGrid.appendChild(card);
    });

    galleryCount.textContent =
        `Showing ${visibleItems.length} of ${galleryItems.length} photos`;

    galleryEmpty.hidden = visibleItems.length !== 0;
}

function openLightbox(index) {
    previousFocus = document.activeElement;
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
}

function updateLightbox() {
    const item = visibleItems[currentIndex];
    if (!item) return;

    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxLocation.textContent = item.location;
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    lightboxImage.removeAttribute("src");
    if (previousFocus) previousFocus.focus();
}

function changePhoto(direction) {
    currentIndex =
        (currentIndex + direction + visibleItems.length) %
        visibleItems.length;

    updateLightbox();
}

galleryFilters.forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;

        galleryFilters.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        renderGallery();
    });
});

gallerySearch.addEventListener("input", renderGallery);

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => changePhoto(-1));
lightboxNext.addEventListener("click", () => changePhoto(1));

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
    if (lightbox.hidden) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") changePhoto(-1);
    if (event.key === "ArrowRight") changePhoto(1);

    if (event.key === "Tab") {
        const controls = [lightboxClose, lightboxPrev, lightboxNext];
        const current = controls.indexOf(document.activeElement);

        if (event.shiftKey && current <= 0) {
            event.preventDefault();
            lightboxNext.focus();
        } else if (!event.shiftKey && current === controls.length - 1) {
            event.preventDefault();
            lightboxClose.focus();
        }
    }
});

renderGallery();
