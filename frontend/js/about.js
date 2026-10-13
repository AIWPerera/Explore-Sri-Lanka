
/* ==========================================
   EXPLORE SRI LANKA - ABOUT PAGE
   Dropdowns, Districts, Search and Images
========================================== */

// ==========================================
// 1. PROVINCES AND DISTRICTS
// ==========================================

const provinces = [
    {
        name: "Western Province",
        districts: ["Colombo", "Gampaha", "Kalutara"]
    },
    {
        name: "Central Province",
        districts: ["Kandy", "Matale", "Nuwara Eliya"]
    },
    {
        name: "Southern Province",
        districts: ["Galle", "Matara", "Hambantota"]
    },
    {
        name: "Northern Province",
        districts: [
            "Jaffna",
            "Kilinochchi",
            "Mannar",
            "Mullaitivu",
            "Vavuniya"
        ]
    },
    {
        name: "Eastern Province",
        districts: ["Trincomalee", "Batticaloa", "Ampara"]
    },
    {
        name: "North Western Province",
        districts: ["Kurunegala", "Puttalam"]
    },
    {
        name: "North Central Province",
        districts: ["Anuradhapura", "Polonnaruwa"]
    },
    {
        name: "Uva Province",
        districts: ["Badulla", "Monaragala"]
    },
    {
        name: "Sabaragamuwa Province",
        districts: ["Ratnapura", "Kegalle"]
    }
];

// ==========================================
// 2. DISTRICT INFORMATION
// ==========================================

const districts = {
    Colombo: {
        geography: "A coastal urban district with wetlands, rivers and densely populated areas.",
        history: "Colombo developed into an important trading port and later became a major administrative and commercial centre.",
        economy: "Banking, trade, technology, logistics, tourism and professional services are major economic activities.",
        tourism: "Popular attractions include Galle Face Green, Independence Square, Colombo National Museum and Pettah Market."
    },

    Gampaha: {
        geography: "A western lowland district containing lagoons, beaches, wetlands and agricultural areas.",
        history: "The district includes historic settlements and important religious landmarks such as Kelaniya Raja Maha Vihara.",
        economy: "Manufacturing, fisheries, agriculture, transport, trade and airport-related services support the economy.",
        tourism: "Negombo Beach, Negombo Lagoon, Muthurajawela Wetland and Kelaniya Temple are notable attractions."
    },

    Kalutara: {
        geography: "A southwestern coastal district with beaches, rivers, forests and fertile inland areas.",
        history: "Kalutara has a long history of coastal trade, religious traditions and colonial influence.",
        economy: "Rubber cultivation, agriculture, tourism, fisheries and commerce are important industries.",
        tourism: "Kalutara Bodhiya, Beruwala, Bentota and the Bentota River attract visitors."
    },

    Kandy: {
        geography: "A central highland district surrounded by mountains, valleys and green landscapes.",
        history: "Kandy was the capital of the last independent Sinhalese kingdom before British rule.",
        economy: "Tourism, education, agriculture, tea-related industries and services support the region.",
        tourism: "The Temple of the Sacred Tooth Relic, Kandy Lake and Peradeniya Botanical Gardens are major attractions."
    },

    Matale: {
        geography: "The district includes mountain ranges, forests, agricultural valleys and dry-zone plains.",
        history: "Matale contains important historical sites associated with Sri Lanka's ancient kingdoms.",
        economy: "Agriculture, spices, tourism, trade and small industries contribute to local livelihoods.",
        tourism: "Sigiriya, Dambulla Cave Temple and spice gardens are popular attractions."
    },

    "Nuwara Eliya": {
        geography: "A mountainous district with cool temperatures, waterfalls, grasslands and tea estates.",
        history: "The district developed as an important hill-country centre during the colonial period.",
        economy: "Tea cultivation, vegetable farming, tourism and hospitality are important industries.",
        tourism: "Horton Plains, Gregory Lake, Hakgala Botanical Garden and tea plantations attract visitors."
    },

    Galle: {
        geography: "A southern coastal district with beaches, rivers, reefs and tropical vegetation.",
        history: "Galle was an important maritime trading centre influenced by Portuguese, Dutch and British rule.",
        economy: "Tourism, fisheries, trade, agriculture and local crafts contribute to the economy.",
        tourism: "Galle Fort, Unawatuna, Hikkaduwa and coastal heritage sites are major attractions."
    },

    Matara: {
        geography: "A southern district with coastal plains, river valleys and inland hills.",
        history: "Matara has a history connected with southern kingdoms, coastal settlements and colonial trade.",
        economy: "Agriculture, fisheries, education, tourism and services support local communities.",
        tourism: "Dondra Head, Polhena Beach, Matara Fort and coastal temples are well-known attractions."
    },

    Hambantota: {
        geography: "A southeastern dry-zone district with forests, lagoons, grasslands and coastal plains.",
        history: "The region has a long history of agricultural settlements and maritime connections.",
        economy: "Port activities, agriculture, salt production, tourism and fisheries are important.",
        tourism: "Bundala National Park, Tissamaharama and nearby wildlife reserves attract travellers."
    },

    Jaffna: {
        geography: "A northern peninsula with limestone terrain, lagoons, islands and coastal landscapes.",
        history: "Jaffna has a rich Tamil cultural heritage and a history associated with the Jaffna Kingdom.",
        economy: "Agriculture, fisheries, education, commerce and small enterprises support the district.",
        tourism: "Nallur Kandaswamy Kovil, Jaffna Fort, Casuarina Beach and nearby islands are attractions."
    },

    Kilinochchi: {
        geography: "A northern lowland district containing reservoirs, agricultural plains and wetlands.",
        history: "Kilinochchi has experienced major social and economic changes during Sri Lanka's modern history.",
        economy: "Paddy cultivation, fisheries, agriculture and local trade are important activities.",
        tourism: "Iranamadu Tank, rural landscapes and natural wetlands are notable places."
    },

    Mannar: {
        geography: "A northwestern coastal district with islands, lagoons, sandy plains and bird habitats.",
        history: "Mannar has a long maritime trading history and cultural links across the Indian Ocean.",
        economy: "Fishing, agriculture, trade and renewable energy contribute to local development.",
        tourism: "Mannar Fort, the baobab tree and the Adam's Bridge area are notable attractions."
    },

    Mullaitivu: {
        geography: "A northern coastal district with forests, lagoons, reservoirs and beaches.",
        history: "The district has a history of rural communities and was significantly affected by the civil conflict.",
        economy: "Fishing, agriculture, local services and small businesses support livelihoods.",
        tourism: "Coastal landscapes, Nayaru Lagoon and inland natural areas are attractions."
    },

    Vavuniya: {
        geography: "A northern inland district with dry-zone plains, forests and irrigation reservoirs.",
        history: "Vavuniya has served as an important transport and trading connection between regions.",
        economy: "Agriculture, trade, transport and services are important activities.",
        tourism: "Local temples, reservoirs and rural landscapes reflect the district's heritage."
    },

    Trincomalee: {
        geography: "An eastern coastal district famous for its natural harbour and marine environments.",
        history: "Trincomalee has been strategically important in maritime trade and naval history.",
        economy: "Harbour activities, tourism, fisheries and commerce contribute to the economy.",
        tourism: "Koneswaram Temple, Nilaveli Beach, Uppuveli and Pigeon Island are popular attractions."
    },

    Batticaloa: {
        geography: "An eastern district characterised by lagoons, beaches and coastal plains.",
        history: "Batticaloa has a rich cultural history influenced by regional communities and maritime trade.",
        economy: "Fisheries, agriculture, education, tourism and local commerce support livelihoods.",
        tourism: "Batticaloa Lagoon, Kallady Bridge and Pasikudah Beach are major attractions."
    },

    Ampara: {
        geography: "A large eastern district with dry-zone forests, agricultural plains and coastal areas.",
        history: "Ampara includes settlements and archaeological locations associated with ancient Sri Lankan history.",
        economy: "Rice farming, fisheries, tourism and agriculture are important industries.",
        tourism: "Arugam Bay, Gal Oya National Park and Lahugala are notable destinations."
    },

    Kurunegala: {
        geography: "A northwestern inland district with rocky hills, reservoirs and agricultural plains.",
        history: "Kurunegala was an important medieval royal capital.",
        economy: "Coconut cultivation, agriculture, manufacturing and trade support the district.",
        tourism: "Ethagala, Yapahuwa and Ridi Viharaya are important attractions."
    },

    Puttalam: {
        geography: "A coastal district with lagoons, mangroves, dunes and dry-zone forests.",
        history: "Puttalam has a history connected with fishing, coastal trade and diverse communities.",
        economy: "Fisheries, salt production, coconut cultivation and tourism are major activities.",
        tourism: "Kalpitiya, Puttalam Lagoon and nearby Wilpattu National Park are popular."
    },

    Anuradhapura: {
        geography: "A dry-zone district with forests, reservoirs and extensive agricultural lands.",
        history: "Anuradhapura was one of Sri Lanka's greatest ancient capitals and a major Buddhist centre.",
        economy: "Agriculture, pilgrimage tourism, commerce and services support the region.",
        tourism: "Sri Maha Bodhi, Ruwanwelisaya, Jetavanaramaya and ancient reservoirs attract visitors."
    },

    Polonnaruwa: {
        geography: "A dry-zone district with reservoirs, forests and cultivated plains.",
        history: "Polonnaruwa became an important royal capital and is famous for ancient architecture.",
        economy: "Rice cultivation, inland fisheries, tourism and agriculture are important.",
        tourism: "The ancient city, Gal Vihara and Parakrama Samudra are major attractions."
    },

    Badulla: {
        geography: "A highland district with mountains, waterfalls, valleys and tea plantations.",
        history: "Badulla has a long history of highland communities, agriculture and cultural traditions.",
        economy: "Tea, vegetable farming, tourism and services support local livelihoods.",
        tourism: "Ella, Nine Arch Bridge, Dunhinda Falls and Little Adam's Peak are popular."
    },

    Monaragala: {
        geography: "A southeastern district with dry forests, plains, hills and agricultural areas.",
        history: "The region contains ancient religious and archaeological sites.",
        economy: "Agriculture, trade, tourism and local services are important.",
        tourism: "Budduruwagala, Kumana approaches and natural landscapes attract visitors."
    },

    Ratnapura: {
        geography: "A wet-zone district with rivers, rainforests and green foothills.",
        history: "Ratnapura has long been recognised for its gemstone industry.",
        economy: "Gem mining, rubber cultivation, tea, agriculture and trade are important.",
        tourism: "Gem markets, Adam's Peak routes and Sinharaja Forest approaches are attractions."
    },

    Kegalle: {
        geography: "A green inland district with hills, rivers, forests and plantations.",
        history: "Kegalle contains historic temples and settlements connected with central Sri Lankan history.",
        economy: "Rubber cultivation, agriculture, tourism and local industries support the district.",
        tourism: "Pinnawala, Kitulgala and historic religious sites are notable attractions."
    }
};

// ==========================================
// 3. OTHER ABOUT PAGE TOPICS
// ==========================================

const topics = {
    "Geography & Landforms": [
        {
            title: "Mountains & Highlands",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1QRqxJNsipnk4tqM9opFy9KI8MM00ucixb6KxBxsDA&s=10",
            paragraphs: [
                "Sri Lanka's Central Highlands contain mountains, valleys, tea plantations and cloud forests. Pidurutalagala is the country's highest mountain, rising approximately 2,524 metres above sea level.",
                "These highlands are important for biodiversity, water resources, agriculture and tourism. Nuwara Eliya, Ella and Horton Plains are among the best-known highland destinations."
            ]
        },
        {
            title: "Rivers & Waterfalls",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhA1T5XXDmvwR2ivflsIKMlQTrkzC0ckb_ojcmuUbaA&s=10",
            paragraphs: [
                "Sri Lanka has many rivers originating in its central mountains. The Mahaweli Ganga is the country's longest river and supports irrigation, hydroelectric power and agriculture.",
                "Bambarakanda, Diyaluma, Dunhinda and Ravana Falls are famous waterfalls. Their natural beauty attracts visitors from across the world."
            ]
        },
        {
            title: "Climate & Monsoons",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVbWzkQZ04MRjMgnXiXT0v1N6Hxl2GXbGRDaURdasXw&s=10",
            paragraphs: [
                "Sri Lanka experiences a tropical climate with warm coastal regions and cooler mountain areas. Rainfall patterns vary according to location and elevation.",
                "The southwest and northeast monsoons influence rainfall in different parts of the country. These seasonal patterns affect agriculture, water resources and tourism."
            ]
        },
        {
            title: "Forests & Coastal Plains",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLsgot8XOadhunDRBeJWiOH7t1cuLsYnU47L_8AMIFA&s=10",
            paragraphs: [
                "Sri Lanka contains tropical rainforests, dry-zone forests, mangroves, wetlands and coastal plains. These environments support a remarkable variety of wildlife.",
                "Sinharaja Forest Reserve is internationally recognised for biodiversity and endemic species. Coastal ecosystems also support fisheries, tourism and marine conservation."
            ]
        }
    ],

    "Population & Society": [
        {
            title: "Population",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6d4V6IrVdhYjBcr6vbg-cqle5Zqr0urTGPEMwuY7-LQ&s=10",
            paragraphs: [
                "Sri Lanka recorded a population of approximately 21.8 million in the 2024 population census. Population density varies significantly between urban and rural areas.",
                "The Western Province contains major urban settlements, while other regions include agricultural communities, coastal towns and highland settlements."
            ]
        },
        {
            title: "Languages & Communities",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFeT2po92ZCt8Hb3uxKneWmjtADz7_67mZWbaXn50pw&s=10",
            paragraphs: [
                "Sri Lanka is home to Sinhalese, Tamil, Muslim, Burgher, Malay and other communities, each contributing to the island's social and cultural diversity.",
                "Sinhala and Tamil are official languages, while English is used as a link language. Different communities preserve their traditions through literature, music, food and festivals."
            ]
        },
        {
            title: "Religions & Festivals",
            image: "https://screenshots.scribd.com/Scribd/252_100_85/141/518835368/1.jpeg",
            paragraphs: [
                "Buddhism, Hinduism, Islam and Christianity are among the major religions practised in Sri Lanka. Religious buildings are important parts of the country's heritage.",
                "Vesak, Sinhala and Tamil New Year, Deepavali, Eid and Christmas are celebrated by communities across the island."
            ]
        }
    ],

    "Colombo & Major Cities": [
        {
            title: "Colombo",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4Ht8AghMgWT8fpRLw72cdQYpvi9qzds3KseG2SbHPQ&s=10",
            paragraphs: [
                "Colombo is Sri Lanka's principal commercial centre. The city contains major businesses, financial institutions, transport connections, shopping areas and cultural attractions.",
                "Galle Face Green, Independence Square, Pettah Market, Colombo National Museum and the Lotus Tower are well-known landmarks."
            ]
        },
        {
            title: "Kandy",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPyEwjiST0VEnE8kWuSz9FlASZbvRdK3oiKID0kgG0w&s=10",
            paragraphs: [
                "Kandy is a historic city in Sri Lanka's Central Province. It served as the capital of the last independent Sinhalese kingdom.",
                "The Temple of the Sacred Tooth Relic, Kandy Lake and the Esala Perahera make Kandy one of the country's most important cultural destinations."
            ]
        },
        {
            title: "Galle",
            image: "https://besttimetovisitsrilanka.com/wp-content/uploads/2021/04/Galle-Fort-in-Sri-Lanka-1.jpg",
            paragraphs: [
                "Galle is a historic coastal city famous for maritime trade and colonial architecture.",
                "The UNESCO-listed Galle Fort is a major tourist attraction, with historic streets, museums, shops and beautiful ocean views."
            ]
        },
        {
            title: "Jaffna",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aybA8b-tcVLGdDNVkIzxgYpQE1SxcRbCupeqEpBNKA&s=10",
            paragraphs: [
                "Jaffna is a major cultural and commercial centre in northern Sri Lanka. The city is known for its Tamil heritage, traditional cuisine and religious landmarks.",
                "Nallur Kandaswamy Kovil, Jaffna Fort and nearby islands attract visitors interested in history and culture."
            ]
        }
    ],

    "Government & Administration": [
        {
            title: "Government Structure",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFfk0xLNPfrztBHunPutNPk5KLvs-iRCZBjAk-T2eHg&s=10",
            paragraphs: [
                "Sri Lanka is a democratic republic with an executive presidency and a parliamentary system. The Constitution establishes the country's main governing institutions.",
                "The President serves as Head of State, while Parliament exercises legislative power. The judiciary interprets and applies the law."
            ]
        },
        {
            title: "Parliament",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9baLLA_JJ8-jMym0knBK6AqOFJENRS0WMT4HHFsxTg&s=10",
            paragraphs: [
                "Sri Lanka's Parliament consists of 225 members. It plays an important role in legislation, public finance and government oversight.",
                "The parliamentary complex is located in Sri Jayawardenepura Kotte, the country's administrative capital."
            ]
        },
        {
            title: "Provincial Administration",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5Tlc-tZOZ6Jml8Nri8v9j3Vny6jmd91faGHNfsvy5A&s=10",
            paragraphs: [
                "Sri Lanka is divided into nine provinces and 25 districts. Provincial and local government institutions support regional administration.",
                "District Secretariats and Divisional Secretariats provide important administrative services to communities."
            ]
        }
    ],

    "History & Victories": [
        {
            title: "Ancient Kingdoms",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWNFgFiL5ULj9heHCuaseWZK9rDK9bC_ocXm4BrCpdA&s=10",
            paragraphs: [
                "Sri Lanka has a long history of kingdoms, trade and cultural development. Anuradhapura and Polonnaruwa were major ancient capitals.",
                "Sigiriya, ancient reservoirs, Buddhist monuments and royal palaces demonstrate the engineering and artistic achievements of earlier civilisations."
            ]
        },
        {
            title: "Independence",
            image: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_a27fa5b810.jpg",
            paragraphs: [
                "Sri Lanka gained independence from British rule on 4 February 1948. This marked an important milestone in the country's modern political history.",
                "The country became a republic in 1972, adopting the name Sri Lanka."
            ]
        },
        {
            title: "Cricket World Cup Victory",
            image: "cricket",
            paragraphs: [
                "Sri Lanka won the ICC Cricket World Cup in 1996. The victory became one of the most celebrated achievements in the country's sporting history.",
                "The team was captained by Arjuna Ranatunga, and the victory inspired generations of Sri Lankan cricketers."
            ]
        },
        {
            title: "Olympic Achievements",
            image: "cricket",
            paragraphs: [
                "Duncan White won an Olympic silver medal in athletics in 1948, becoming an important figure in Sri Lankan sporting history.",
                "Susanthika Jayasinghe earned an Olympic silver medal in the women's 200 metres at the 2000 Sydney Olympics."
            ]
        }
    ],

    "Economy & Industries": [
        {
            title: "Tea Industry",
            image: "tea",
            paragraphs: [
                "Ceylon Tea is one of Sri Lanka's most recognised exports. Tea cultivation is especially important in the central highlands.",
                "The industry provides employment in plantations, factories, transport, packaging and international trade."
            ]
        },
        {
            title: "Agriculture",
            image: "forests",
            paragraphs: [
                "Agriculture remains important to Sri Lanka's economy and rural communities. Major crops include rice, coconut, rubber, tea, spices, fruits and vegetables.",
                "Irrigation systems, rainfall patterns and soil conditions influence agricultural production throughout the country."
            ]
        },
        {
            title: "Manufacturing & Services",
            image: "industry",
            paragraphs: [
                "Apparel manufacturing, food processing and other industries contribute to Sri Lanka's economy.",
                "Banking, information technology, transportation, education and professional services also support employment and economic activity."
            ]
        }
    ],

    "Education & Schools": [
        {
            title: "School Education",
            image: "school",
            paragraphs: [
                "Sri Lanka has a long-established system of free public education. School education includes primary, junior secondary and senior secondary levels.",
                "Students typically sit for G.C.E. Ordinary Level and Advanced Level examinations, which play important roles in further education."
            ]
        },
        {
            title: "Universities",
            image: "university",
            paragraphs: [
                "Sri Lanka has state universities and other higher education institutions offering qualifications in medicine, engineering, computing, business, arts and science.",
                "Universities support research, professional development and the training of skilled graduates."
            ]
        },
        {
            title: "Technical & Vocational Education",
            image: "school",
            paragraphs: [
                "Technical colleges and vocational training institutions provide practical education for employment and professional development.",
                "Training areas include information technology, engineering technology, hospitality, construction and other skilled occupations."
            ]
        }
    ],

    "Natural Resources": [
        {
            title: "Gems & Minerals",
            image: "gems",
            paragraphs: [
                "Sri Lanka is internationally known for gemstones, particularly sapphires. Ratnapura is a major centre of gemstone mining and trade.",
                "Other mineral resources include graphite, limestone, clay and mineral sands."
            ]
        },
        {
            title: "Water Resources",
            image: "water",
            paragraphs: [
                "Rivers, reservoirs and natural catchments provide water for agriculture, households and electricity generation.",
                "Ancient irrigation tanks remain important examples of Sri Lanka's historical water-management systems."
            ]
        },
        {
            title: "Forests & Wildlife",
            image: "wildlife",
            paragraphs: [
                "Sri Lanka's forests support elephants, leopards, birds, reptiles and many endemic species.",
                "National parks, forest reserves and conservation programmes help protect these ecosystems."
            ]
        }
    ],

    "Tourism & Hotels": [
        {
            title: "Beach Resorts",
            image: "beach",
            paragraphs: [
                "Sri Lanka has beautiful beaches along its western, southern, eastern and northern coastlines.",
                "Bentota, Mirissa, Hikkaduwa and Pasikudah offer accommodation ranging from guesthouses to large beach resorts."
            ]
        },
        {
            title: "Hill Country Hotels",
            image: "hillhotel",
            paragraphs: [
                "Ella, Nuwara Eliya and Haputale are famous for mountain scenery, tea plantations and cooler weather.",
                "Visitors can stay in boutique hotels, guesthouses, homestays and scenic mountain retreats."
            ]
        },
        {
            title: "Safari & Eco Lodges",
            image: "safari",
            paragraphs: [
                "Sri Lanka offers wildlife tourism around national parks such as Yala, Udawalawe and Wilpattu.",
                "Eco lodges and safari accommodation provide access to nature experiences and wildlife observation."
            ]
        },
        {
            title: "City & Heritage Hotels",
            image: "hotel",
            paragraphs: [
                "Colombo, Kandy and Galle offer modern hotels, boutique accommodation and heritage properties.",
                "Travellers can choose accommodation based on location, facilities, accessibility and their preferred travel experience."
            ]
        }
    ]
};

// ==========================================
// 4. EXECUTIVE PRESIDENTS
// ==========================================

const presidents = [
    {
        name: "J. R. Jayewardene",
        years: "1978–1989",
        description: "Sri Lanka's first executive President under the 1978 Constitution. His presidency included significant economic and constitutional changes."
    },
    {
        name: "Ranasinghe Premadasa",
        years: "1989–1993",
        description: "Known for housing and rural development programmes. His presidency ended with his assassination in 1993."
    },
    {
        name: "D. B. Wijetunga",
        years: "1993–1994",
        description: "Became President following the death of Ranasinghe Premadasa and served during a transitional period."
    },
    {
        name: "Chandrika Bandaranaike Kumaratunga",
        years: "1994–2005",
        description: "Sri Lanka's first female President. Her presidency included political reform efforts and developments related to the civil conflict."
    },
    {
        name: "Mahinda Rajapaksa",
        years: "2005–2015",
        description: "His presidency included the end of the civil war in 2009 and major infrastructure development projects."
    },
    {
        name: "Maithripala Sirisena",
        years: "2015–2019",
        description: "His presidency included constitutional reforms and major governance debates."
    },
    {
        name: "Gotabaya Rajapaksa",
        years: "2019–2022",
        description: "His presidency coincided with the COVID-19 pandemic and a severe economic crisis. He resigned in 2022."
    },
    {
        name: "Ranil Wickremesinghe",
        years: "2022–2024",
        description: "Became President during the economic crisis and pursued economic stabilisation policies."
    },
    {
        name: "Anura Kumara Dissanayake",
        years: "2024–",
        description: "Became President in September 2024. Refer to official government sources for current policies and developments."
    }
];

// ==========================================
// 5. HTML ELEMENT HELPERS
// ==========================================

const topicRoot = document.getElementById("topicRoot");
const topicSearch = document.getElementById("topicSearch");
const clearSearch = document.getElementById("clearSearch");

function createElement(tag, className = "", text = "") {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}

// ==========================================
// 6. CREATE ACCORDION
// ==========================================

function createAccordion(title, level = 1) {
    const details = createElement(
        "details",
        `accordion accordion-level-${level}`
    );

    const summary = createElement("summary", "", title);
    const body = createElement("div", "accordion-body");

    details.appendChild(summary);
    details.appendChild(body);

    return {
        element: details,
        body: body
    };
}

// ==========================================
// 7. CREATE IMAGE
// ==========================================

function createImage(imageName, title) {
    const wrapper = createElement("div", "detail-photo");
    const image = document.createElement("img");

    
image.src = imageName.startsWith("http")
    ? imageName
    : `../assets/images/about/${imageName}.jpg`;

    image.alt = title;
    image.loading = "lazy";

    image.onerror = function () {
        image.remove();

        const placeholder = createElement(
            "div",
            "image-missing",
            `Add photo: ${imageName}.jpg`
        );

        wrapper.appendChild(placeholder);
    };

    wrapper.appendChild(image);

    return wrapper;
}

// ==========================================
// 8. CREATE DETAILED CONTENT PANEL
// ==========================================

function createDetail(title, imageName, paragraphs, tags = []) {
    const panel = createElement("article", "detail-panel");

    const image = createImage(imageName, title);
    const content = createElement("div");

    const heading = createElement("h4", "", title);
    content.appendChild(heading);

    paragraphs.forEach(paragraph => {
        const p = createElement("p", "", paragraph);
        content.appendChild(p);
    });

    if (tags.length > 0) {
        const tagContainer = createElement("div", "district-tags");

        tags.forEach(tag => {
            const span = createElement("span", "", tag);
            tagContainer.appendChild(span);
        });

        content.appendChild(tagContainer);
    }

    panel.appendChild(image);
    panel.appendChild(content);

    return panel;
}

// ==========================================
// 9. DISTRICT DROPDOWN
// ==========================================

function createDistrict(name) {
    const data = districts[name];

    if (!data) {
        return null;
    }

    const accordion = createAccordion(
        `${name} District`,
        3
    );

    const imageName = name
        .toLowerCase()
        .replace(/\s+/g, "-");

    const paragraphs = [
        `Geography: ${data.geography}`,
        `History: ${data.history}`,
        `Economy: ${data.economy}`,
        `Tourism: ${data.tourism}`
    ];

    const detail = createDetail(
        `${name} District`,
        imageName,
        paragraphs,
        [name, "Sri Lanka"]
    );

    accordion.body.appendChild(detail);

    return accordion.element;
}

// ==========================================
// 10. PROVINCES AND DISTRICTS
// ==========================================

function createProvincesSection(searchTerm) {
    const section = createAccordion(
        "🗺️ Provinces, Districts & Map — 9 Provinces / 25 Districts",
        1
    );

    const mapBlock = createElement("div", "map-block");

    const mapDescription = createElement(
        "p",
        "",
        "Select a province to view its districts. Click a district to explore its geography, history, economy and tourism."
    );

    const map = document.createElement("iframe");

    map.title = "Map of Sri Lanka";
    map.loading = "lazy";

    map.src =
        "https://www.openstreetmap.org/export/embed.html" +
        "?bbox=79.45%2C5.75%2C82.15%2C9.95&layer=mapnik";

    mapBlock.appendChild(mapDescription);
    mapBlock.appendChild(map);

    section.body.appendChild(mapBlock);

    let found = false;

    provinces.forEach(province => {
        const provinceMatches = province.name
            .toLowerCase()
            .includes(searchTerm);

        const showAll =
            !searchTerm ||
            provinceMatches ||
            "provinces districts map sri lanka".includes(searchTerm);

        const matchingDistricts = province.districts.filter(name => {
            return showAll || name.toLowerCase().includes(searchTerm);
        });

        if (matchingDistricts.length === 0) {
            return;
        }

        found = true;

        const provinceAccordion = createAccordion(
            `${province.name} (${province.districts.length} Districts)`,
            2
        );

        matchingDistricts.forEach(name => {
            const districtElement = createDistrict(name);

            if (districtElement) {
                provinceAccordion.body.appendChild(districtElement);

                if (searchTerm) {
                    districtElement.open = true;
                }
            }
        });

        if (searchTerm) {
            provinceAccordion.element.open = true;
        }

        section.body.appendChild(provinceAccordion.element);
    });

    if (searchTerm) {
        section.element.open = true;
    }

    return found ? section.element : null;
}

// ==========================================
// 11. GENERAL TOPIC DROPDOWNS
// ==========================================

function createTopicSection(categoryName, items, searchTerm) {
    const categoryMatches = categoryName
        .toLowerCase()
        .includes(searchTerm);

    const matchingItems = items.filter(item => {
        const searchableText = [
            item.title,
            ...item.paragraphs
        ].join(" ").toLowerCase();

        return (
            !searchTerm ||
            categoryMatches ||
            searchableText.includes(searchTerm)
        );
    });

    if (matchingItems.length === 0) {
        return null;
    }

    const category = createAccordion(
        `📖 ${categoryName}`,
        1
    );

    matchingItems.forEach(item => {
        const itemAccordion = createAccordion(item.title, 2);

        const detail = createDetail(
            item.title,
            item.image,
            item.paragraphs
        );

        itemAccordion.body.appendChild(detail);
        category.body.appendChild(itemAccordion.element);

        if (searchTerm) {
            itemAccordion.element.open = true;
        }
    });

    if (searchTerm) {
        category.element.open = true;
    }

    return category.element;
}

// ==========================================
// 12. PRESIDENTS DROPDOWN
// ==========================================

function createPresidentsSection(searchTerm) {
    const categoryMatches =
        "executive presidents president leadership government"
            .includes(searchTerm);

    const matchingPresidents = presidents.filter(president => {
        const text = (
            president.name + " " +
            president.years + " " +
            president.description
        ).toLowerCase();

        return (
            !searchTerm ||
            categoryMatches ||
            text.includes(searchTerm)
        );
    });

    if (matchingPresidents.length === 0) {
        return null;
    }

    const category = createAccordion(
        "🏛️ Executive Presidents — Individual Profiles",
        1
    );

    matchingPresidents.forEach(president => {
        const item = createAccordion(
            `${president.name} (${president.years})`,
            2
        );

        const imageName = "president-" +
            president.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/-$/, "");

        const detail = createDetail(
            president.name,
            imageName,
            [
                president.description,
                `Term of office: ${president.years}.`
            ]
        );

        item.body.appendChild(detail);
        category.body.appendChild(item.element);

        if (searchTerm) {
            item.element.open = true;
        }
    });

    if (searchTerm) {
        category.element.open = true;
    }

    return category.element;
}

// ==========================================
// 13. RENDER ALL DROPDOWNS
// ==========================================

function renderTopics() {
    if (!topicRoot || !topicSearch) {
        return;
    }

    topicRoot.innerHTML = "";

    const searchTerm = topicSearch.value
        .trim()
        .toLowerCase();

    let resultCount = 0;

    // Provinces and districts
    const provincesSection = createProvincesSection(searchTerm);

    if (provincesSection) {
        topicRoot.appendChild(provincesSection);
        resultCount++;
    }

    // Other categories
    Object.entries(topics).forEach(([categoryName, items]) => {
        const section = createTopicSection(
            categoryName,
            items,
            searchTerm
        );

        if (section) {
            topicRoot.appendChild(section);
            resultCount++;
        }
    });

    // Presidents
    const presidentsSection = createPresidentsSection(searchTerm);

    if (presidentsSection) {
        topicRoot.appendChild(presidentsSection);
        resultCount++;
    }

    // No results
    if (resultCount === 0) {
        const message = createElement(
            "p",
            "empty-results",
            "No matching topics found. Please try another search term."
        );

        topicRoot.appendChild(message);
    }
}

// ==========================================
// 14. SEARCH FUNCTIONALITY
// ==========================================

if (topicSearch) {
    topicSearch.addEventListener("input", renderTopics);
}

// ==========================================
// 15. CLEAR SEARCH
// ==========================================

if (clearSearch && topicSearch) {
    clearSearch.addEventListener("click", function () {
        topicSearch.value = "";

        renderTopics();

        topicSearch.focus();
    });
}

// ==========================================
// 16. INITIALIZE ABOUT PAGE
// ==========================================

renderTopics();

/* =========================================
   PROVINCE CARD DROPDOWNS
========================================= */

function renderProvinceCards() {

    const provinceGrid = document.getElementById("provinceGrid");

    if (!provinceGrid) {
        return;
    }

    provinceGrid.innerHTML = "";

    provinces.forEach(province => {

        // Main province dropdown
        const provinceCard = document.createElement("details");
        provinceCard.className = "province-card";

        const provinceSummary = document.createElement("summary");

        const title = document.createElement("h3");
        title.textContent = province.name;

        const preview = document.createElement("p");
        preview.className = "district-preview";
        preview.textContent = province.districts.join(", ");

        provinceSummary.appendChild(title);
        provinceSummary.appendChild(preview);

        provinceCard.appendChild(provinceSummary);

        // District container
        const districtContainer = document.createElement("div");
        districtContainer.className = "province-districts";

        province.districts.forEach(districtName => {

            const districtData = districts[districtName];

            if (!districtData) {
                return;
            }

            const districtCard = document.createElement("details");
            districtCard.className = "province-district";

            const districtSummary = document.createElement("summary");
            districtSummary.textContent = districtName + " District";

            const content = document.createElement("div");
            content.className = "province-district-content";

            // District image
            const image = document.createElement("img");

            const imageName = districtName
                .toLowerCase()
                .replace(/\s+/g, "-");

            image.src = "../assets/images/about/" + imageName + ".jpg";
            image.alt = districtName + " District";
            image.loading = "lazy";

            image.onerror = function () {
                image.remove();

                const placeholder = document.createElement("p");
                placeholder.textContent =
                    "Add image: " + imageName + ".jpg";

                content.prepend(placeholder);
            };

            content.appendChild(image);

            // District details
            const sections = [
                ["Geography", districtData.geography],
                ["History", districtData.history],
                ["Economy", districtData.economy],
                ["Tourism", districtData.tourism]
            ];

            sections.forEach(([heading, description]) => {

                const h4 = document.createElement("h4");
                h4.textContent = heading;

                const p = document.createElement("p");
                p.textContent = description;

                content.appendChild(h4);
                content.appendChild(p);

            });

            districtCard.appendChild(districtSummary);
            districtCard.appendChild(content);

            districtContainer.appendChild(districtCard);

        });

        provinceCard.appendChild(districtContainer);
        provinceGrid.appendChild(provinceCard);

    });

}

// Initialize province dropdowns
renderProvinceCards();
