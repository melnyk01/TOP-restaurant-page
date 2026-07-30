import frenchToast from './images/frenchToast.jpg'
export function displayPageContent() {
    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('h1');
    const headerText = document.createElement('h2');
    header.textContent = 'Welcome to the Vaddy\'s';
    headerText.textContent = 'Fresh ingredients. Homemade recipes.'

    // Today's special
    const todaysSpecial = document.createElement('div');
    const h2 = document.createElement('h2');
    const mealImage = document.createElement('img');
    const mealDescription = document.createElement('div');
    const mealPrice = document.createElement('div');
    h2.textContent = 'Today\'s special';
    mealImage.src = frenchToast;
    mealDescription.textContent = 'Golden brioche served with fresh fruits, maple syrup and powdered sugar.';
    mealPrice.textContent = '$9.90'
    todaysSpecial.appendChild(h2);
    todaysSpecial.appendChild(mealImage);
    todaysSpecial.appendChild(mealDescription);
    todaysSpecial.appendChild(mealPrice);

    content.appendChild(header);
    content.appendChild(todaysSpecial);

    // Menu
    const menu = document.createElement('div');
    let menus = [
        [
            {
                name: 'Guláš',
                price: '$9.90',
                category: 'Popular'
            },
            {
                name: 'Svickova',
                price: '$9.90',
                category: 'Popular'
            },
            {
                name: 'Pancakes',
                price: '$9.90',
                category: 'Popular'
            },
        ],
        [
            {
                name: 'Borshch',
                price: '$9.90',
                category: "Chef's Picks",
            },
            {
                name: 'Smazak',
                price: '$9.90',
                category: "Chef's Picks",
            },
            {
                name: 'Pasta',
                price: '$9.90',
                category: "Chef's Picks",
            }
        ]
    ]
    for (let category of menus) {
        const meals = document.createElement('ul');
        for (const meal of category) {
            const card = document.createElement('div');
            const mealCategory = document.createElement('div');
            const mealName = document.createElement('div');
            const mealPrice = document.createElement('div');
            mealCategory.textContent = meal.category;
            mealName.textContent = meal.name;
            mealPrice.textContent = meal.price;

            card.appendChild(mealCategory);
            card.appendChild(mealName);
            card.appendChild(mealPrice);

            menu.appendChild(card);
        }
    }

    content.appendChild(menu);
}