document.addEventListener('DOMContentLoaded', () => {
    const carList = [/* Your car list array from component */];

    // Render initial cars
    renderCars(carList);

    // Add search functionality
    document.querySelector('.search-input').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = carList.filter(car =>
            car.name.toLowerCase().includes(searchTerm)
        );
        renderCars(filtered);
    });

    // Add category filter functionality
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            // Add your filter logic here
            console.log('Filter by:', button.textContent);
        });
    });
});

function renderCars(cars) {
    const container = document.getElementById('car-list');
    container.innerHTML = '';

    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${car.imageUrl}" alt="${car.name}" class="item-image">
            <div class="item-info">
                <h3 class="item-name">${car.name}</h3>
                <p class="item-price">$${car.price.toLocaleString()}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Your car data
const carList = [
    {
        id: 1,
        name: 'Car 1',
        price: 20000,
        imageUrl: 'https://i.abcnewsfe.com/a/f43853f3...'
    },
    {
        id: 2,
        name: 'Car 2',
        price: 25000,
        imageUrl:
            'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
    },
    {
        id: 3,
        name: 'Car 3',
        price: 30000,
        imageUrl:
            'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
    },
    {
        id: 4,
        name: 'Car 4',
        price: 35000,
        imageUrl:
            'https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Rolls-Royce%20Droptail-jpg.jpeg?width=1200&height=900&name=Rolls-Royce%20Droptail-jpg.jpeg',
    },
    {
        id: 5,
        name: 'Car 1',
        price: 20000,
        imageUrl:
            'https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600',
    },
    {
        id: 6,
        name: 'Car 2',
        price: 25000,
        imageUrl:
            'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
    },
    {
        id: 7,
        name: 'Car 3',
        price: 30000,
        imageUrl:
            'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
    },
    {
        id: 8,
        name: 'Car 4',
        price: 35000,
        imageUrl:
            'https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Rolls-Royce%20Droptail-jpg.jpeg?width=1200&height=900&name=Rolls-Royce%20Droptail-jpg.jpeg',
    },
    {
        id: 9,
        name: 'Car 1',
        price: 20000,
        imageUrl:
            'https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600',
    },
    {
        id: 10,
        name: 'Car 2',
        price: 25000,
        imageUrl:
            'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg',
    },
    {
        id: 11,
        name: 'Car 3',
        price: 30000,
        imageUrl:
            'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds',
    },
    {
        id: 12,
        name: 'Car 4',
        price: 35000,
        imageUrl:
            'https://blog.sothebysrealty.co.uk/hs-fs/hubfs/Rolls-Royce%20Droptail-jpg.jpeg?width=1200&height=900&name=Rolls-Royce%20Droptail-jpg.jpeg',
    },
];