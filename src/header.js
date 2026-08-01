export function header() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h1Text = document.createElement('h2');
    h1.textContent = 'Welcome to the Vaddy\'s';
    h1Text.textContent = 'Fresh ingredients. Homemade recipes.'
    header.appendChild(h1);
    header.appendChild(h1Text);
    return header;
}