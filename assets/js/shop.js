let shopSelectedType = "";
let searchFilter = "";

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("shop-search");
    if (!searchBar) return alert("search bar not found");

    // Listen for changes on the search bar
    searchBar.addEventListener("keyup", () => setSearchFilter(searchBar.value));

    // Default to showing cars
    setSelectedShopType("car");
});

function setSelectedShopType(type) {
    shopSelectedType = type;
    populateShop();
}

function setSearchFilter(filter) {
    searchFilter = filter;
    populateShop();
}

function populateShop() {
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return alert("product container not found");

    let items = inventory[shopSelectedType];

    // Filter by search value
    if (searchFilter.length) {
        items = items.filter(item => {

            if (item.type == "car") {

                // Search title
                if (item.title.toLowerCase().includes(searchFilter.toLowerCase()))
                    return true;

                // Search tags
                if (item.tags.some(tag => tag.toLowerCase().includes(searchFilter.toLowerCase())))
                    return true;

            } else if (item.type == "car_part") {

                // Search name
                if (item.name.toLowerCase().includes(searchFilter.toLowerCase()))
                    return true;

            } else if (item.type == "accessory") {

                // Search name
                if (item.name.toLowerCase().includes(searchFilter.toLowerCase()))
                    return true;

            }

            return false;
        });
    }

    // Reset element
    productContainer.innerHTML = "";

    // Add items
    for (const item of items)
        productContainer.innerHTML += buildItemHTML(item);
}

function buildItemHTML(item) {
    let html = ``;
    html += `<div class="product-card">`;
    html += `<img src="${item.image}" width="100%" height="80%" />`;
    html += `<p class="product-price">£${new Intl.NumberFormat().format(item.price)}</p>`;

    if (item.type == "car") {
        html += `<p class="product-title">${item.title}</p>`;
        html += `<div>`;
        html += item.tags.map(tag => `<span class="product-tag">${tag}</span>`).join("");
        html += `</div>`;
    }
    else if (item.type == "car_part") {
        html += `<p class="product-title">${item.name}</p>`;
        html += `<p class="product-title">${item.productID}</p>`;
    }
    else if (item.type == "accessory") {
        html += `<p class="product-title">${item.name}</p>`;
    }

    html += `</div>`;
    return html;
}

const inventory = {
    car: [
        {
            type: "car",
            price: 5990,
            title: "2015 Vauxhall Insignia",
            tags: ["2015", "225,000 km", "Manual"],
            image: "/assets/images/cars/1745480928299-3a0bae69-b5cb-4b48-ac84-e3e8e9ca6ae5.jpeg"
        },
        {
            type: "car",
            price: 7750,
            title: "2014 Hyundai IX35",
            tags: ["2014", "257,000 km", "Manual"],
            image: "/assets/images/cars/1745479372225-875116e6-e87b-46eb-ba8e-93f86009e9ff.jpeg"
        },
        {
            type: "car",
            price: 7995,
            title: "2014 Volkswagen Golf",
            tags: ["2014", "226,000 km", "Manual"],
            image: "/assets/images/cars/1745419377756-99688de1-9b8f-4470-bdbb-152dcd5b388a.jpeg"
        },
        {
            type: "car",
            price: 15850,
            title: "2021 Seat Ibiza",
            tags: ["2021", "74,000 km", "Manual"],
            image: "/assets/images/cars/1744661528213-95d6ee49-5215-436a-8824-2f1f5689f500.jpeg"
        },
        {
            type: "car",
            price: 8990,
            title: "2014 Honda CR-V",
            tags: ["2014", "239,000 km", "Manual"],
            image: "/assets/images/cars/1743166539451-be27da35-378d-4c12-bf69-eb56916d1357.jpg"
        },
        {
            type: "car",
            price: 16500,
            title: "2017 Mercedes-Benz CLA",
            tags: ["2017", "199,000 km", "Automatic"],
            image: "/assets/images/cars/1743166514504-35723598-83f7-4102-b431-68f0dfba369a.jpg"
        },
        {
            type: "car",
            price: 4770,
            title: "2013 Nissan Qashqai+2",
            tags: ["2013", "231,458 km", "Manual"],
            image: "/assets/images/cars/1743166519261-51bc83e7-1c89-4d5d-8b87-62933ff6731d.jpg"
        },
        {
            type: "car",
            price: 9990,
            title: "2016 Volkswagen Passat",
            tags: ["2016", "225,000 km", "Manual"],
            image: "/assets/images/cars/1743166535005-61943357-6f7f-4bb2-a41f-57b656a8d6d9.jpg"
        },
        {
            type: "car",
            price: 8990,
            title: "2017 Peugeot 508",
            tags: ["2017", "221,000 km", "Manual"],
            image: "/assets/images/cars/1743166501186-05135d42-bfd7-4e08-80f3-28dbeaa747f9.jpg"
        }
    ],
    car_part: [
        {
            type: "car_part",
            name: "Lion AGM Stop/Start 019 95AH 850CCA Car Battery - 3 year Guarantee",
            productID: "444777001",
            price: 189.99,
            image: "/assets/images/car_parts/444777001.webp",
        },
        {
            type: "car_part",
            name: "NGK Spark Plug",
            productID: "408110310",
            price: 14.09,
            image: "/assets/images/car_parts/408110310.webp",
        },
        {
            type: "car_part",
            name: "Shell Helix Ultra 0W-20 ECT C6 1Ltr",
            productID: "521770192",
            price: 12.99,
            image: "/assets/images/car_parts/521770192.webp",
        },
        {
            type: "car_part",
            name: "Wynns Hydraulic Fluid CHF11S 1Ltr",
            productID: "555770310",
            price: 25.99,
            image: "/assets/images/car_parts/555770310.webp",
        },
        {
            type: "car_part",
            name: "Mahle Oil Filter",
            productID: "501110104",
            price: 19.49,
            image: "/assets/images/car_parts/501110104.webp",
        },
        {
            type: "car_part",
            name: "Bosch Air Filter",
            productID: "502110187",
            price: 34.19,
            image: "/assets/images/car_parts/502110187.webp",
        },
        {
            type: "car_part",
            name: "Bilstein Shock Absorber (Front)",
            productID: "635112645",
            price: 130.99,
            image: "/assets/images/car_parts/635112645.webp",
        },
        {
            type: "car_part",
            name: "Sachs Coil Spring (Front)",
            productID: "627113170",
            price: 85.99,
            image: "/assets/images/car_parts/627113170.webp",
        },
        {
            type: "car_part",
            name: "Macht Mirror Cover (Left)",
            productID: "489111831",
            price: 43.49,
            image: "/assets/images/car_parts/489111831.webp",
        },
    ],
    accessory: [
        {
            type: "accessory",
            name: "Some Top Tech 1800W Pressure Washer 135 Bar",
            price: 59.99,
            image: "/assets/images/accessories/529771511.webp",
        },
        {
            type: "accessory",
            name: "Martin Cox Standard Jumbo Sponge 200 x 120 x 50mm",
            price: 0.99,
            image: "/assets/images/accessories/553000780.webp",
        },
        {
            type: "accessory",
            name: "Top Tech Snow Foam Lance",
            price: 16.99,
            image: "/assets/images/accessories/552999590.webp",
        },
        {
            type: "accessory",
            name: "Martin Cox 20 Litre White Detailing/Valeting Bucket",
            price: 5.99,
            image: "/assets/images/accessories/552980430.webp",
        },
        {
            type: "accessory",
            name: "Go4 Auto Air Con Cleaner 150ml",
            price: 3.69,
            image: "/assets/images/accessories/552777691.webp",
        },
        {
            type: "accessory",
            name: "Osram NIGHT BREAKER H7 +220%",
            price: 29.99,
            image: "/assets/images/accessories/481770224.webp",
        },
        {
            type: "accessory",
            name: "Stoplock Pro Elite Steering Wheel Lock",
            price: 47.99,
            image: "/assets/images/accessories/553990190.webp",
        },
        {
            type: "accessory",
            name: "California Scents - Car Scents Coronado Cherry",
            price: 4.49,
            image: "/assets/images/accessories/550770651.webp",
        },
        {
            type: "accessory",
            name: "Carplan Oil Drain Can 9Ltr",
            price: 14.89,
            image: "/assets/images/accessories/553772120.webp",
        },
    ],
};

// Car:
// {
//     type: "car",
//     price: 1000,
//     title: "Used 2015 Car",
//     tags: ["2015", "100,000 miles", "Manual"],
//     image: "url",
// }

// Car part:
// {
//     type: "car_part",
//     name: "Some part",
//     productID: "21923G",
//     price: 10.99,
//     image: "url",
// }

// Accessory:
// {
//     type: "accessory",
//     name: "Pressure washer",
//     price: 50,
//     image: "url",
// }
