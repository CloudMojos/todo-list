function createNavBar() {
    const header = document.createElement('header');
   
    const h1 = document.createElement('h1');
    h1.textContent = '📒 TodoTD 🏹';
    h1.className = 'logo';

    const ul = document.createElement('ul');
    ul.className = 'links';

    const liHome = document.createElement('li');
    liHome.className = 'clickable active';
    liHome.textContent = '🏠 Home';
    liHome.setAttribute('data-link', 'home');

    const liMenu = document.createElement('li');
    liMenu.className = 'clickable';
    liMenu.textContent = '📜 Menu';
    liMenu.setAttribute('data-link', 'menu');

    const liAbout = document.createElement('li');
    liAbout.className = 'clickble';
    liAbout.textContent = '❓ About';
    liAbout.setAttribute('data-link', 'about');

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liAbout);

    header.appendChild(h1);
    header.appendChild(ul);

    return header;
}

const nav = createNavBar();
export default nav;