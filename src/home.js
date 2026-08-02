import frenchToast from './images/frenchToast.jpg'
function header() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h1Text = document.createElement('h2');
    h1.textContent = 'Welcome to the Vaddy\'s';
    h1Text.textContent = 'Fresh ingredients. Homemade recipes.'
    header.appendChild(h1);
    header.appendChild(h1Text);
    return header;
}
function todaysSpecial() {
    const todaysSpecial = document.createElement('div');
    todaysSpecial.className = 'special';
    const h2 = document.createElement('h2');
    const specialImage = document.createElement('img');
    const specialDescription = document.createElement('div');
    const mealPrice = document.createElement('div');
    h2.textContent = 'Today\'s special';
    specialImage.src = frenchToast;
    specialDescription.textContent = 'Golden brioche served with fresh fruits, maple syrup and powdered sugar.';
    mealPrice.textContent = '$9.90'
    todaysSpecial.appendChild(h2);
    todaysSpecial.appendChild(specialImage);
    todaysSpecial.appendChild(specialDescription);
    todaysSpecial.appendChild(mealPrice);
    return todaysSpecial
}
function footer() {
    const footer = document.createElement('footer');
    const credits = document.createElement('div');
    const author = document.createElement('a');
    credits.textContent = 'French Toast by ';
    author.textContent = 'Joseph Gonzalez';
    author.setAttribute('href', 'https://unsplash.com/@miracletwentyone');
    credits.append(author);
    footer.appendChild(credits);

    return footer
}

export function home() {
    const home = document.createElement('div');
    home.className = 'home';
    home.appendChild(header());
    home.appendChild(todaysSpecial());
    home.appendChild(footer());

    return home;
}