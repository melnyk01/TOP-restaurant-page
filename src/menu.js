export function menu() {
    const menu = document.createElement('div');
    menu.className = 'menu';
    const meals = [
        {
            name: 'Guláš',
            description: 'A hearty beef stew slow-cooked with onions, paprika, and spices, typically served with bread dumplings.',
            price: '$9.90',
            category: 'Popular'
        },
        {
            name: 'Svíčková',
            description: 'Tender beef in a creamy root vegetable sauce, traditionally served with bread dumplings, whipped cream, and cranberries.',
            price: '$9.90',
            category: 'Popular'
        },
        {
            name: 'Pancakes',
            description: 'Thin or fluffy cakes made from batter and served with sweet toppings like syrup, fruit, chocolate, or whipped cream.',
            price: '$9.90',
            category: 'Popular'
        },
        {
            name: 'Borshch',
            description: 'A traditional beetroot soup with vegetables, often containing beef and served with sour cream.',
            price: '$9.90',
            category: "Chef's Picks",
        },
        {
            name: 'Smažák',
            description: 'A breaded and deep-fried cheese, usually served with fries, tartar sauce, and a side salad.',
            price: '$9.90',
            category: "Chef's Picks",
        },
        {
            name: 'Pasta',
            description: 'Cooked noodles served with a variety of sauces, such as tomato, cream, pesto, or meat-based sauces.',
            price: '$9.90',
            category: "Chef's Picks",
        }
    ]
    function createMeal(meal) {
        const card = document.createElement('div');
        card.className = 'card';
        const mealName = document.createElement('div');
        const mealDescription = document.createElement('div');
        const mealPrice = document.createElement('div');
        const mealCategory = document.createElement('div');
        mealName.textContent = meal.name;
        mealDescription.textContent = meal.description;
        mealPrice.textContent = meal.price;
        mealCategory.textContent = meal.category;

        card.appendChild(mealName);
        card.appendChild(mealDescription);
        card.appendChild(mealPrice);

        menu.appendChild(card);
    }
    for (const meal of meals) {
        createMeal(meal);
    }
    return menu
}