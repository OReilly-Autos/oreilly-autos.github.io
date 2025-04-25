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
            image: "https://cdn-api.kobos.io/dealer-car-images/1745480928299-3a0bae69-b5cb-4b48-ac84-e3e8e9ca6ae5"
        },
        {
            type: "car",
            price: 7750,
            title: "2014 Hyundai IX35",
            tags: ["2014", "257,000 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1745479372225-875116e6-e87b-46eb-ba8e-93f86009e9ff"
        },
        {
            type: "car",
            price: 7995,
            title: "2014 Volkswagen Golf",
            tags: ["2014", "226,000 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1745419377756-99688de1-9b8f-4470-bdbb-152dcd5b388a"
        },
        {
            type: "car",
            price: 15850,
            title: "2021 Seat Ibiza",
            tags: ["2021", "74,000 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1744661528213-95d6ee49-5215-436a-8824-2f1f5689f500"
        },
        {
            type: "car",
            price: 8990,
            title: "2014 Honda CR-V",
            tags: ["2014", "239,000 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1743166539451-be27da35-378d-4c12-bf69-eb56916d1357.jpg"
        },
        {
            type: "car",
            price: 16500,
            title: "2017 Mercedes-Benz CLA",
            tags: ["2017", "199,000 km", "Automatic"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1743166514504-35723598-83f7-4102-b431-68f0dfba369a.jpg"
        },
        {
            type: "car",
            price: 4770,
            title: "2013 Nissan Qashqai+2",
            tags: ["2013", "231,458 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1743166519261-51bc83e7-1c89-4d5d-8b87-62933ff6731d.jpg"
        },
        {
            type: "car",
            price: 9990,
            title: "2016 Volkswagen Passat",
            tags: ["2016", "225,000 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1743166535005-61943357-6f7f-4bb2-a41f-57b656a8d6d9.jpg"
        },
        {
            type: "car",
            price: 8990,
            title: "2017 Peugeot 508",
            tags: ["2017", "221,000 km", "Manual"],
            image: "https://cdn-api.kobos.io/dealer-car-images/1743166501186-05135d42-bfd7-4e08-80f3-28dbeaa747f9.jpg"
        }
    ],
    car_part: [
        {
            type: "car_part",
            name: "Lion AGM Stop/Start 019 95AH 850CCA Car Battery - 3 year Guarantee",
            productID: "444777001",
            price: 189.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/444777001/?guid=ztc6puxzh91kbz6yihynj4c5e86trd5uh6fd37e&currentVersion=1722960121000",
        },
        {
            type: "car_part",
            name: "NGK Spark Plug",
            productID: "408110310",
            price: 14.09,
            image: "https://lkqmedia.carparts4less.co.uk/product/408110310/?guid=ztc6puxzh91kb595s8dsfgrm69sw4og4sijn1ja&currentVersion=1716861420000",
        },
        {
            type: "car_part",
            name: "Shell Helix Ultra 0W-20 ECT C6 1Ltr",
            productID: "521770192",
            price: 12.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/521770192/?guid=ztc6puxzh91kyjkmj6nrtkxnnoz83nikbuzzuzy&currentVersion=1722960356000",
        },
        {
            type: "car_part",
            name: "Wynns Hydraulic Fluid CHF11S 1Ltr",
            productID: "555770310",
            price: 25.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/555770310/?guid=ztc6puxzh91kbzwg8hosu8xeqyz83nikbuzzuzy&currentVersion=1715787235000",
        },
        {
            type: "car_part",
            name: "Mahle Oil Filter",
            productID: "501110104",
            price: 19.49,
            image: "https://lkqmedia.carparts4less.co.uk/product/501110104/?guid=ztc6puxzh91kyg911u4fse5khfpgncu43qza3fy&currentVersion=1716857636000",
        },
        {
            type: "car_part",
            name: "Bosch Air Filter",
            productID: "502110187",
            price: 34.19,
            image: "https://lkqmedia.carparts4less.co.uk/product/502110187/?guid=ztc6puxzh91kbytqozr3br1mcfrxye9cak8rnna&currentVersion=1723035129000",
        },
        {
            type: "car_part",
            name: "Bilstein Shock Absorber (Front)",
            productID: "635112645",
            price: 130.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/635112645/?guid=ztc6puxzh91kbw1xb7a3bj4c68hitc8msdhumpy&currentVersion=1714138862000",
        },
        {
            type: "car_part",
            name: "Sachs Coil Spring (Front)",
            productID: "627113170",
            price: 85.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/627113170/?guid=ztc6puxzh91kbmc77wjfdcmxcabzmkymo3fy3sy&currentVersion=1716911164000",
        },
        {
            type: "car_part",
            name: "Macht Mirror Cover (Left)",
            productID: "489111831",
            price: 43.49,
            image: "https://lkqmedia.carparts4less.co.uk/product/489111831/?guid=ztc6puxzh91kypjizb3zi43x9rf1r1pebyxcsaa&currentVersion=1715374725000",
        },
    ],
    accessory: [
        {
            type: "accessory",
            name: "Some Top Tech 1800W Pressure Washer 135 Bar",
            price: 59.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/529771511/?guid=ztc6puxzh91kyd3uyx368y7gcqctwz6cupjugpy&currentVersion=1715767216000",
        },
        {
            type: "accessory",
            name: "Martin Cox Standard Jumbo Sponge 200 x 120 x 50mm",
            price: 0.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/553000780/?guid=ztc6puxzh91kbytqozr3br1mcrdh8hint6q1hqe&currentVersion=1723035240000",
        },
        {
            type: "accessory",
            name: "Top Tech Snow Foam Lance",
            price: 16.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/552999590/?guid=ztc6puxzh91ky4w8qjrq6j6rub51ofhrane3pje&currentVersion=1731675524000",
        },
        {
            type: "accessory",
            name: "Martin Cox 20 Litre White Detailing/Valeting Bucket",
            price: 5.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/552980430/?guid=ztc6puxzh91kbirr7yg5js4xrxkk74dp4k5cimo&currentVersion=1734437239000",
        },
        {
            type: "accessory",
            name: "Go4 Auto Air Con Cleaner 150ml",
            price: 3.69,
            image: "https://lkqmedia.carparts4less.co.uk/product/552777691/?guid=ztc6puxzh91kyhus3fddpbuaeipgncu43qza3fy&currentVersion=1716846490000",
        },
        {
            type: "accessory",
            name: "Osram NIGHT BREAKER H7 +220%",
            price: 29.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/481770224/?guid=ztc6puxzh91kbt6t48y9exrmpbetgznwrfsa1ce&currentVersion=1728470805000",
        },
        {
            type: "accessory",
            name: "Stoplock Pro Elite Steering Wheel Lock",
            price: 47.99,
            image: "https://lkqmedia.carparts4less.co.uk/product/553990190/?guid=ztc6puxzh91kyzm7xzfk5aswjypthos33ngeieo&currentVersion=1745399877000",
        },
        {
            type: "accessory",
            name: "California Scents - Car Scents Coronado Cherry",
            price: 4.49,
            image: "https://lkqmedia.carparts4less.co.uk/product/550770651/?guid=ztc6puxzh91kbn771u5qsso78y1cq9kaimzrs9o&currentVersion=1737630093000",
        },
        {
            type: "accessory",
            name: "Carplan Oil Drain Can 9Ltr",
            price: 14.89,
            image: "https://lkqmedia.carparts4less.co.uk/product/553772120/?guid=ztc6puxzh91kbtw3wor79xgqdhkqcmm9o3j3m8y&currentVersion=1715194345000",
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
