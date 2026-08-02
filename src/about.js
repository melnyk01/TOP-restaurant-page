export function about() {
    const about = document.createElement('div');
    about.className = 'about';
    const ourStory = document.createElement('h1');
    const story = document.createElement('p')

    const philosophy = document.createElement('h1')
    const philosophyText = document.createElement('p');
    ourStory.textContent = 'Our story'
    story.textContent = `
    Vaddy's started with a simple idea:
    bring traditional Czech and Ukrainian recipes
    together using fresh local ingredients.

    Every dish is prepared from scratch with
    recipes inspired by family kitchens.`
    philosophy.textContent = 'Our Philosophy'
    philosophyText.textContent = `Fresh ingredients.
Homemade recipes.
Authentic flavors.

We believe good food comes from
quality ingredients and careful preparation.`

    const visitUs = document.createElement('h1')
    const visitUsLocation = document.createElement('p');
    const visitUsWeekday = document.createElement('p');
    const visitUsWeekend = document.createElement('p');
    visitUs.textContent = 'Visit Us!'
    visitUsLocation.textContent = '📍 Prague, Czech Republic'
    visitUsWeekday.textContent = 'Monday–Friday: 10:00–22:00'
    visitUsWeekend.textContent = 'Saturday–Sunday: 11:00–23:00'

    about.appendChild(ourStory);
    about.appendChild(story);
    about.appendChild(philosophy);
    about.appendChild(philosophyText);
    about.appendChild(visitUs);
    about.appendChild(visitUsLocation);
    about.appendChild(visitUsWeekday);
    about.appendChild(visitUsWeekend);

    return about
}