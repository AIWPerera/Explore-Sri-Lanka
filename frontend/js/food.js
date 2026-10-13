
/* ==========================================
   EXPLORE SRI LANKA - FOOD GUIDE
   Original Food Images + Search + Filters
========================================== */

const foods = [

    // RICE & CURRY
    {
        name: "Rice & Curry",
        category: "rice",
        description: "Steamed rice served with a variety of vegetable, fish or meat curries.",
        image: "https://media.istockphoto.com/id/541603774/photo/sri-lankan-rice-and-curry-dish.jpg?s=612x612&w=0&k=20&c=osvrG7ELjUdy8PKDSO0_SyL8GMfc1fM89et6YNnEqgs="
    },
    {
        name: "Yellow Rice",
        category: "rice",
        description: "Fragrant rice cooked with turmeric, coconut milk and spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_x9q4ecQCJQ4rYnPlqrpOSd3oukbcBV9bh-xwCAfSQ&s=10"
    },
    {
        name: "Lamprais",
        category: "rice",
        description: "A Dutch Burgher-inspired rice meal baked in a banana leaf.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMGTfXI80UZIiWvlHm3mRT3AanUlJa6RmLmrQY39GTQ&s=10"
    },
    {
        name: "Kiribath",
        category: "rice",
        description: "Traditional coconut milk rice served on special occasions.",
        image: "https://www.allceylon.lk/images/post/2018/08/image_f4667a8e6e-04011605.jpg"
    },
    {
        name: "Sri Lankan Biriyani",
        category: "rice",
        description: "Spiced rice served with chicken or other meats and accompaniments.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP0s75lNUgY_2F33VDh0LT9MMkMnFqsUbiwUrEmgllQ&s=10"
    },

    // STREET FOOD
    {
        name: "Chicken Kottu",
        category: "street",
        description: "Chopped roti stir-fried with chicken, vegetables and spices.",
        image: "https://www.loveandotherspices.com/wp-content/uploads/2012/02/kottu-roti-sri-lankan.jpg"
    },
    {
        name: "Cheese Kottu",
        category: "street",
        description: "A creamy and cheesy variation of Sri Lankan kottu roti.",
        image: "https://ordernow.lk/uploads/f0d1762b91fd823a1aa9bd0dab5c648d_jpeg_63_1689074556.jpg"
    },
    {
        name: "Vegetable Kottu",
        category: "street",
        description: "Chopped roti mixed with fresh vegetables and aromatic spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2wxFuz0aLRFdNCBGEtSwNXtsgdcVGeDeWhhkZ0BVOkGJVwxaAkLYKyla&s=10"
    },
    {
        name: "Egg Roti",
        category: "street",
        description: "Flatbread filled with egg and cooked on a hot griddle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlibcUkFQ7cldtG5-t9AMnz815MaH2B18fyv-L4NqhM7dL4RlrtMhDVk&s=10"
    },
    {
        name: "Isso Wade",
        category: "street",
        description: "Crispy lentil fritters topped with prawns.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d67qbK4YULuY1JLM55JF0VCV2WvSwhF9LKvlZuY3NE1-Np6cFzDI0k4&s=10"
    },
    {
        name: "Parippu Wade",
        category: "street",
        description: "Crunchy lentil fritters seasoned with onions and spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvACFuwkmqdo8HYuyaDTcLDVsjQAd6m0dF5oCHsMKNg&s=10"
    },

    // BREAKFAST
    {
        name: "Egg Hoppers",
        category: "breakfast",
        description: "Bowl-shaped coconut milk pancakes with an egg in the centre.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtgsatElT5zPcPuqWth1_XWbVeF4w_peoX2e5MRB_cGBCyaKYzu3Slxyn&s=10"
    },
    {
        name: "Plain Hoppers",
        category: "breakfast",
        description: "Thin, crispy-edged pancakes made with fermented rice batter.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmffLwOmhn3NtkCLO2b3yc4a3drgum1YuLPZXMukeTRIF1K0gNNFFOe4&s=10"
    },
    {
        name: "String Hoppers",
        category: "breakfast",
        description: "Steamed rice flour noodles served with curry and sambol.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgTHHsUGhKF50euriEaZQSqMHgSS-KZikVE_MawctoQ3P5iWOMHcvnDeU&s=10"
    },
    {
        name: "Pittu",
        category: "breakfast",
        description: "Steamed cylinders of rice flour and coconut.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aolNV2t2FtT-4r97zZmc66QNI2MUzrWFqt3ANvuZhsmgAPQfti9v2I4&s=10"
    },
    {
        name: "Pol Roti",
        category: "breakfast",
        description: "Traditional coconut flatbread served with spicy accompaniments.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOxF336GLyW9QMj4okODPuaD0GW1_2xnoJGss2Gfv6Q&s=10"
    },
    {
        name: "Pol Sambol",
        category: "breakfast",
        description: "A spicy coconut relish made with chilli, lime and onion.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4WKSa9QIGlmHczeZTLHxnWCi7yM0Y15wtwHtd9_Fqw&s=10"
    },

    // SEAFOOD
    {
        name: "Fish Ambul Thiyal",
        category: "seafood",
        description: "Traditional sour and spicy dry fish curry.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9e18LeKGFCpB3bFHO89dh4CpQ3RXq4erCtk7waDGLAfizYgzxSCij_LQ&s=10"
    },
    {
        name: "Prawn Curry",
        category: "seafood",
        description: "Prawns simmered in a fragrant coconut milk curry.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVisczH6vAoSQ3SeJxfgG-csHMTYuPnbxe_KSh0LMgBg&s=10"
    },
    {
        name: "Crab Curry",
        category: "seafood",
        description: "Fresh crab cooked with rich Sri Lankan spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVhu6M28GPJUHCC1RQMFWP_hlNEJPZIESk8Z_esAw-2T2-uvsXkj55Ps&s=10"
    },
    {
        name: "Cuttlefish Curry",
        category: "seafood",
        description: "Tender cuttlefish prepared in a spicy curry sauce.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7hRdU4GjAi0Zh4B3bX0wwFIc4HqwiQ1xIecp-wN8cQ&s=10"
    },
    {
        name: "Fried Fish",
        category: "seafood",
        description: "Fish marinated with spices and fried until golden.",
        image: "https://www.shutterstock.com/image-photo/asian-recipe-homemade-grilled-fish-260nw-1116124928.jpg"
    },

    // SWEETS
    {
        name: "Kavum",
        category: "sweets",
        description: "Traditional deep-fried sweet made with rice flour and treacle.",
        image: "https://i.pinimg.com/736x/78/9f/00/789f00725c456ba30d229cb3fd3234d9.jpg"
    },
    {
        name: "Kokis",
        category: "sweets",
        description: "Crispy decorative sweets often prepared for New Year.",
        image: "https://static-01.daraz.lk/p/aab4f1a8ac0aead44d7d5814bd76a1f9.png"
    },
    {
        name: "Aluwa",
        category: "sweets",
        description: "A traditional sweet made with roasted rice flour and syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNzVMQABGrczOro6O4DVtgrbcUOOdh2RAgOOpDDgXJFxw2Pd2uzygK5o&s=10"
    },
    {
        name: "Watalappam",
        category: "sweets",
        description: "A rich coconut custard flavoured with jaggery and spices.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NgdiLBmnY9CmtHbALTXKVbv2__mfcs4UjGglQ6l9Ng&s=10"
    },
    {
        name: "Aasmi",
        category: "sweets",
        description: "A delicate, crispy traditional sweet topped with sugar syrup.",
        image: "https://t4.ftcdn.net/jpg/17/56/85/53/360_F_1756855358_D4y7yTmBnPSRCc23rrg7Cljogyld2eNV.jpg"
    },
    {
        name: "Dodol",
        category: "sweets",
        description: "A dense sweet made with coconut milk, jaggery and rice flour.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmohwkqTN6RJa9AB_0X1ToECUDo8hxG3S30agXGq6-pA&s=10"
    },
    {
        name: "Kiri Toffee",
        category: "sweets",
        description: "A sweet milk-based confection popular across Sri Lanka.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcapZX-SlyBdeMAzJI5qVnJG_eVo--ew5xegJgRwLBpal29sd5SYa0Jcfj&s=10"
    },

    // DRINKS & SNACKS
    {
        name: "Ceylon Tea",
        category: "drinks",
        description: "World-famous Sri Lankan tea grown in the island's highlands.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SRW3u5mOpahHG-GG8k0IXXsici7-j7_485ibz7oF_ekHBAkWrD5hRbw&s=10"
    },
    {
        name: "King Coconut",
        category: "drinks",
        description: "Refreshing natural coconut water served fresh from the fruit.",
        image: "https://www.miditer.com/wp-content/uploads/2024/09/A-Guide-to-King-Coconut1-1200x800-3.jpg"
    },
    {
        name: "Faluda",
        category: "drinks",
        description: "A colourful sweet drink with milk, syrup and jelly.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8JHT08noT6d35MZdR7vZHUYCwWFCJBl5f50FmrjmQrrVxOPuYURYW2t5&s=10"
    },
    {
        name: "Wood Apple Juice",
        category: "drinks",
        description: "A tangy local fruit drink often mixed with sugar and water.",
        image: "https://www.elanka.com.au/wp-content/uploads/2024/08/Delicious-Sri-Lankan-wood-apple-juice-recipe-By-Malsha-eLanka.jpg"
    },
    {
        name: "Achcharu",
        category: "drinks",
        description: "Spicy, sweet and sour pickled fruits enjoyed as a snack.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyNbfpIwKuuVChtEqOsr7PHccnhJZ2ioSMi0-hv-1EaizLLRi97h_L0vB&s=10"
    },
    {
        name: "Ulundu Wade",
        category: "drinks",
        description: "Crispy savoury fritters made from black gram.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLv3bhr1-4mnu-frWlXIVZXgnmcXnK3s2nnau0UhbDMy_ip8HmxNwUFMg&s=10"
    }
];

/* ==========================================
   ELEMENTS
========================================== */

const foodGrid = document.getElementById("foodGrid");
const foodSearch = document.getElementById("foodSearch");
const foodCategory = document.getElementById("foodCategory");
const foodReset = document.getElementById("foodReset");
const foodCount = document.getElementById("foodCount");
const foodEmpty = document.getElementById("foodEmpty");

/* CATEGORY NAMES */

const categoryNames = {
    rice: "Rice & Curry",
    street: "Street Food",
    breakfast: "Traditional Breakfast",
    seafood: "Seafood",
    sweets: "Sweets & Desserts",
    drinks: "Drinks & Snacks"
};

/* POPULATE CATEGORY DROPDOWN */

Object.entries(categoryNames).forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    foodCategory.appendChild(option);
});

/* RENDER FOOD CARDS */

function renderFoods() {

    const keyword = foodSearch.value.trim().toLowerCase();
    const selectedCategory = foodCategory.value;

    const filtered = foods.filter(food => {

        const searchable = [
            food.name,
            food.description,
            categoryNames[food.category]
        ].join(" ").toLowerCase();

        const matchesSearch = searchable.includes(keyword);

        const matchesCategory =
            selectedCategory === "all" ||
            food.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    foodGrid.innerHTML = "";

    filtered.forEach(food => {

        const card = document.createElement("article");
        card.className = "food-card";

        const photo = document.createElement("div");
        photo.className = "food-photo";

        const image = document.createElement("img");
        image.src = food.image;
        image.alt = food.name;
        image.loading = "lazy";

        image.onerror = function () {
            photo.replaceChildren(
                document.createTextNode("🍛 " + food.name)
            );
        };

        photo.appendChild(image);

        const content = document.createElement("div");
        content.className = "food-content";

        const category = document.createElement("span");
        category.className = "food-badge";
        category.textContent =
            categoryNames[food.category] || food.category;

        const title = document.createElement("h3");
        title.textContent = food.name;

        const description = document.createElement("p");
        description.textContent = food.description;

        content.append(category, title, description);

        card.append(photo, content);

        foodGrid.appendChild(card);
    });

    foodCount.textContent =
        `Showing ${filtered.length} of ${foods.length} foods`;

    foodEmpty.hidden = filtered.length !== 0;
}

/* SEARCH */

foodSearch.addEventListener("input", renderFoods);

/* CATEGORY FILTER */

foodCategory.addEventListener("change", renderFoods);

/* RESET FILTERS */

foodReset.addEventListener("click", function () {
    foodSearch.value = "";
    foodCategory.value = "all";
    renderFoods();
});

/* INITIAL DISPLAY */

renderFoods();
