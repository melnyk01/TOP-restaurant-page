import frenchToast from './images/frenchToast.jpg'
export function todaysSpecial() {
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